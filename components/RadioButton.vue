<template>

    <span class="h-4 w-4 flex items-center justify-center rounded-full border border-gray-200">
        <span :class="['h-2 w-2 rounded-full bg-gray-200 transition transition-all',value?'bg-blue-400':'']"></span>
    </span>
</template>

<script>
export default {
    props:['value']
}
</script>

<style>

</style>