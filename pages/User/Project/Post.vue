<template>
  <div class="mx-auto">
    <NavProject/>
    <div v-if='!$auth.user.numberphone' class="p-4 px-2 md:container mx-auto">
      <h1 class="text-xl text-gray-600 mb-4">Đăng dự án</h1>
      <p class="text-sm text-gray-600">Bạn cần <nuxt-link class="text-blue-400" to='/settings/account'>cập nhật thông tin cá nhân</nuxt-link> trước để đăng dự án</p>
    </div>
    <div v-else-if='$auth.user.profile.type!="Nhà tuyển dụng"' class="p-4 px-2 md:container mx-auto">
      <h1 class="text-xl text-gray-600 mb-4">Đăng dự án</h1>
      <p class="text-sm text-gray-600">Bạn cần <nuxt-link class="text-blue-400" to='/settings/profile'>trở thành nhà tuyển dụng</nuxt-link> trước để đăng dự án</p>
    </div>
    <div v-else class="p-4 px-2 md:container mx-auto">
      <FormInput class="block pb-4 shadow-md rounded-xl mb-8" title='Đăng dự án mới' textBtn='Đăng dự án' @submit='onPost'>
        <template>
          <InputGroup rules='required' text="Lĩnh vực cần tuyển" :visibleClearBtn='false'>
            <template slot="input">
              <v-select class="mb-2" :options="$store.state.tags.expertises" :reduce="expertise => expertise.id" v-model="project.expertise_id" label="name"></v-select>
            </template>
          </InputGroup>

          <InputGroup rules='required' text="Dịch vụ cần tuyển" :visibleClearBtn='false'>
            <template slot="input">
              <v-select class="mb-2" :options="$store.state.tags.services" :reduce="service => service.id" v-model="project.service_id" label="name"></v-select>
            </template>
          </InputGroup>

          <InputGroup rules='required' text="Kỹ năng yêu cầu" :visibleClearBtn='false'>
              <template slot="input">
                <v-select class="mb-2" multiple :options="$store.state.tags.skills" :reduce="skill => skill.id" v-model="project.skills" label="name"></v-select>
              </template>
          </InputGroup>

          <InputGroup rules='required' text="Tên dự án" @clear="project.name=''">
            <template slot="input">
              <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="project.name">
            </template>
          </InputGroup>

          <InputGroup rules='required' text="Nội dung dự án" :visibleClearBtn='false' @clear="project.content=''">
              <template slot="input">
                <vue-editor class="bg-gray-50 rounded-xl text-gray-700" :editorOptions="editorOptions" id="content-editor" :editor-toolbar="toolbarOptions" v-model="project.content" ></vue-editor>
              </template>
          </InputGroup>
          <ValidationProvider name='Hạn chào giá' rules='required|mintime:3' v-slot="{ errors }">
            <div class="sm:flex justify-between items-center sm:p-4 p-2 border-b border-gray-100">
              <p class="text-sm h-full sm:py-4 flex-1 text-gray-700 mb-2 sm:mb-0">Hạn chào giá</p>
              <div class="flex-2">
                <v-date-picker class="flex-2" is-expanded v-model="project.deadline_bids">
                  <template v-slot="{ inputValue, togglePopover }">
                      <div @click="togglePopover" class="shadow-md rounded-xl relative">
                          <input disabled :value="inputValue" class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full focus:border border-blue-400" spellcheck="false" type="text">
                          <img :src="require('@/assets/img/calendar.svg')" class="absolute top-0 bottom-0 right-0 w-12 p-3 text-sm rounded-xl cursor-pointer" alt="" srcset="">
                      </div>
                  </template>
                </v-date-picker>
                <span class="text-xs text-red-400 italic">{{errors[0]}}</span>
              </div>
            </div>
            
          </ValidationProvider>

          <InputGroup rules='required' text="Loại hình làm việc" :visibleClearBtn='false'>
              <template slot="input">
                <v-select :options="$store.state.tags.type_works" v-model="project.type_work" label="name"></v-select>
              </template>
          </InputGroup>

          <InputGroup rules='required' text="Hình thức làm việc" :visibleClearBtn='false'>
              <template slot="input">
                <v-select :options="$store.state.tags.work_forms" v-model="project.work_form" label="name"></v-select>
              </template>
          </InputGroup>

          <InputGroup rules='required' text="Vị trí" :visibleClearBtn='false'>
              <template slot="input">
                <v-select :options="$store.state.tags.cities" :reduce="province => province.province_name" v-model="project.location" label="province_name"></v-select>
              </template>
          </InputGroup>

          <InputGroup rules='required' text="Hình thức trả lương" :visibleClearBtn='false'>
              <template slot="input">
                <v-select :options="$store.state.tags.salary_types" v-model="project.salary_type"></v-select>
              </template>
          </InputGroup>

          <InputGroup rules='required|numeric' text="Ngân sách dự án" :visibleClearBtn='false'>
              <template slot="input">
                <div class="md:flex items-center justify-between">
                  <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50 md:mr-4 md:mb-0 mb-4" placeholder="Tối thiểu" spellcheck="false" autocomplete="false" type="text" v-model="project.budget_min">
                  <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" placeholder="Tối đa" spellcheck="false" autocomplete="false" type="text" v-model="project.budget_max">
                </div>
              </template>
          </InputGroup>

          <ValidationProvider ref="attachedFile" name="File đính kèm" rules='required|ext:jpg,png,doc,docx,pdf,zip,rar|size:5000' v-slot="{ errors }">
              <div class="sm:flex justify-between items-center sm:p-4 p-2 border-b border-gray-100">
                  <p class="text-sm h-full sm:py-4 flex-1 text-gray-700 mb-2 sm:mb-0">File đính kèm</p>
                  <div class="flex-2">
                      <label class="flex items-center cursor-pointer h-12 rounded-full border border-dashed border-gray-400 p-2 relative cursor-pointer" for="avatar">
                          <p v-if="!project.file && !errors[0]" class="ml-2 text-sm text-gray-700"><span class="text-blue-400">Click để tải lên </span>hoặc thả file vào đây</p>
                          <p v-if="project.file && !errors[0]" class="ml-2 text-sm text-gray-700">{{project.file.name}}</p>
                          <p v-if="errors[0]" class="ml-2 text-sm text-red-400">{{errors[0]}}</p>
                          <input accept=".png,.jpg,.doc,.docx,.pdf,.zip,.rar" class="absolute opacity-0 top-0 bottom-0 left-0 right-0 cursor-pointer" multiple type="file" name="avatar" id="avatar" @change="handleFileChange" >
                      </label>
                  </div>
              </div>
          </ValidationProvider>
        </template>
      </FormInput>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      project:{
        name:null,
        content:null,
        deadline_bids:Date.now(),
        type_work:null,
        work_form:null,
        location:null,
        salary_type:null,
        budget_min:null,
        budget_max:null,
        expertise_id:null,
        service_id:null,
        skills:null,
        file:null,
      },
    }
  },
  
  methods:{
    onPost(){
      this.project.deadline_bids = this.$moment(this.project.deadline_bids).format("YYYY-MM-DD")

      var formData = new FormData()
      for(const key in this.project) formData.append(key,this.project[key])

      this.$axios.$post("api/user/project/post",formData)
      .then(()=>this.$router.replace('/user/project'))
      .catch(err=>{this.$notify({duration:'5000',title: 'Thông báo',text: "Có lỗi xảy ra",})})
    },
    async handleFileChange(e) {
      if(e.target.files[0]==null) return
      const { valid } = await this.$refs.attachedFile.validate(e)
      if(valid) this.project.file = e.target.files[0]
    },
  },
  computed: {
    editorOptions() { return { theme: 'bubble' } },
    toolbarOptions(){return [[{ 'header': [1, 2, 3, 4, 5, 6, false] }],["bold", "italic", "underline"],[{ list: "ordered" }, { list: "bullet" }]]}
  },
  middleware:['auth'],
  layout:'flex'
}
</script>

<style>

</style>