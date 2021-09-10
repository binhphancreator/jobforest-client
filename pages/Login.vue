<template>
  <main class="main-content mx-auto max-w-screen-lg">
      <div class="flex justify-between md:flex-row flex-col my-4 mt-8">
        <!-- Login Form-->
        <div class="md:w-2/3 w-full px-4 flex-1 mb-4">
            <h3 class="text-2xl text-gray-900 mb-2 text-center">Đăng Nhập</h3>
            <div class="mb-4 border-b border-gray-100 py-4 pb-8 relative">
                <button @click="loginWithGoogle" class="flex items-center shadow-sm border border-gray-100 w-full p-2 rounded-full"><img class="h-6 w-6 mr-4" src="@/assets/img/google-plus.svg" alt=""><p class="text-gray-600 text-sm">Đăng nhập với Google</p></button>
                <p class="text-sm text-gray-500 text-center bg-white absolute top-full left-1/2 -translate-y-1/2 -translate-x-1/2 transform px-4 whitespace-nowrap">Hoặc đăng nhập với email</p>
            </div>
            <form class="flex flex-col items-center mb-4" action="/login" method="post">
                <p class="text-gray-700 block w-full text-left mb-2">Email<span class="text-red-400">*</span></p>
                <input class="p-3 text-sm rounded-full shadow-sm border border-gray-200 w-full mb-4" v-model="email" type="text" spellcheck="false">

                <p class="text-gray-700 block w-full text-left mb-2">Mật khẩu<span class="text-red-400">*</span></p>
                <input class="p-3 text-sm rounded-full shadow-sm border border-gray-200 w-full mb-4" type="password" v-model="password" spellcheck="false">
                
                <p class="text-xs mb-2 text-left block w-full">Quên mật khẩu? <a class="text-blue-500" href="/">Click vào đây</a></p>
                <input @click.prevent="login" class="block rounded-full bg-blue-500 text-white py-3 text-sm w-full cursor-pointer" type="submit" value="Đăng nhập">
            </form>

            <div class="mb-4">
                <h3 class="text-sm text-gray-900 mb-2 text-center">Bạn chưa có tài khoản? <nuxt-link class="text-sm text-blue-400" to="/register">Đăng ký</nuxt-link></h3>
            </div>
        </div>

        <div class="px-4 flex-1 flex justify-center items-center">
            <img class="w-64 h-64 mb-4" src="@/assets/img/undraw_Access_account_re_8spm.svg" alt="">
        </div>
    </div>
  </main>
</template>

<script>
export default {
    methods:{
        login(){
            //this.$auth.loginWith('laravelSanctum',{data:{ email:this.email,password:this.password}}).then(res=>this.$echo.private(`chat.${this.$store.state.auth.user.id}`).listen('.send.message',message=>this.$store.dispatch('view/receiveMessage',message)))
            this.$login({ email:this.email,password:this.password})
        },
        loginWithGoogle(){
            this.$auth.loginWith('google')
        }
    },
    data(){
        return{
            email:'',
            password:'',
        }
    },
    middleware:['guest']
}
</script>

<style>

</style>