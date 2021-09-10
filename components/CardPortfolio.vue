<template>
    <div class="border border-gray-200 p-2 flex flex-col">
        <div class="flex-1 w-full space-y-2">
            <h3 class="text-gray-700">{{portfolio.title}}</h3>
            <p class="text-sm text-gray-600">{{portfolio.description.substr(0,100)}}...</p>
            <a v-if='portfolio.url!="null"' class="block text-sm text-blue-400" :href="portfolio.url">{{portfolio.url}}</a>
            <a v-if='portfolio.file' class="block text-sm text-blue-400" :href="`${$store.state.cloud}/file/${portfolio.file}`">File đính kèm</a>
        </div>
        <div v-if='me' class="flex w-full">
            <button class="rounded p-1 px-2 text-xs text-gray-500 bg-gray-100 mr-2">Xem</button>
            <button @click='onDelete' class="rounded p-1 px-2 text-xs text-gray-500 bg-red-100">Xoá</button>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        onDelete(){
            this.$axios.$delete('/api/user/portfolio/delete',{id:this.portfolio.id}).then(res=>this.$auth.setUser(res))
        }
    },
    props:['portfolio','me'],
    
}
</script>

<style>

</style>