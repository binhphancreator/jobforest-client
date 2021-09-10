<template>
<transition name='slide-fade-right'>
    <div  class="fixed flex flex-col top-0 right-0 bottom-0 sm:w-80 w-screen z-20 bg-white shadow-lg overflow-y-auto">
        <div class="min-h-16 px-2 bg-white flex justify-between items-center border-b border-gray-200 sticky top-0 left-0 right-0 bg-white">
            <slot class="" name="header-left"></slot>
            <div class="cursor-pointer svg-hover" @click="$store.commit('view/closeBar')">
                <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g transform="translate(12.000000, 12.000000) rotate(-45.000000) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)" fill="#000000">
                        <rect class="fill-gray-500 active" fill="#000000" x="0" y="7" width="16" height="2" rx="1"></rect>
                        <rect class="fill-gray-500 active" fill="#000000" opacity="0.5" transform="translate(8.000000, 8.000000) rotate(-270.000000) translate(-8.000000, -8.000000)" x="0" y="7" width="16" height="2" rx="1"></rect>
                    </g>
                </svg>
            </div>
        </div>
        <div class="px-2 flex-1"><slot></slot></div>
        <div class="px-2 bg-white sticky bottom-0 left-0 right-0 border-t border-gray-200"><slot name="bottom"></slot></div>
    </div>
</transition>
</template>

<script>
export default {
    
}
</script>