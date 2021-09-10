<template>
  <div class="page fixed-all overflow-y-auto">
    <back-ground></back-ground>
    <Header />
    <Nuxt />
    <Footer />
    <client-only>
      <notifications classes="notification" position="bottom right"/>
    </client-only>
  </div>
  
</template>

<script>
export default {
  // mounted(){
  //   this.$onetap(res=>{this.$login(res)})
  // }
}
</script>
