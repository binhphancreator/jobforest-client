<template>
  <div :class="['flex flex-col justify-between items-center',reverse?'md:flex-row-reverse':'md:flex-row']">
    <div class="flex-1 p-5">
        <slot name="left">

        </slot>
    </div>
    <div class="flex-1 p-5">
        <slot name="right">

        </slot>
    </div>
</div>
</template>

<script>
export default {
    props:{
        reverse:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style>

</style>