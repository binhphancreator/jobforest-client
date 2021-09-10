<template>
  <div class="mx-auto">
    <NavSetting/>
    <div class="p-4 px-2">
        <ul class="flex flex-wrap md:container mx-auto">
            <li class="w-full p-2">
                <client-only>
                <ValidationProvider ref="attachedFile" name="Avatar" rules='required|ext:jpg,png,jpeg|size:2000' v-slot='{errors}'>
                <div class="flex justify-center w-full">
                    <label class="cursor-pointer flex flex-col items-center space-y-2 p-1 border-gray-400" for="avatar">
                        <img ref="avatar" :class="['rounded-full h-28 w-28 object-cover',uploading?'blur-sm filter':'']" :src="`${$store.state.cloud}/file/${$auth.user.avatar}`" alt="" srcset="">
                        <input accept="image/png,image/jpg,image/jpeg" class="hidden" type="file" name="avatar" id="avatar" @change="handleFileChange" >
                        <p class="text-xs text-red-400 italic">{{errors[0]}}</p>
                        <button class="text-sm px-3 py-1 rounded-full border border-gray-100 text-gray-500">Upload avatar</button>
                    </label>
                </div>
                </ValidationProvider>
                </client-only>
            </li>
        </ul>
        <div class="p-4 px-2 md:container mx-auto">
            <div>
                <client-only>
                <ValidationObserver v-slot="{ invalid }">
                <form class="block pb-4 shadow-md rounded-xl mb-4" method="post" @submit.prevent = "onUpdate">

                    <div class="py-4 bg-gray-50 rounded-t-xl">
                        <p class="text-center text-gray-700">Cài đặt chung</p>
                    </div>

                    <InputGroup rules='required' text="Họ và tên" @clear="user.full_name=''">
                        <template slot="input">
                            <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="user.full_name">
                        </template>
                    </InputGroup>

                    <InputGroup rules='required|email' text="Email" @clear="user.email=''">
                        <template slot="input">
                            <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="user.email">
                        </template>
                    </InputGroup>

                    <InputGroup rules='required|numeric' text="Số điện thoại" @clear="user.numberphone=''">
                        <template slot="input">
                            <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="user.numberphone">
                        </template>
                    </InputGroup>

                    <InputGroup rules='required' text="Thành phố" :visibleClearBtn='false'>
                        <template slot="input">
                            <v-select :options="$store.state.tags.cities" :reduce="province => province.province_name"  v-model="user.city" label="province_name"></v-select>
                        </template>
                    </InputGroup>

                    <InputGroup rules='required|numeric' text="Số CCCD" @clear="user.idnumber=''">
                        <template slot="input">
                            <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="user.idnumber">
                        </template>
                    </InputGroup>

                    <InputGroup rules='required' text="Ngày sinh">
                        <template slot="input-container">
                            <v-date-picker class="flex-2" is-expanded v-model="user.birth">
                                <template v-slot="{ inputValue, togglePopover }">
                                    <div @click="togglePopover" class="shadow-md rounded-xl relative">
                                        <input disabled :value="inputValue" class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full focus:border border-blue-400" spellcheck="false" type="text">
                                        <img :src="require('@/assets/img/calendar.svg')" class="absolute top-0 bottom-0 right-0 w-12 p-3 text-sm rounded-xl cursor-pointer" alt="" srcset="">
                                    </div>
                                </template>
                            </v-date-picker>
                        </template>
                    </InputGroup>

                    <InputGroup rules='required' text="Địa chỉ" @clear="user.address=''">
                        <template slot="input">
                            <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="user.address">
                        </template>
                    </InputGroup>

                    <div v-if='!invalid' class="flex justify-center sm:p-4 p-2">
                        <button :disabled="invalid" class="text-sm p-2 px-4 bg-gray-700 text-gray-50 rounded-full font-light">Cập nhật</button>
                    </div>

                </form>
                </ValidationObserver>
                </client-only>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            user:{
                full_name:this.$auth.user.fullname,
                email:this.$auth.user.email,
                birth:new Date(this.$auth.user.birth),
                numberphone:this.$auth.user.numberphone,
                city:this.$auth.user.city,
                idnumber:this.$auth.user.idnumber,
                address:this.$auth.user.address
            },
            uploading:false,
            avatar:null,
        }
    },
    methods:{
        async onUpdate(){
            await this.$axios.$post('api/user/info/update',{
                fullname:this.user.full_name,
                email:this.user.email,
                birth:this.$moment(this.user.birth).format("YYYY-MM-DD"),
                numberphone:this.user.numberphone,
                city:this.user.city,
                idnumber:this.user.idnumber,
                address:this.user.address
            })
            await this.$auth.fetchUser()
            this.$router.replace(`/user/overview`)
        },
        async handleFileChange(e) {
            if(e.target.files[0]==null) return
            const { valid } = await this.$refs.attachedFile.validate(e)
            if(valid) {
                this.avatar = e.target.files[0]
                await this.upload()
            }
        },
        async upload(){
            var formData = new FormData()
            formData.append("avatar",this.avatar)
            this.uploading = true;
            await this.$axios.$post('api/user/avatar/upload',formData)
            this.uploading = false
            this.$auth.fetchUser()
        }
    },
    middleware:["auth",],
    layout:'flex',
}
</script>

<style>

</style>