<template>
    <Bar  v-if="$store.state.view.bar.name==='project-info' && (!pages.length || pages.includes($route.path))">
        <template slot='header-left'>
            <div class="flex-1">
                <p class="text-sm text-gray-700">{{$store.state.view.bar.data['project-info'].name}}</p>
                <p class="text-xs text-gray-500">Đăng ngày {{$moment($store.state.view.bar.data['project-info'].created_at).format('Y-MM-DD hh:mm:s')}}</p>
            </div>
        </template>
        <template>
            <div class="my-2 space-y-2 text-xs font-medium text-gray-400">
                <p class="text-sm font-medium text-gray-800 mb-4">Thông tin chung</p>
                <div class="flex items-center space-x-2 svg-hover">
                    <svg class="w-5 h-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <path class="fill-gray-500" d="M256,463.8C71.4,463.6-21.5,239.4,108.9,108.7c77.4-80.7,216.7-80.7,294.2,0C533.5,239.4,440.6,463.6,256,463.8z M256,80.3
                            c-96.8,0-175.5,78.7-175.5,175.5c9.6,232.8,341.4,232.8,351,0C431.5,159,352.8,80.3,256,80.3z M331.7,308.5l-51.3-51.3
                            c0.5-7.6-2.8-14.8-8.1-19.5c0-0.2,0-0.3,0-0.5V142c-0.9-21.6-31.6-21.5-32.5,0v95.1c0,0.2,0,0.3,0,0.5c-17,15.2-5.5,43.7,17.6,42.5
                            l51.3,51.3c6.3,6.3,16.6,6.3,23,0C338,325.1,338,314.8,331.7,308.5L331.7,308.5z"/>
                    </svg>
                    <p class=" text-gray-700">{{deadline}}</p>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center flex-1 space-x-2 svg-hover">
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path class="fill-gray-500" d="M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z" fill="#000000" fill-rule="nonzero"></path>
                            </g>
                        </svg>
                        <p class=" text-gray-700">{{$store.state.view.bar.data['project-info'].location}}</p>
                    </div>
                    <div class="flex items-center flex-1 space-x-2 svg-hover">
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <rect class="active fill-gray-500" fill="#000000" opacity="0.3" x="2" y="5" width="20" height="14" rx="2"></rect>
                                <rect class="active fill-gray-500" fill="#000000" x="2" y="8" width="20" height="3"></rect>
                                <rect class="active fill-gray-500" fill="#000000" opacity="0.3" x="16" y="14" width="4" height="2" rx="1"></rect>
                            </g>
                        </svg>
                        <p class="text-gray-700">{{$store.state.view.bar.data['project-info'].budget_min}}đ - {{$store.state.view.bar.data['project-info'].budget_max}}đ</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2 svg-hover">
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <polygon points="0 0 24 0 24 24 0 24"></polygon>
                            <path class="active fill-gray-500" d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                            <rect class="active fill-gray-500" fill="#000000" x="6" y="11" width="9" height="2" rx="1"></rect>
                            <rect class="active fill-gray-500" fill="#000000" x="6" y="15" width="5" height="2" rx="1"></rect>
                        </g>
                    </svg>
                    <p class="text-gray-700">{{$store.state.view.bar.data['project-info'].type_work}} - {{$store.state.view.bar.data['project-info'].work_form}} - {{$store.state.view.bar.data['project-info'].salary_type}}</p>
                </div>
            </div>
            <div class="border-b py-4 border-gray-200 w-full my-2">
                <p class="text-sm font-medium text-gray-800 mb-4">Mô tả</p>
                <p class="text-xs leading-6 text-gray-400">{{$store.state.view.bar.data['project-info'].content.replace(/<[^>]+>/g, ' ').substr(0,400)+"..."}} <a href="/" class="font-medium text-xs text-blue-500">Đọc thêm</a></p>
            </div>

            <div v-if="!$auth.loggedIn || $auth.user.id!==$store.state.view.bar.data['project-info'].user_id" class="py-4 flex items-center justify-between bg-white">
                <button class="btn text-xs bg-blue-500 text-white p-4 py-2 rounded-lg">Gửi chào giá</button>
                <button class="btn text-xs bg-gray-700 text-white p-4 py-2 rounded-lg">Xem chi tiết</button>
            </div>

            <div v-if="$auth.loggedIn && $auth.user.id===$store.state.view.bar.data['project-info'].user_id" class="py-4 flex items-center justify-between bg-white">
                <nuxt-link :to="`/user/project/update/${$store.state.view.bar.data['project-info'].slug}`" class="btn text-xs text-gray-700 bg-blue-100 p-4 py-2 rounded-lg">Chỉnh sửa</nuxt-link >
                <nuxt-link :to="`/user/project/${$store.state.view.bar.data['project-info'].slug}`" class="btn text-xs text-gray-700 bg-gray-100 p-4 py-2 rounded-lg">Xem</nuxt-link >
            </div>
        </template>
    </Bar>
</template>

<script>
export default {
    data(){return{
        pages:['/user/project','/project']
    }},
    computed:{
        deadline(){
            var duration = this.$moment(this.$store.state.view.bar.data['project-info'].deadline_bids).diff(this.$moment(),'hour')
            if(duration<0) return 'Hết hạn chào giá'
            return `Còn ${Math.ceil(duration/24)} ngày ${duration%24} giờ`
        }
    }
}
</script>