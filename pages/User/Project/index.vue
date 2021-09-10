<template>
    <div class="mx-auto">
      <NavProject/>
      <div class="p-4 px-2 md:container mx-auto min-h-96">
        <h2 class="text-xl text-gray-700 text-center mb-4">Quản lý dự án đã đăng</h2>
        <ul class="list-jobs">
          <li class="mb-5" v-for="project in projects" :key="project.id" @click="$store.commit('view/setBar',{name:'project-info',data:project})">
            <CardProject :project="project" />
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      projects:null,
    }
  },
  
  async asyncData({$axios}){
    const projects = await $axios.$get('/api/user/project')
    return {projects}
  },
  middleware:['auth',],
  layout:'flex',
}
</script>