<template>
  <div class="p-2 flex items-center shadow-md rounded-md bg-white p-5 cursor-pointer box-border hover:translate-x-10">
    <nuxt-link class="mr-8 md:block hidden" :to="`/user/${user.slug}`">
        <img class="w-28 h-28 rounded-full mb-2" :src="`${$store.state.cloud}/file/${user.avatar}`">
    </nuxt-link>
    <div class="flex-1">
        <div class="flex flex-col md:flex-row flex-wrap items-center">
            <nuxt-link :to="`/user/${user.slug}`"><img class="block md:hidden w-16 h-16 rounded-full mb-2 mr-2" :src="`${$store.state.cloud}/file/${user.avatar}`" alt="" srcset=""></nuxt-link>
            <nuxt-link :to="`/user/${user.slug}`" class="md:text-base text-sm text-gray-500">{{user.fullname}}</nuxt-link>
        </div>
        <div class="flex flex-wrap md:justify-start justify-center mb-2 space-x-2 items-center">
            <p v-if='user.profile.expertise_id' class="text-xs text-gray-400">{{$store.getters['tags/getExpertisesById'](user.profile.expertise_id).name}}</p>
            <p v-if='user.profile.title' class="text-xs text-gray-400">{{user.profile.title}}</p>
            <StarRating :star="star" />
            <p class="text-xs text-gray-400">{{user.city}}</p>
        </div>
        <div class="flex flex-wrap md:justify-start justify-center space-x-2 space-x-reverse">
            <div class="flex flex-wrap md:justify-start justify-center">
                <nuxt-link :to='`/freelancer/service/${service}`' v-for="service in user.services" :key="service" class="my-1 mr-2 block text-xs text-white p-1 bg-blue-400 rounded whitespace-nowrap" href="/">{{$store.getters['tags/getServiceById'](service).name}}</nuxt-link>
            </div>
            <div class="flex flex-wrap md:justify-start justify-center">
                <nuxt-link :to='`/freelancer/skill/${skill}`' v-for="skill in user.skills" :key="skill" class="my-1 mr-2 block text-xs text-gray-700 p-1 bg-gray-100 rounded whitespace-nowrap" href="/">{{$store.getters['tags/getSkillById'](skill).name}}</nuxt-link>
            </div>
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
    props:['user'],
}
</script>

<style>

</style>