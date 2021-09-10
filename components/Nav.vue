<template>
    <nav class="border-b border-gray-200 box-border">
        <div class="flex flex-nowrap justify-start items-center whitespace-nowrap overflow-x-auto scrollbar-hidden px-4 md:container mx-auto">
            <nuxt-link v-for="link in links" :key="link.href" :class="['block py-4 text-sm text-gray-700 md:pr-2 mr-4 transition-all hover:border-b-2 border-blue-400',($route.path==link.href)?'border-b-2':'']" :to='link.href'>{{link.text}}</nuxt-link>
        </div>
    </nav>
</template>

<script>
export default {
    props:{
        links:Array,
    }
}
</script>

<style>

</style>