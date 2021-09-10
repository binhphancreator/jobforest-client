<template>
  <div :class="['p-2 flex border border-gray-200 rounded-xl',offer.status=='accepted'?'border-blue-100':'']">
    <nuxt-link class="mr-8 md:block hidden" :to="`/user/${user.slug}`">
      <img class="w-28 h-28 rounded-full mb-2" :src="`${$store.state.cloud}/file/${user.avatar}`" alt="" srcset="">
    </nuxt-link>

    <div class="flex-1">
      <div class="flex flex-wrap items-center">
        <nuxt-link :to="`/user/${user.slug}`"><img class="block md:hidden w-12 h-12 rounded-full mb-2 mr-2" :src="`${$store.state.cloud}/file/${user.avatar}`" alt="" srcset=""></nuxt-link>
        <h3 class="md:text-base text-sm text-gray-500">{{`${user.fullname} đã chào giá ${offer.cost}đ trong ${offer.completion_time} ngày`}}</h3>
      </div>
      
      <div class="flex mb-2 space-x-2 items-center">
        <p class="text-xs text-gray-400">{{user.profile.title}}</p>
        <StarRating :star="star" />
        <p class="text-xs text-gray-400">{{`${user.reviews.length} đánh giá`}}</p>
        <p v-if='offer.status=="accepted"' class="rounded p-1 px-2 text-xs text-gray-500 bg-green-100 mr-2">Được chấp nhận</p>
      </div>
      <div class="flex flex-nowrap overflow-x-auto scrollbar-hidden mb-2 space-x-2">
        <nuxt-link :to='`/freelancer/skill/${skill}}`' v-for="skill in user.skills" :key="skill" class="text-xs text-gray-700 p-2 bg-gray-100 rounded whitespace-nowrap" href="/">{{$store.getters['tags/getSkillById'](skill).name}}</nuxt-link>
      </div>
      <p class="text-sm text-gray-500">{{`${offer.description.substr(0,250)}${offer.description.length>250?'...':''}`}}</p>
      <div v-if='own' class="flex w-full mt-2 space-x-2">
        <button v-if='offer.status!="rejected"' @click="contact" class="rounded p-1 px-2 text-xs text-gray-500 bg-blue-100">Liên hệ Freelancer</button>
        <button v-if='offer.status=="waiting"' @click="accept" class="rounded p-1 px-2 text-xs text-gray-500 bg-green-100">Chấp nhận Freelancer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    star(){
      var star = 0
      this.user.reviews.forEach(review => star+=review.star)
      return this.user.reviews.length ? star/this.user.reviews.length : 0
    }
  },
  methods:{
    async contact(){
      this.$store.dispatch('view/createConversation',this.user.id)
    },
    async accept(){
      await this.$axios.$post('api/user/project/offer/accept',{project_id:this.offer.project_id,user_id:this.offer.user_id})
      await this.$store.dispatch('view/createConversation',this.user.id)
      await this.$nuxt.refresh()
    }
  },
  props:['offer','user','own'],
}
</script>