<template>
    <div class="mx-auto">
      <NavSearch/>
      <div class="p-4 px-2 md:container mx-auto min-h-96">
        <div class="block mb-4 w-full p-2 py-8 rounded border border-dashed border-gray-200 space-y-4">
          <div class="md:flex items-center relative">

            <div class="relative flex-1">
              <div class="w-10 h-10 flex items-center justify-center absolute right-0 top-0 bottom-0">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <rect x="0" y="0" width="24" height="24"></rect>
                    <path class="fill-gray-500" d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                    <path class="fill-gray-500" d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero"></path>
                  </g>
                </svg>
              </div>
              <input v-model='filter.q' class="block w-full text-sm text-gray-500 pr-10 p-2 h-10 rounded-full bg-gray-50 transition transition-all" autocomplete="false" spellcheck="false" type="text">
            </div>

            <div class="space-x-2 flex-1 md:mt-0 mt-4 md:ml-4">
              <button @click='search' class="text-sm bg-blue-400 rounded p-2 text-gray-50">Tìm kiếm</button>
              <button @click='visibleAdvanceSearch=!visibleAdvanceSearch' class="text-sm font-medium text-blue-400">Tìm kiếm nâng cao</button>
              <button @click='reset' class="text-sm font-medium text-blue-400">Đặt lại</button>
            </div>
          </div>

          <!-- Advance Search -->

          <div class="pt-4 border-t border-dashed border-gray-200 space-y-4" v-if='visibleAdvanceSearch'>
            <div class="md:flex md:space-x-4">
              <div class="space-y-2 flex-1">
                <p class="font-medium text-sm text-gray-700">Lĩnh vực chuyên môn</p>
                <v-select class="min-h-10 font-medium text-sm" multiple :options="$store.state.tags.expertises" :reduce="expertise => expertise.id" v-model="filter.expertises" label="name"></v-select>
              </div>
              <div class="space-y-2 flex-1">
                <p class="font-medium text-sm text-gray-700">Vị trí</p>
                <v-select class="min-h-10 font-medium" :options="$store.state.tags.cities" :reduce="city => city.province_name" v-model="filter.location" label="province_name"></v-select>
              </div>
            </div>

            <div class="md:flex md:space-x-4">
              <div class="space-y-2 flex-1">
                <p class="font-medium text-sm text-gray-700">Kỹ năng</p>
                <v-select multiple class="min-h-10 font-medium" :options="$store.state.tags.skills" :reduce="skill => skill.id" v-model="filter.skills" label="name"></v-select>
              </div>
              <div class="space-y-2 flex-1">
                <p class="font-medium text-sm text-gray-700">Dịch vụ</p>
                <v-select class="min-h-10 font-medium" multiple :options="$store.state.tags.services" :reduce="service => service.id" v-model="filter.services" label="name"></v-select>
              </div>
            </div>

            <div class="flex flex-wrap justify-center items-center space-x-4">
              <div class="flex items-center space-x-2 my-1">
                <p class="font-medium text-sm text-gray-700">Mới nhất</p>
                <ToggleButton :value='filter.newest' @change='filter.newest=!filter.newest'/>
              </div>
              <div class="flex items-center space-x-2 my-1">
                <p class="font-medium text-sm text-gray-700">Trạng thái</p>
                <div class="p-1 flex space-x-2 bg-gray-100 rounded-full transition transition-all" style='width:fit-content;'>
                  <button @click='filter.status="offering"' :class="['text-xs font-medium rounded-full p-1 transition transition-all',filter.status=='offering'?'bg-blue-400 text-gray-50':'text-gray-500']">Chào giá</button>
                  <button @click='filter.status="working"' :class="['text-xs font-medium rounded-full p-1 transition transition-all',filter.status=='working'?'bg-blue-400 text-gray-50':'text-gray-500']">Làm việc</button>
                </div>
              </div>
              <div class="flex items-center space-x-2 my-1">
                <p class="font-medium text-sm text-gray-700">Loại công việc</p>
                <div class="p-1 flex space-x-2 bg-gray-100 rounded-full transition transition-all" style='width:fit-content;'>
                  <button v-for='type_work in $store.state.tags.type_works' :key='type_work' @click='filter.type_work=type_work' :class="['text-xs font-medium rounded-full p-1 transition transition-all',filter.type_work==type_work?'bg-blue-400 text-gray-50':'text-gray-500']">{{type_work}}</button>
                </div>
              </div>
              <div class="flex items-center space-x-2 my-1">
                <p class="font-medium text-sm text-gray-700">Làm việc tại</p>
                <div class="p-1 flex space-x-2 bg-gray-100 rounded-full transition transition-all" style='width:fit-content;'>
                  <button v-for='work_form in $store.state.tags.work_forms' :key='work_form' @click='filter.work_form=work_form' :class="['text-xs font-medium rounded-full p-1 transition transition-all',filter.work_form==work_form?'bg-blue-400 text-gray-50':'text-gray-500']">{{work_form}}</button>
                </div>
              </div>
              <div class="flex items-center space-x-2 my-1">
                <p class="font-medium text-sm text-gray-700">Trả lương theo</p>
                <div class="p-1 flex space-x-2 bg-gray-100 rounded-full transition transition-all" style='width:fit-content;'>
                  <button v-for='salary_type in $store.state.tags.salary_types' :key='salary_type'  @click='filter.salary_type=salary_type' :class="['text-xs font-medium rounded-full p-1 transition transition-all',filter.salary_type==salary_type?'bg-blue-400 text-gray-50':'text-gray-500']">{{salary_type}}</button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <ul class="list-jobs">
          <li class="mb-5" v-for="project in projects.data" :key="project.id">
            <CardProject :project="project" />
          </li>
        </ul>

        <div class="flex justify-center">
          <Pagination @load='load' :meta='projects.meta'/>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  async asyncData({$axios,params,query}){
    const filter = {q:null,newest:false,location:null,expertises:[],services:[],skills:[],work_form:null,salary_type:null,status:null,type_work:null,}
    filter.skills.push(parseInt(params.id))
    const page = query.page ? query.page : 1
    const projects = await $axios.$get(`api/projects`,{params:{page:page,...filter}})
    return {projects,page,filter}
  },
  data(){return{
    visibleAdvanceSearch:true,
  }},
  methods:{
    async load(page){
      this.page = page
      this.projects = await this.$axios.$get(`api/projects`,{params:{page:this.page,q:this.filter.q}})
    },
    async search(){
      this.projects = await this.$axios.$get(`api/projects`,{params:this.filter})
    },
    reset(){
      this.filter = {q:null,newest:false,location:null,expertises:[],services:[],skills:[],work_form:null,salary_type:null,status:null,type_work:null,}
      this.search()
    }
  },
  layout({$auth}){
    if(!$auth.loggedIn) return 'default'
    return 'flex'
  },
}
</script>