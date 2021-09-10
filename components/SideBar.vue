<template>
<transition name='slide-fade-left'>
  <div v-if="$store.state.view.sidebar" class="sidebar overflow-y-auto overflow-x-hidden transition-all w-16 lg:w-72 shadow-lg px-1 lg:px-4 flex lg:items-start items-center flex-col z-20 bg-white md:relative absolute top-0 bottom-0 left-0">
      <!-- Sidebar Header -->
      <div class="sidebar-header sticky top-0 left-0 right-0 min-h-16 bg-white border-b border-opacity-60 w-full">
        <div class="h-full w-full flex items-center justify-center">
            <nuxt-link class="lg:flex flex-1 items-center h-full hidden"  to="/">
                <img class="h-10 w-10 mr-2" src="@/assets/img/jobforest.svg">
                <p class="text-lg text-gray-700">JobForest</p>
            </nuxt-link >
            <button @click.prevent="$store.commit('view/toggleSidebar')">
                <svg class="svg-hover w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <polygon points="0 0 24 0 24 24 0 24"></polygon>
                        <path class="fill-gray-600" d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" fill="#000000" fill-rule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)"></path>
                        <path class="fill-gray-500" d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.5" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)"></path>
                    </g>
                </svg>
            </button>
        </div>
      </div>
      <!-- Menu -->
      <ul class="menu my-2 lg:w-full">
        <li :class="['menu-item svg-hover',visible.search?'active':'']">
            <span :class="['flex items-center']">
                <nuxt-link class="menu-link" title="Tìm kiếm" to="/freelancer">
                    <svg height="512" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="4 4 20 20" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <path class="fill-gray-500" d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                            <path class="fill-gray-600" d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero"></path>
                        </g>
                    </svg>
                    <p class="ml-4">Tìm kiếm</p>         
                </nuxt-link>
                <span @click='visible.search=!visible.search' class="menu-arrow"></span>
            </span>
            
            <ul v-if='visible.search' class="menu-sub">
                <li class="menu-item">
                    <nuxt-link to='/project' class="menu-link"><p class="ml-8">Tìm việc</p></nuxt-link>
                </li>
                <li class="menu-item">
                    <nuxt-link to='/freelancer' class="menu-link"><p class="ml-8">Tìm freelancer</p></nuxt-link>
                </li>
            </ul>
        </li>
        <li :class="['menu-item svg-hover',visible.settings?'active':'']">
            <span :class="['flex items-center']">
                <nuxt-link class="menu-link" title="Cài đặt" to="/user/overview">
                    <svg enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path class="fill-gray-500" d="m22.683 9.394-1.88-.239c-.155-.477-.346-.937-.569-1.374l1.161-1.495c.47-.605.415-1.459-.122-1.979l-1.575-1.575c-.525-.542-1.379-.596-1.985-.127l-1.493 1.161c-.437-.223-.897-.414-1.375-.569l-.239-1.877c-.09-.753-.729-1.32-1.486-1.32h-2.24c-.757 0-1.396.567-1.486 1.317l-.239 1.88c-.478.155-.938.345-1.375.569l-1.494-1.161c-.604-.469-1.458-.415-1.979.122l-1.575 1.574c-.542.526-.597 1.38-.127 1.986l1.161 1.494c-.224.437-.414.897-.569 1.374l-1.877.239c-.753.09-1.32.729-1.32 1.486v2.24c0 .757.567 1.396 1.317 1.486l1.88.239c.155.477.346.937.569 1.374l-1.161 1.495c-.47.605-.415 1.459.122 1.979l1.575 1.575c.526.541 1.379.595 1.985.126l1.494-1.161c.437.224.897.415 1.374.569l.239 1.876c.09.755.729 1.322 1.486 1.322h2.24c.757 0 1.396-.567 1.486-1.317l.239-1.88c.477-.155.937-.346 1.374-.569l1.495 1.161c.605.47 1.459.415 1.979-.122l1.575-1.575c.542-.526.597-1.379.127-1.985l-1.161-1.494c.224-.437.415-.897.569-1.374l1.876-.239c.753-.09 1.32-.729 1.32-1.486v-2.24c.001-.757-.566-1.396-1.316-1.486zm-10.683 7.606c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"/></svg>     
                    <p class="ml-4">Cài đặt</p>         
                </nuxt-link>
                <span @click='visible.settings=!visible.settings' class="menu-arrow"></span>
            </span>
            
            <ul v-if='visible.settings' class="menu-sub">
                <li class="menu-item">
                    <nuxt-link to='/settings/account' class="menu-link"><p class="ml-8">Tài khoản</p></nuxt-link>
                </li>
                <li class="menu-item">
                    <nuxt-link to='/settings/password' class="menu-link"><p class="ml-8">Mật khẩu</p></nuxt-link>
                </li>
                <li class="menu-item">
                    <nuxt-link to='/settings/profile' class="menu-link"><p class="ml-8">Hồ sơ</p></nuxt-link>
                </li>
                <li class="menu-item">
                    <nuxt-link to='/settings/portfolio' class="menu-link"><p class="ml-8">Portfolio</p></nuxt-link>
                </li>
            </ul>
        </li>
        <li :class="['menu-item svg-hover',visible.chat?'active':'']">
            <span :class="['flex items-center']">
                <button @click='openMessenger' class="menu-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <path class="fill-gray-400" d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill="#000000"></path>
                        <path class="fill-gray-500" d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill="#000000" opacity="0.3"></path>
                    </svg>                    
                    <p class="ml-4">Chat</p>
                </button>
            </span>
        </li>
        <li :class="['menu-item svg-hover',visible.project?'active':'']">
            <span :class="['flex items-center']">
                <nuxt-link class="menu-link" title="Quản lý dự án" to="/user/project">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <path class="fill-gray-400" d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z" fill="#000000" opacity="0.3"></path>
                        <path class="fill-gray-500" d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z" fill="#000000"></path>
                    </svg>                    
                    <p class="ml-4">Quản lý dự án</p>         
                </nuxt-link>
                <span @click='visible.project=!visible.project' class="menu-arrow"></span>
            </span>
            
            <ul v-if='visible.project' class="menu-sub">
                <li class="menu-item">
                    <nuxt-link to='/user/project' class="menu-link"><p class="ml-8">Dự án của tôi</p></nuxt-link>
                </li>
                <li class="menu-item">
                    <nuxt-link to='/user/project/post' class="menu-link"><p class="ml-8">Đăng dự án</p></nuxt-link>
                </li>
                <li class="menu-item">
                    <nuxt-link to='/user/offer' class="menu-link"><p class="ml-8">Dự án đã chào giá</p></nuxt-link>
                </li>
            </ul>
        </li>
        <li :class="['menu-item svg-hover',visible.support?'active':'']">
            <span :class="['flex items-center']">
                <nuxt-link class="menu-link" title="Quản lý dự án" to="/support/freelancer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path class="fill-gray-400" opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M11 4.25769C11 3.07501 9.9663 2.13515 8.84397 2.50814C4.86766 3.82961 2 7.57987 2 11.9999C2 13.6101 2.38057 15.1314 3.05667 16.4788C3.58731 17.5363 4.98303 17.6028 5.81966 16.7662L5.91302 16.6728C6.60358 15.9823 6.65613 14.9011 6.3341 13.9791C6.11766 13.3594 6 12.6934 6 11.9999C6 9.62064 7.38488 7.56483 9.39252 6.59458C10.2721 6.16952 11 5.36732 11 4.39046V4.25769ZM16.4787 20.9434C17.5362 20.4127 17.6027 19.017 16.7661 18.1804L16.6727 18.087C15.9822 17.3964 14.901 17.3439 13.979 17.6659C13.3594 17.8823 12.6934 17.9999 12 17.9999C11.3066 17.9999 10.6406 17.8823 10.021 17.6659C9.09899 17.3439 8.01784 17.3964 7.3273 18.087L7.23392 18.1804C6.39728 19.017 6.4638 20.4127 7.52133 20.9434C8.86866 21.6194 10.3899 21.9999 12 21.9999C13.6101 21.9999 15.1313 21.6194 16.4787 20.9434Z" fill="#12131A"></path>
                        <path class="fill-gray-500" fill-rule="evenodd" clip-rule="evenodd" d="M13 4.39046C13 5.36732 13.7279 6.16952 14.6075 6.59458C16.6151 7.56483 18 9.62064 18 11.9999C18 12.6934 17.8823 13.3594 17.6659 13.9791C17.3439 14.9011 17.3964 15.9823 18.087 16.6728L18.1803 16.7662C19.017 17.6028 20.4127 17.5363 20.9433 16.4788C21.6194 15.1314 22 13.6101 22 11.9999C22 7.57987 19.1323 3.82961 15.156 2.50814C14.0337 2.13515 13 3.07501 13 4.25769V4.39046Z" fill="#12131A"></path>
                    </svg>                  
                    <p class="ml-4">Trung tâm trợ giúp</p>         
                </nuxt-link>
                <span @click='visible.support=!visible.support' class="menu-arrow"></span>
            </span>
            
            <ul v-if='visible.support' class="menu-sub">
                <li class="menu-item">
                    <nuxt-link to='/support/customer' class="menu-link"><p class="ml-8">Cho khách hàng</p></nuxt-link>
                </li>
                <li class="menu-item">
                    <nuxt-link to='/support/freelancer' class="menu-link"><p class="ml-8">Cho freelancer</p></nuxt-link>
                </li>
            </ul>
        </li>
        <li :class="['menu-item svg-hover',visible.logout?'active':'']">
            <span :class="['flex items-center']">
                <button @click='$logout()' class="menu-link">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <path class="fill-gray-400" d="M3.5,3 L9.5,3 C10.3284271,3 11,3.67157288 11,4.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L3.5,20 C2.67157288,20 2,19.3284271 2,18.5 L2,4.5 C2,3.67157288 2.67157288,3 3.5,3 Z M9,9 C8.44771525,9 8,9.44771525 8,10 L8,12 C8,12.5522847 8.44771525,13 9,13 C9.55228475,13 10,12.5522847 10,12 L10,10 C10,9.44771525 9.55228475,9 9,9 Z" fill="#000000" opacity="0.3"></path>
                            <path class="fill-gray-500" d="M14.5,3 L20.5,3 C21.3284271,3 22,3.67157288 22,4.5 L22,18.5 C22,19.3284271 21.3284271,20 20.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,4.5 C13,3.67157288 13.6715729,3 14.5,3 Z M20,9 C19.4477153,9 19,9.44771525 19,10 L19,12 C19,12.5522847 19.4477153,13 20,13 C20.5522847,13 21,12.5522847 21,12 L21,10 C21,9.44771525 20.5522847,9 20,9 Z" fill="#000000" transform="translate(17.500000, 11.500000) scale(-1, 1) translate(-17.500000, -11.500000)"></path>
                        </g>
                    </svg>                    
                    <p class="ml-4">Đăng xuất</p>
                </button>
            </span>
        </li>
      </ul>
  </div>
</transition>
</template>

<script>
export default {
    data(){
        return{
            visible:{
                settings:true,
                chat:false,
                project:true,
                search:true,
                support:true,
                logout:true,
            }
        }
    },
    methods:{
        openMessenger(){
            this.$axios.$get('/api/conversation').then(res=> this.$store.commit('view/setBar',{name:'messenger',data:res}))
        },
    }
}
</script>