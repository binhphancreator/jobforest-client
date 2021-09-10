<template>
  <main class="mx-auto ">
    <NavSupport/>
    <div class="mx-auto max-w-screen-lg px-4 space-y-4">
      <BigImageCard>
        <template v-slot:left>
          <img class="w-96 h-96 object-contain" src="@/assets/img/undraw_Profile_re_4a55.svg" alt="" srcset="">
        </template>
        <template v-slot:right>
          <h1 class="text-lg text-gray-500 mb-4">BƯỚC 1</h1>
          <h1 class="text-2xl mb-4">Đăng việc dễ dàng</h1>
          <p class="md:text-base text-sm text-gray-900">Đăng việc làm miễn phí.</p>
          <p class="md:text-base text-sm text-gray-900">Thu hút những Freelancer giỏi nhất.</p>
        </template>
      </BigImageCard>

      <BigImageCard reverse>
        <template v-slot:left>
          <img class="w-96 h-96 object-contain" src="@/assets/img/undraw_job_offers_kw5d.svg" alt="" srcset="">
        </template>
        <template v-slot:right>
          <h1 class="text-lg text-gray-500 mb-4">BƯỚC 2</h1>
          <h1 class="text-2xl mb-4">Chọn Freelancer ưng ý</h1>
          <p class="md:text-base text-sm text-gray-900">So sánh các ứng viên.</p>
          <p class="md:text-base text-sm text-gray-900">Chọn 01 Freelancer ưng ý nhất.</p>
        </template>
      </BigImageCard>

      <BigImageCard>
        <template v-slot:left>
          <img class="w-96 h-96 object-contain" src="@/assets/img/undraw_working_remotely_jh40.svg" alt="" srcset="">
        </template>
        <template v-slot:right>
          <h1 class="text-lg text-gray-500 mb-4">BƯỚC 3</h1>
          <h1 class="text-2xl mb-4">Liên hệ làm việc</h1>
          <p class="md:text-base text-sm text-gray-900">Liên hệ ngay với Freelancer ưng ý qua email hoặc điện thoại để trao đổi công việc và thỏa thuận mức lương.</p>
        </template>
      </BigImageCard>

      <div class="h-96 flex flex-col items-center justify-center space-y-4">
          <h2 class="text-3xl text-center text-gray-600">Đăng việc để thuê Freelancer làm việc ngay!</h2>
          <nuxt-link to='/user/project/post' class="p-2 px-4 text-xl bg-blue-400 text-white rounded-full">Đăng việc ngay</nuxt-link>
      </div>
    </div>
  </main>
</template>


<script>
export default {
    layout({$auth}){
      if(!$auth.loggedIn) return 'default'
      return 'flex'
    },
}
</script>

<style>

</style>