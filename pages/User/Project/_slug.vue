<template>
  <main class="main-content mx-auto">
    <NavProject/>
    <div class="p-4 px-2 md:container mx-auto">
      <ProjectDetail class="p-2 md:flex" :project='project' :user='project.user' :visibleUser='false'/>
      <ProjectOffers class="mb-8" :project='project'/>
    </div>
  </main>
</template>

<script>
export default {
    async asyncData({ params,$axios }) {
      const slug = params.slug
      const project = await $axios.$get(`api/project/${slug}`)
      if(project.accepted_offer) project.offers = [project.accepted_offer,...project.offers]
      return { project }
    },
    methods:{
        onUpdate(){
          this.$axios.$post(`api/project/update`,this.project).then((res)=>{this.$notify({duration:'5000',title: 'Thông báo',text: `Cập nhật dự án '${res.name}' thành công`,});this.$router.replace("/projects/manage");})
        },
        onDelete(){
          this.$axios.$post(`api/project/delete`,{id:this.project.id}).then((res)=>{this.$notify({duration:'5000',title: 'Thông báo',text: `Xoá dự án '${this.project.name}' thành công`,});this.$router.replace("/projects/manage");})
        }
    },
    middleware:['auth','own-project',],
    layout:'flex',
}
</script>
