<template>
  <div class='p-2 border border-gray-200 rounded-xl'>
    <div class="flex-1">
        <div class="space-y-2 mb-4">
            <nuxt-link :to='`/project/${offer.project.slug}`' class="block font-medium text-gray-500">{{offer.project.name}}</nuxt-link>
            <div class="flex">
                <p v-if='offer.status=="accepted"' class="rounded p-1 px-2 text-xs text-gray-500 bg-green-100 mr-2">Được chấp nhận</p>
                <p v-if='offer.review' class="rounded p-1 px-2 text-xs text-gray-500 bg-yellow-100 mr-2">Đã đánh giá</p>
            </div>
            <div>
                <p class="text-sm font-medium text-gray-500">{{`Bạn đã chào giá ${offer.cost}đ trong ${offer.completion_time} ngày`}}</p>
                <p class="text-xs text-gray-400">{{$moment(offer.created_at).format('YYYY-MM-DD H:i:s')}}</p>
            </div>
        </div>
        <p class="text-sm text-gray-500 mb-4">{{offer.description}}</p>
        <div class="space-y-1" v-if='offer.review'>
            <h3 class="text-sm font-medium text-gray-500">Nhà tuyển dụng đã đánh giá</h3>
            <StarRating :star='offer.review.star'/>
            <p class="text-sm text-gray-500">{{offer.review.title}}</p>
            <p v-if='offer.review.content' class="text-sm text-gray-500">{{offer.review.content}}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['offer'],
}
</script>