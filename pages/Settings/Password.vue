<template>
  <div class="mx-auto">
    <NavSetting/>        
    <div class="p-4 px-2 md:container mx-auto">
        <FormInput class="block pb-4 shadow-md rounded-xl mb-8" title='Cập nhật mật khẩu' textBtn='Cập nhật' @submit='onUpdate'>
            <InputGroup rules='required|confirmed:confirmation' text="Mật khẩu" @clear="new_password=''">
                <template slot="input">
                    <input type='password' class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" v-model="new_password">
                </template>
            </InputGroup>
            <InputGroup vid="confirmation" rules='required' text="Nhập lại" @clear="renew_password=''">
                <template slot="input">
                    <input type='password' class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" v-model="renew_password">
                </template>
            </InputGroup>
        </FormInput>
    </div>


  </div>
</template>

<script>
export default {
    data(){
        return{
            new_password:'',
            renew_password:'',
        }
    },
    methods:{
        onUpdate(){
            this.$axios.$post('/api/user/password/update',{password:this.new_password}).then(res=>this.$notify({duration:'5000',title: 'Thông báo',text: "Cập nhật mật khẩu thành công",}))
        }
    },
    layout:'flex',
    middleware:['auth',],
}
</script>

<style>

</style>