<template>
    <div>
        <div class="flex-1 space-y-2 md:mb-0 mb-8 md:mr-8">
            <div class="">
                <h1 class="text-xl text-gray-700">{{project.name}}</h1>
                <p class="text-xs text-gray-500">Đăng ngày: {{$moment(project.created_at).format('Y-MM-DD hh:mm:s')}}</p>
            </div>

            <div class="">
                <div class="flex flex-nowrap overflow-x-auto scrollbar-hidden">
                    <nuxt-link :to='`/project/expertise/${project.expertise_id}`' class="text-xs text-white p-2 bg-blue-400 rounded whitespace-nowrap" href="/">{{this.$store.getters['tags/getExpertisesById'](project.expertise_id).name}}</nuxt-link>
                    <nuxt-link :to='`/project/skill/${skill}`' v-for="skill in project.skills" :key="skill" class="text-xs text-gray-700 p-2 bg-gray-100 rounded ml-2 whitespace-nowrap" href="/">{{$store.getters['tags/getSkillById'](skill).name}}</nuxt-link>
                </div>
            </div>

            <div class="text-sm text-gray-700" v-html='project.content'></div>
            <a v-if='project.file' class="block text-blue-400 text-sm font-medium" :href="`${$store.state.cloud}/file/${project.file}`">File đính kèm</a>
            <div v-if='$auth.loggedIn && $auth.user.id == project.user_id' class="flex space-x-2">
                <button @click='onDelete' class="rounded p-2 text-xs text-gray-500 bg-red-100 mr-2">Xóa dự án</button>
                <nuxt-link :to='`/user/project/update/${project.slug}`' class="rounded p-2 px-2 text-xs text-gray-500 bg-blue-100 mr-2">Chỉnh sửa</nuxt-link>
                <button v-if='project.status=="working"' @click='onEnd' class="rounded p-2 text-xs text-gray-500 bg-yellow-100 mr-2">Kết thúc dự án</button>
            </div>
        </div>

        <div class="flex-1 md:ml-8">
            <div class="mb-4">
                <h3 class="text-gray-700 mb-4">Chi tiết dự án</h3>
                <div class="flex py-2">
                    <p class="text-sm text-gray-700 flex-1">Trạng thái</p>
                    <p class="text-sm text-gray-700 flex-1">{{status}}</p>
                </div>
                <div class="flex py-2 bg-gray-50">
                    <p class="text-sm text-gray-700 flex-1">Hình thức làm việc</p>
                    <p class="text-sm text-gray-700 flex-1">{{project.type_work}}</p>
                </div>
                <div class="flex py-2">
                    <p class="text-sm text-gray-700 flex-1">Loại hình làm việc</p>
                    <p class="text-sm text-gray-700 flex-1">{{project.work_form}}</p>
                </div>
                <div class="flex py-2 bg-gray-50">
                    <p class="text-sm text-gray-700 flex-1">Hình thức trả lương</p>
                    <p class="text-sm text-gray-700 flex-1">{{project.salary_type}}</p>
                </div>
                <div class="flex py-2">
                    <p class="text-sm text-gray-700 flex-1">Ngân sách dự án</p>
                    <p class="text-sm text-gray-700 flex-1">{{project.budget_min}}đ-{{project.budget_max}}đ</p>
                </div>
                <div class="flex py-2 bg-gray-50">
                    <p class="text-sm text-gray-700 flex-1">Hạn chào giá</p>
                    <p class="text-sm text-gray-700 flex-1">{{$moment(project.deadline_bids).format('YYYY-MM-DD')}}</p>
                </div>
            </div>
            
            <div v-if='visibleUser'>
                <h3 class="text-gray-700 mb-4">Thông tin khách hàng</h3>
                <div class="flex">
                    <nuxt-link class="block mr-4" :to="`/user/${user.slug}`"><img class="h-16 w-16 rounded-lg object-cover" :src="`${$store.state.cloud}/file/${user.avatar}`"></nuxt-link>
                    <div>
                        <nuxt-link class="text-sm text-gray-700 font-medium mb-2" :to="`/user/${user.slug}`">{{user.fullname}}</nuxt-link>
                        <p class="text-sm text-gray-500">{{`Tham gia ngày ${$moment(user.created_at).format("Y-M-D")}`}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['project','user','visibleUser'],
    methods:{
        onDelete(){
            if(this.project.offers.length) return this.$notify({duration:'5000',title: 'Thông báo',text: "Bạn không thể xóa dự án vì đã có người chào giá",})
            this.$axios.$post('/api/user/project/delete',{id:this.project.id}).then((res)=>{this.$router.replace('/user/project');this.$store.commit('view/closeBar')})
        },
        onEnd(){
            this.$axios.$post('/api/user/project/update/status',{id:this.project.id,status:'ended'}).then(res=>this.$nuxt.refresh())
        }
    },
    computed:{
        status(){
            switch(this.project.status){
                case 'offering' :
                    return this.$moment(this.project.deadline_bids) - this.$moment() > 0 ? 'Đang chào giá' : 'Hết hạn chào giá'
                case 'working' :
                    return 'Đang làm việc'
                case 'ended' :
                    return 'Đã kết thúc'
                case 'rated' :
                    return 'Đã đánh giá freelancer'
                default:
                    return false
            }
        }
    }
}
</script>

<style>

</style>