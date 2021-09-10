<template>
  <header class="bg-bottom bg-repeat-x bg-city-life h-56 py-4 box-border">
        <slot name="header-top">
            <div v-if="visibleMenu" class="flex justify-between items-center md:container mx-auto px-4">
                <div class="flex justify-start flex-1 items-center md:space-x-4 space-x-1">
                    <nuxt-link class="block" to="/"><img class="h-16 w-16" src="@/assets/img/jobforest.svg"></nuxt-link>
                    <nuxt-link class="md:text-base md:block hidden text-sm whitespace-nowrap" to="/freelancer">Thuê Freelancer</nuxt-link>
                    <nuxt-link class="md:text-2xl md:block hidden whitespace-nowrap text-blue-500 font-medium" to="/project">Tìm việc</nuxt-link>
                </div>
                <div class="flex justify-end items-center space-x-2">
                    <nuxt-link v-if="!$auth.loggedIn" to="/register" class="hidden md:block p-2 rounded-lg text-sm text-white bg-gray-700 ">Đăng ký</nuxt-link>
                    <nuxt-link v-if="!$auth.loggedIn" to="/login" class="p-2 rounded-lg text-sm text-white bg-gray-700">Đăng nhập</nuxt-link>
                    <nuxt-link to="/user/project/post" class="p-2 md:flex hidden items-center rounded-lg text-sm text-white bg-blue-500 whitespace-nowrap">Đăng dự án</nuxt-link>
                </div>
            </div>
        </slot>
        <slot name="header-bottom">
            <div class="py-4">
                <h1 class="text-center text-gray-600 text-4xl mb-2">JobForest</h1>
                <h3 class="px-4 text-center text-sm text-gray-700 mb-2">{{text}}</h3>
            </div>
        </slot>
        
    </header>
</template>

<script>
export default {
    props:{
        text:{
            type:String,
            default:"Lựa chọn số 1 của doanh nghiệp.Bắt đầu ngay hôm nay"
        },
        visibleMenu:{
            type:Boolean,
            default:true
        },
    }
}
</script>

<style>

</style>