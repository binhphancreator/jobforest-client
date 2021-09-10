<template>
  <main class="main-content mx-auto max-w-screen-lg">
      <div class="flex justify-between md:flex-row flex-col my-4 mt-8">
        <!-- Login Form-->
        <div class="md:w-2/3 w-full px-4 flex-1 mb-4">
            <h3 class="text-2xl text-gray-900 mb-2 text-center">Đăng ký</h3>
            <div class="mb-4 border-b border-gray-100 py-4 pb-8 relative">
                <button @click="$auth.loginWith('google')" class="flex items-center shadow-sm border border-gray-100 w-full p-2 rounded-full"><img class="h-6 w-6 mr-4" src="@/assets/img/google-plus.svg" alt=""><p class="text-gray-600 text-sm">Đăng ký với Google</p></button>
                <p class="text-sm text-gray-500 text-center bg-white absolute top-full left-1/2 -translate-y-1/2 -translate-x-1/2 transform px-4 whitespace-nowrap">Hoặc đăng ký bằng email</p>
            </div>
            <form class="flex flex-col items-center mb-4" action="/login" method="post">
                <p class="text-gray-700 block w-full text-left mb-2">Email<span class="text-red-400">*</span></p>
                <input class="p-3 text-sm rounded-full shadow-sm border border-gray-200 w-full mb-4" v-model="user.email" type="text" spellcheck="false">

                <p class="text-gray-700 block w-full text-left mb-2">Mật khẩu<span class="text-red-400">*</span></p>
                <input class="p-3 text-sm rounded-full shadow-sm border border-gray-200 w-full mb-4" type="password" v-model="user.password" spellcheck="false">

                <p class="text-gray-700 block w-full text-left mb-2">Nhập lại mật khẩu<span class="text-red-400">*</span></p>
                <input class="p-3 text-sm rounded-full shadow-sm border border-gray-200 w-full mb-4" type="password" v-model="user.re_password" spellcheck="false">

                <p class="text-gray-700 block w-full text-left mb-2">Họ và tên<span class="text-red-400">*</span></p>
                <input class="p-3 text-sm rounded-full shadow-sm border border-gray-200 w-full mb-4" type="text" v-model="user.fullname" spellcheck="false">
                
                <input @click.prevent="register" class="block rounded-full bg-blue-500 text-white py-3 text-sm w-full cursor-pointer" type="submit" value="Đăng ký">
            </form>

            <div class="mb-4">
                <h3 class="text-sm text-gray-900 mb-2 text-center">Bạn đã có tài khoản? <nuxt-link class="text-sm text-blue-400" to="/login">Đăng nhập</nuxt-link></h3>
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
        async register(){
            var response = await this.$axios.$post("api/register",{"email":this.user.email,"password":this.user.password,"fullname":this.user.fullname})
            if(response.status == 0) return this.$notify({duration:'5000',title: 'Lỗi đăng ký',text: response.message,})
            this.$login({ email:this.user.email,password:this.user.password})
        }
    },
    data(){
        return{
            user:{
                email:'',
                password:'',
                re_password:'',
                fullname:'',
            }
            
        }
    },
    middleware:['guest']
}
</script>

<style>

</style>