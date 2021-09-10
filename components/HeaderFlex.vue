<template>
  <header class="bg-bottom flex items-center bg-city-life bg-repeat-x bg-white border-b border-gray-100 h-16 py-2 sticky top-0 left-0 right-0 z-10">
        <slot name="header-top">
            <div class="flex md:container w-full md:mx-auto px-4">
                <transition name="fade">
                <div v-if='!$store.state.view.sidebar' class="flex">
                    <button @click.prevent="$store.commit('view/toggleSidebar')">
                        <svg class="svg-hover w-10 h-10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <rect class="active fill-gray-600" fill="#000000" x="4" y="5" width="16" height="3" rx="1.5"></rect>
                                <path class="fill-gray-500" d="M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L18.5,10 C19.3284271,10 20,10.6715729 20,11.5 C20,12.3284271 19.3284271,13 18.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z" fill="#000000" opacity="0.3"></path>
                            </g>
                        </svg>
                    </button>
                </div>
                </transition>

                <div class="flex justify-end flex-1 items-center">
                    <button @click='openMessenger' class="svg-hover mr-2 p-1 rounded-lg" >
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <path class="fill-gray-600" d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z" fill="#000000"></path>
                            <path class="fill-gray-500" d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z" fill="#000000" opacity="0.3"></path>
                        </svg>
                    </button>
                    <button @click='openSearch' class="svg-hover mr-2 p-1 rounded-lg">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <rect x="0" y="0" width="24" height="24"></rect>
                                <path class="fill-gray-500" d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fill-rule="nonzero" opacity="0.3"></path>
                                <path class="fill-gray-600" d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fill-rule="nonzero"></path>
                            </g>
                        </svg>
                    </button>
                    <nuxt-link class="md:flex cursor-pointer items-center md:py-1 md:px-4 rounded-full md:border border-gray-200 text-gray-700" to="/user/overview" v-if="$auth.loggedIn">
                        <p class="text-sm mr-2 whitespace-nowrap hidden md:block">{{$auth.user.fullname.length>15?$auth.user.fullname.substr(0,10)+'...':$auth.user.fullname}}</p>
                        <img class="w-8 h-8 rounded-full object-cover" :src="`${$store.state.cloud}/file/${$auth.user.avatar}`">
                    </nuxt-link>
                </div>
            </div>
        </slot>
    </header>
</template>

<script>
export default {
    methods:{
        openMessenger(){
            this.$axios.$get('/api/conversation').then(res=> this.$store.commit('view/setBar',{name:'messenger',data:res}))
        },
        openSearch(){
            if(!this.$auth.loggedIn) return
            if(this.$auth.user.profile.type=='Freelancer') this.$router.replace('/project') 
            else this.$router.replace('/freelancer') 
        },
        
    },
}
</script>