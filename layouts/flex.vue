<template>
  <div class="page flex fixed-all">
    <back-ground></back-ground>
    <SideBar />
    

    <main class="main-content flex-1 overflow-y-auto mx-auto relative">
      <HeaderFlex />
      <Nuxt />
    </main>
    <messenger></messenger>
    <chat-box></chat-box>
    <project-info-bar></project-info-bar>

    <client-only>
      <notifications classes="notification" position="bottom right"/>
    </client-only>
  </div>
  
</template>