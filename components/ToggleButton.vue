<template>
    <span @click='$emit("change")' :class="['h-6 w-12 flex items-center rounded-full p-1 cursor-pointer transition transition-all',value?'bg-blue-400 justify-end':'bg-gray-200 justify-start']">
        <span :class="['h-4 w-4 rounded-full bg-white',]"></span>
    </span>
</template>

<script>
export default {
    props:['value']
}
</script>

<style>

</style>