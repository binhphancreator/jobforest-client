<template>
  <div class="page fixed-all overflow-y-auto flex justify-center items-center">
    <back-ground></back-ground>
    <client-only>
      <Nuxt />
    </client-only>
    <client-only>
      <notifications classes="notification" position="bottom right"/>
    </client-only>
  </div>
  
</template>
