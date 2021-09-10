<template>
  <div class="mx-auto">
    <NavSearch/>
    <div class="p-4 px-2 md:container mx-auto">
      <ProjectDetail :visible-user='true' class="mb-8 p-2 md:flex" :project='project' :user='project.user'/>
      <div v-if='$moment(project.deadline_bids) < $moment()' class="mb-8 p-2">
        <h1 class="text-xl text-gray-600 mb-4">Gửi chào giá</h1>
        <p class="text-sm text-gray-600">Đã hết hạn chào giá</p>
      </div>
      <div v-else-if='!$auth.loggedIn' class="mb-8 p-2">
        <h1 class="text-xl text-gray-600 mb-4">Gửi chào giá</h1>
        <p class="text-sm text-gray-600">Bạn cần <nuxt-link class="text-blue-400" to='/login'>đăng nhập</nuxt-link> trước để gửi chào giá</p>
      </div>
      <div v-else-if='!$auth.user.numberphone' class="mb-8 p-2">
        <h1 class="text-xl text-gray-600 mb-4">Gửi chào giá</h1>
        <p class="text-sm text-gray-600">Bạn cần <nuxt-link class="text-blue-400" to='/settings/account'>cập nhật thông tin cá nhân</nuxt-link> trước để gửi chào giá</p>
      </div>
      <div v-else-if='!$auth.user.profile.title' class="mb-8 p-2">
        <h1 class="text-xl text-gray-600 mb-4">Gửi chào giá</h1>
        <p class="text-sm text-gray-600">Bạn cần <nuxt-link class="text-blue-400" to='/settings/profile'>bổ sung hồ sơ,kỹ năng,dịch vụ</nuxt-link> trước để gửi chào giá</p>
      </div>

      <FormInput v-else-if='!project.offers.find(offer=>offer.user.id==$auth.user.id)' @submit='onOffer' class="p-2 mb-8">
        <template slot="header">
          <h1 class="text-xl text-gray-600 mb-8">Thông tin chào giá</h1>
          <div class="md:flex">
            <div class="flex-1 md:mr-8">
              <ValidationProvider name="Chi phí" rules="required|numeric" v-slot='{errors}'>
                <div class="md:flex items-center mb-4">
                  <p class="text-gray-600 text-sm flex-1">Đề xuất chi phí</p>
                  <div class="flex-2">
                    <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" placeholder="Mức phí thực nhận cho dự án" spellcheck="false" autocomplete="false" type="text" v-model="offer.cost">
                    <span class="text-xs text-red-400 italic">{{errors[0]}}</span>
                  </div>
                </div>
              </ValidationProvider>
              <ValidationProvider name="Dự kiến" rules="required|numeric" v-slot='{errors}'>
                <div class="md:flex items-center mb-4">
                  <p class="text-gray-600 text-sm flex-1">Dự kiến hoàn thành trong</p>
                  <div class="flex-2">
                    <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" placeholder="Số ngày bạn có thể hoàn thành dự án" spellcheck="false" autocomplete="false" type="text" v-model="offer.completion_time">
                    <span class="text-xs text-red-400 italic">{{errors[0]}}</span>
                  </div>
                </div>
              </ValidationProvider>

              <ValidationProvider ref="attachedFile" name="File đính kèm" rules='ext:jpg,png,doc,docx,pdf,zip,rar|size:1000' v-slot="{ errors }">
                  <div class="md:flex justify-between items-center">
                      <p class="text-sm h-full sm:py-4 flex-1 text-gray-700 mb-2 sm:mb-0">File đính kèm</p>
                      <div class="flex-2">
                          <label class="flex items-center cursor-pointer h-12 rounded-xl border border-dashed border-gray-400 p-2 relative cursor-pointer" for="avatar">
                              <p v-if="!offer.file && !errors[0]" class="ml-2 text-sm text-gray-700"><span class="text-blue-400">Click để tải lên </span>hoặc thả file vào đây</p>
                              <p v-if="offer.file && !errors[0]" class="ml-2 text-sm text-gray-700">{{offer.file.name}}</p>
                              <p v-if="errors[0]" class="ml-2 text-sm text-red-400">{{errors[0]}}</p>
                              <input accept=".png,.jpg,.doc,.docx,.pdf,.zip,.rar" class="absolute opacity-0 top-0 bottom-0 left-0 right-0 cursor-pointer" type="file" name="avatar" id="avatar" @change="handleFileChange" >
                          </label>
                      </div>
                  </div>
              </ValidationProvider>
            </div>
            <div class="flex-1 md:ml-8">
              <ValidationProvider name="Đề xuất" rules="required|min:100" v-slot='{errors}'>
                <p class="text-gray-600 mb-2 text-sm">Đề xuất thuyết phục khách hàng</p>
                <textarea class="p-2 resize-none h-24 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="offer.description"></textarea>
                <span class="text-xs text-red-400 italic">{{errors[0]}}</span>
              </ValidationProvider>
            </div>
          </div>
        </template>
        <template slot="submit">
          <div class="flex  mt-4">
            <button class="flex p-3 text-sm text-white bg-blue-400">Gửi chào giá</button>
          </div>
        </template>
      </FormInput>
      
      <ProjectOffers class="mb-8" :project='project'/>
    </div>
  </div>
</template>

<script>
export default {
    async asyncData({ params,$axios }) {
      const slug = params.slug
      const project = await $axios.$get(`api/project/${slug}`)
      if(project.accepted_offer) project.offers = [project.accepted_offer,...project.offers]
      return { project }
    },
    data(){
      return{
        offer:{
          cost:null,
          completion_time:null,
          description:null,
          file:null,
        }
      }
    },
    methods:{
      onOffer(){
        var formData = new FormData()
        for(const key in this.offer) formData.append(key,this.offer[key])
        formData.append('id',this.project.id)

        this.$axios.$post('/api/user/project/offer',formData).then(res=>this.$nuxt.refresh())
      },
      async handleFileChange(e) {
        if(e.target.files[0]==null) return
        const { valid } = await this.$refs.attachedFile.validate(e)
        if(valid) this.offer.file = e.target.files[0]
      },
    },
    middleware:['not-own-project',],
    layout({$auth}){
      if(!$auth.loggedIn) return 'default'
      return 'flex'
    },
}
</script>

<style>

</style>