<template>
  <div class="flex items-center justify-center" style="min-height:50vh;">
    <h1 class="text-xl text-gray-500" v-if="error.statusCode === 404">Không tìm thấy trang yêu cầu</h1>
  </div>
</template>
<script>
  export default {
    props: ['error'],
    layout: 'default'
  }
</script>