<template>
    <div class="mx-auto min-h-screen">
        <NavSetting/>
        <div class="p-4 px-2 md:container mx-auto space-y-2">
            <div class="md:flex items-center">
                <div class="flex flex-col md:flex-row mb-2 md:mr-4 flex-2 md:space-x-2 items-center">
                    <div class="flex flex-col items-center space-y-1 mb-2">
                        <img class="md:w-28 md:h-28 w-20 h-20 rounded-full" :src="`${$store.state.cloud}/file/${user.avatar}`">
                        <StarRating :star="star" />
                    </div>
                    <div class="space-y-2">
                        <h2 class="md:text-lg text-center text-gray-500 font-medium">{{user.fullname}}</h2>
                        <div class="flex justify-center flex-wrap space-x-2 text-sm">
                            <div class="flex items-center space-x-1">
                                <svg class="w-4 h-4 svg-hover" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                        <path class="fill-gray-500" d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                                        <path class="fill-gray-500" d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fill-rule="nonzero"></path>
                                    </g>
                                </svg>
                                <p class="text-gray-400 font-medium">{{`${user.profile.title ? user.profile.title : 'Chưa cập nhật'}`}}</p>
                            </div>
                            <div class="flex items-center space-x-1">
                                <svg class="w-4 h-4 svg-hover" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"></rect>
                                        <path class="fill-gray-500" d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#000000" fill-rule="nonzero"></path>
                                    </g>
                                </svg>
                                <p class="text-gray-400 font-medium">{{`${user.city ? user.city : 'Chưa cập nhật'}`}}</p>
                            </div>
                            <div class="flex items-center space-x-1">
                                <p class="text-gray-400 hover:text-blue-400 font-medium">@</p>
                                <p class="text-gray-400 font-medium">{{`${user.email ? user.email : 'Chưa cập nhật'}`}}</p>
                            </div>
                        </div>
                        <div class="flex justify-center flex-wrap space-x-2">
                            <p class="text-sm text-gray-500 border rounded-md border-dashed border-gray-300 p-2">{{user.reviews.length}} đánh giá</p>
                            <p class="text-sm text-gray-500 border rounded-md border-dashed border-gray-300 p-2">{{user.skills.length}} kỹ năng</p>
                            <p class="text-sm text-gray-500 border rounded-md border-dashed border-gray-300 p-2">{{user.services.length}} dịch vụ</p>
                        </div>
                    </div>
                </div>
                <div class="flex-1 md:ml-4 space-y-2">
                    <div class="flex justify-center md:justify-end space-x-2">
                        <nuxt-link to='/settings/profile' class="block rounded p-2 text-xs text-gray-50 bg-blue-400">Chỉnh sửa hồ sơ</nuxt-link>
                    </div>
                    <div class="">
                        <div class="flex justify-between items-center mb-1">
                            <p class="text-sm text-gray-500 font-medium">Hoàn thành hồ sơ</p>
                            <p class="text-sm text-gray-500 font-medium">{{percent}}%</p>
                        </div>
                        <ProgressBar class="mb-2" :percent="percent"/>
                    </div>
                </div>
            </div>
            <div class="text-sm text-gray-500 p-2 space-y-2 rounded-xl border border-gray-100">
                <h3 class="text-lg text-gray-500 font-medium">Thông tin tổng quan</h3>
                <div class="md:flex md:space-y-0 space-y-1">
                    <div class="flex-1 md:mr-4 space-y-1">
                        <div class="flex items-center space-x-2">
                            <p class="flex-1 font-medium text-gray-400">Họ và tên</p>
                            <p class="flex-1">{{user.fullname}}</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="flex-1 font-medium text-gray-400">Số điện thoại</p>
                            <p class="flex-1">{{`${user.numberphone ? user.numberphone:'Chưa cập nhật'}`}}</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="flex-1 font-medium text-gray-400">Email</p>
                            <p class="flex-1">{{`${user.email ? user.email:'Chưa cập nhật'}`}}</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="flex-1 font-medium text-gray-400">Ngày sinh</p>
                            <p class="flex-1">{{`${user.birth ? $moment(user.birth).format('YYYY-MM-DD'):'Chưa cập nhật'}`}}</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="flex-1 font-medium text-gray-400">Tỉnh/Thành phố</p>
                            <p class="flex-1">{{`${user.city ? user.city:'Chưa cập nhật'}`}}</p>
                        </div>
                    </div>
                    <div class="flex-1 md:ml-4 space-y-1">
                        <div class="flex items-center space-x-2">
                            <p class="flex-1 font-medium text-gray-400">Loại tài khoản</p>
                            <p class="flex-1">{{`${user.profile.type ? user.profile.type:'Chưa cập nhật'}`}}</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="flex-1 font-medium text-gray-400">Chức danh</p>
                            <p class="flex-1">{{`${user.profile.title ? user.profile.title:'Chưa cập nhật'}`}}</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="flex-1 font-medium text-gray-400">Kỹ năng chuyên môn</p>
                            <p class="flex-1">{{`${user.profile.expertise_id ? $store.state.tags.expertises.find(expertise => expertise.id == user.profile.expertise_id).name:'Chưa cập nhật'}`}}</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="flex-1 font-medium text-gray-400">Trình độ</p>
                            <p class="flex-1">{{`${user.profile.qualification ? user.profile.qualification:'Chưa cập nhật'}`}}</p>
                        </div>
                        <div class="flex items-center space-x-2">
                            <p class="flex-1 font-medium text-gray-400">Website cá nhân</p>
                            <p class="flex-1">{{`${user.profile.website ? user.profile.website:'Chưa cập nhật'}`}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if='user.profile.introduction' class="text-sm text-gray-500 p-2 space-y-2 rounded-xl border border-gray-100">
                <h3 class="text-lg text-gray-500 font-medium">Giới thiệu</h3>
                <p>{{user.profile.introduction}}</p>
            </div>

            <div v-if='user.skills.length || user.services.length' class="text-sm text-gray-500 p-2 space-y-2 rounded-xl border border-gray-100">
                <h3 class="text-lg text-gray-500 font-medium">Kỹ năng và Dịch vụ</h3>
                <div class="flex flex-wrap">
                    <div v-if='user.services.length' class="flex flex-wrap"><nuxt-link :to='`/freelancer/service/${service}`' v-for="service in user.services" :key="service" class="text-xs text-gray-50 p-2 bg-blue-400 rounded whitespace-nowrap mr-2 mb-1" href="/">{{$store.getters['tags/getServiceById'](service).name}}</nuxt-link></div>
                    <div v-if='user.skills.length' class="flex flex-wrap"><nuxt-link :to='`/freelancer/skill/${skill}`' v-for="skill in user.skills" :key="skill" class="text-xs text-gray-700 p-2 bg-gray-100 rounded whitespace-nowrap mr-2 mb-1" href="/">{{$store.getters['tags/getSkillById'](skill).name}}</nuxt-link></div>
                </div>
            </div>

            <div v-if='user.portfolios.length' class="text-sm text-gray-500 p-2 space-y-2 rounded-xl border border-gray-100">
                <h3 class="text-lg text-gray-500 font-medium">Portfolios</h3>
                <ul class="block flex flex-wrap">
                    <li class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 min-h-40 mb-4" v-for='portfolio in user.portfolios' :key='portfolio.id'><CardPortfolio :me='me' class="w-full h-full" :portfolio='portfolio'/></li>
                </ul>
            </div>

            <div v-if='user.reviews.length' class="text-sm text-gray-500 p-2 space-y-2 rounded-xl border border-gray-100">
                <h3 class="text-lg text-gray-500 font-medium">Đánh giá</h3>
                <ul class="block flex flex-wrap">
                    <li class="w-full p-2 sm:w-1/2 md:w-1/3 xl:w-1/4 border border-gray-200 space-y-1" v-for='review in user.reviews' :key='review.id'>
                        <StarRating :star='review.star'/>
                        <div>
                            <nuxt-link :to='`/project/${review.project.slug}`' class="font-medium text-gray-500">{{review.project.name}}</nuxt-link>
                        </div>
                        <div>
                            <h4>{{review.title}}</h4>
                            <p class="text-xs text-gray-400 font-medium">{{$moment(review.created_at).format('YYYY-MM-DD')}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        contact(){
            this.$store.dispatch('view/createConversation',this.user.id)
        }
    },
    computed:{
        user(){
            return this.$auth.user
        },
        star(){
            var percent = 0
            this.user.reviews.forEach(review => percent+=review.star)
            return this.user.reviews.length ? percent/this.user.reviews.length : 0
        },
        percent(){
            var percent = 0
            if(this.user.numberphone) percent+=20
            if(this.user.skills.length && this.user.services.length) percent+=30
            if(this.user.profile.title) percent+=20
            if(this.user.portfolios.length) percent+=30
            return percent
        },
    },
    layout:'flex',
    middleware:['auth']
}
</script>

<style>

</style>