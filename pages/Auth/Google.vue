<template>
    <div class="flex flex-col items-center justify-center">
        <img class="h-28 w-28 mb-4" draggable="false" src="@/assets/img/jobforest.svg">
        <p class="text-xl text-center text-gray-500">Đang đăng nhập với Google</p>
    </div>
</template>

<script>
export default {
    async mounted(){
        if(this.$route.query.code) this.$login(this.$route.query)
        else this.$router.push("/")
    },
    layout:'loading',
}
</script>