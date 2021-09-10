<template>
    <div class="mx-auto">    
        <NavSetting/>
        <div class="p-4 px-2 md:container mx-auto">
            <FormInput class="block pb-4 shadow-md rounded-xl mb-8" title='Thông tin cơ bản' textBtn='Cập nhật' @submit='onUpdateProfile'>
                <template>
                    <InputGroup :visibleClearBtn='false' rules='required' text="Bạn là">
                        <template slot="input">
                            <v-select :options="$store.state.tags.account_types" v-model="workprofile.type"></v-select>
                        </template>
                    </InputGroup>

                    <InputGroup rules='required' text="Chức danh" @clear="workprofile.title=''">
                        <template slot="input">
                            <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="workprofile.title">
                        </template>
                    </InputGroup>

                    <InputGroup rules='required' text="Kỹ năng" :visibleClearBtn='false'>
                        <template slot="input">
                            <v-select multiple class="mb-2" :options="$store.state.tags.skills" :reduce="skill => skill.id" v-model="workprofile.skills" label="name"></v-select>
                        </template>
                        <template slot='input-text'>
                            <p class="text-xs flex-1 text-gray-500">Kỹ năng của bạn không có trong danh sách trên? Hãy gửi gợi ý cho chúng tôi để trở thành người đầu tiên trên vLance.vn có kỹ năng đó trong hồ sơ làm việc.</p>
                        </template>
                    </InputGroup>

                    <InputGroup rules='required' text="Dịch vụ" :visibleClearBtn='false'>
                        <template slot="input">
                            <v-select multiple class="mb-2" :options="$store.state.tags.services" :reduce="service => service.id" v-model="workprofile.services" label="name"></v-select>
                        </template>
                        <template slot='input-text'>
                            <p class="text-xs flex-1 text-gray-500 mb-2">Bạn cần nhập ít nhất 1 dịch vụ mà bạn có thể cung cấp cho khách hàng. Bạn sẽ nhận được thông báo việc ngay lập tức nếu khách hàng đăng việc liên quan đến dịch vụ của bạn.</p>
                            <p class="text-xs flex-1 text-gray-500">Dịch vụ bạn muốn cung cấp không có trong danh sách trên? Hãy gửi gợi ý cho chúng tôi để trở thành người đầu tiên được cung cấp dịch vụ này trên jobforest.vn.</p>
                        </template>
                    </InputGroup>

                    <InputGroup :visibleClearBtn='false' rules='required' text="Lĩnh vực chuyên môn" @clear="workprofile.website=''">
                        <template slot="input">
                            <v-select :options="$store.state.tags.expertises" :reduce="expertise => expertise.id" v-model="workprofile.expertise_id" label="name"></v-select>
                        </template>
                    </InputGroup>

                    <InputGroup :visibleClearBtn='false' rules='required' text="Trình độ" @clear="workprofile.website=''">
                        <template slot="input">
                            <v-select class="single mb-2" :options="$store.state.tags.qualifications" v-model="workprofile.qualification" label="name"></v-select>
                        </template>
                    </InputGroup>

                    <InputGroup rules='required|min:100' :visibleClearBtn='false' text="Giới thiệu bản thân" @clear="workprofile.introduction=''">
                        <template slot="input">
                            <textarea :placeholder="'Bản giới thiệu đầy đủ này sẽ giúp người xem hiểu rõ hơn về bạn, chuyên môn và cả những kinh nghiệm mà bạn có được. \nNên có tối thiểu 3 nội dung sau: \n\n    1.  Bạn là ai? \n    2. Kinh nghiệm và chuyên môn của bạn như thế nào? \n    3. Bạn tham gia jobforest.vn với mục đích gì? \n\nLưu ý: Bất kỳ trường hợp cố tình để lộ thông tin liên lạc cá nhân tại đây sẽ bị khóa tài khoản có thời hạn hoặc vĩnh viễn.'" class="resize-none p-2 h-40 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="workprofile.introduction"> </textarea>
                        </template>
                    </InputGroup>

                    <InputGroup rules='' text="Website cá nhân" @clear="workprofile.website=''">
                        <template slot="input">
                            <input class="p-2 h-12 text-sm text-gray-700 rounded-xl w-full bg-gray-100 focus:bg-gray-50" spellcheck="false" autocomplete="false" type="text" v-model="workprofile.website">
                        </template>
                    </InputGroup>
                </template>
            </FormInput>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            workprofile:{
                type:this.$auth.user.profile.type,
                title:this.$auth.user.profile.title,
                introduction:this.$auth.user.profile.introduction,
                website:this.$auth.user.profile.website,
                expertise_id:this.$auth.user.profile.expertise_id,
                qualification:this.$auth.user.profile.qualification,
                skills:this.$auth.user.skills,
                services:this.$auth.user.services,
            },
        }
    },
    methods:{
        async handleFileChange(e) {
            if(e.target.files[0]==null) return
            const { valid } = await this.$refs.attachedFile.validate(e)
            if(valid) this.portfolio.file = e.target.files[0]
        },
        async onUpdateProfile(){
            await this.$axios.$post('/api/user/profile/update',this.workprofile)
            await this.$auth.fetchUser()
            this.$router.replace(`/user/overview`)
        }
    },
    middleware:['auth'],
    layout:'flex',
}
</script>

<style>

</style>