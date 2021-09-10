<template>
    <div class="mx-auto">
      <NavProject/>
      <div class="p-4 px-2 md:container mx-auto min-h-96">
        <h2 class="text-xl text-gray-700 text-center mb-4">Lời chào giá của bạn</h2>
        <ul class="list-jobs">
          <li class="mb-5" v-for="offer in offers" :key="offer.id">
            <CardOffer :offer="offer" />
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
    async asyncData({$axios}){
        const offers = await $axios.$get('/api/user/offers')
        return {offers}
    },
    middleware:['auth',],
    layout:'flex',
}
</script>

<style>

</style>