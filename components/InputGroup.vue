<template>
  <ValidationProvider :vid='vid' :name="text" :rules="rules" v-slot="{ errors }">
        <slot>
        <div class="sm:flex justify-between items-center sm:p-4 p-2 border-b border-gray-100">
            <p class="text-sm h-full sm:py-4 flex-1 text-gray-700 mb-2 sm:mb-0">{{text}}</p>
            <slot name="input-container">
                <div class="flex-2">
                    <div class="relative">
                        <slot name="input"></slot>
                        <div v-if="visibleClearBtn" @click ="$emit('clear')" class="absolute w-12 h-12 top-0 bottom-0 right-0 cursor-pointer flex items-center justify-center">
                            <img src="@/assets/img/clear.svg"  class="w-3 h-3">
                        </div>
                    </div>
                    <span v-if='visibleError' class="text-xs text-red-400 italic">{{errors[0]}}</span>
                    <slot name="input-text"></slot>
                </div>
            </slot>
        </div>
        </slot>
    </ValidationProvider>
</template>

<script>
export default {
    props:{
        text:String,
        visibleError:{type:Boolean,default:true,},
        rules:String,
        visibleClearBtn:{type:Boolean,default:true,},
        vid:{type:String,default:null},
    },
}
</script>

<style>

</style>