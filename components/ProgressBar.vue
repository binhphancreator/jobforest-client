<template>
  <div class="h-2 rounded-full relative bg-gray-100">
      <div class="absolute left-0 top-0 bottom-0 bg-blue-400 rounded-full" :style="`width:${percent}%`"></div>
  </div>
</template>

<script>
export default {
    props:['percent']
}
</script>

<style>

</style>