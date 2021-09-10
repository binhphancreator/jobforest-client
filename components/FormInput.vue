<template>
<transition name="fade">
  <client-only>
        <ValidationObserver v-slot="{ invalid }">
        <form method="post" @submit.prevent = "$emit('submit')">
            <slot name="header">
                <div class="py-4 bg-gray-100 rounded-t-xl">
                    <p class="text-center text-gray-700">{{title}}</p>
                </div>
            </slot>
            <slot></slot>
            
            <transition name="fade">
            <slot v-if='!invalid && subCondition' name="submit">
                <div v-if='!invalid && subCondition' class="flex justify-center sm:p-4 p-2">
                    <button :disabled="invalid || !subCondition" class="text-sm p-2 px-4 bg-gray-700 text-gray-50 rounded-full font-light">{{textBtn}}</button>
                </div>
            </slot>
            </transition>
        </form>
        </ValidationObserver>
  </client-only>
</transition>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'Cài đặt'
        },
        textBtn:{
            type:String,
            default:'Cập nhật'
        },
        subCondition:{
            type:Boolean,
            default:true,
        }
    }
}
</script>

<style>

</style>