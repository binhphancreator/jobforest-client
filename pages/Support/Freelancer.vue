<template>
  <main class="mx-auto">
    <NavSupport/>
      <div class="mx-auto max-w-screen-lg px-4 space-y-4">
        <BigImageCard>
          <template v-slot:left>
            <img class="w-96 h-96 object-contain" src="@/assets/img/undraw_Profile_re_4a55.svg" alt="" srcset="">
          </template>
          <template v-slot:right>
            <h1 class="text-lg text-gray-500 mb-4">BƯỚC 1</h1>
            <h1 class="text-2xl mb-4">Tạo hồ sơ</h1>
            <p class="md:text-base text-sm text-gray-900">Tạo một hồ sơ chuyên nghiệp để gây ấn tượng với khách hàng.</p>
            <p class="md:text-base text-sm text-gray-900">Xác thực thông tin cá nhân để tăng uy tín cho tài khoản.</p>
          </template>
        </BigImageCard>

        <BigImageCard reverse>
          <template v-slot:left>
            <img class="w-96 h-96 object-contain" src="@/assets/img/undraw_job_offers_kw5d.svg" alt="" srcset="">
          </template>
          <template v-slot:right>
            <h1 class="text-lg text-gray-500 mb-4">BƯỚC 2</h1>
            <h1 class="text-2xl mb-4">Gửi chào giá</h1>
            <p class="md:text-base text-sm text-gray-900">Lựa chọn công việc phù hợp với kỹ năng và kinh nghiệm.</p>
            <p class="md:text-base text-sm text-gray-900">Đăng ký nhận việc bằng cách chào giá công việc.</p>
          </template>
        </BigImageCard>

        <BigImageCard>
          <template v-slot:left>
            <img class="w-96 h-96 object-contain" src="@/assets/img/undraw_working_remotely_jh40.svg" alt="" srcset="">
          </template>
          <template v-slot:right>
            <h1 class="text-lg text-gray-500 mb-4">BƯỚC 3</h1>
            <h1 class="text-2xl mb-4">Bắt đầu làm việc</h1>
            <p class="md:text-base text-sm text-gray-900">Bắt đầu làm việc khi jobforest sau khi nhà tuyển dụng chấp nhận.</p>
            <p class="md:text-base text-sm text-gray-900">Làm việc trực tuyến với khách hàng trên hệ thống của jobforest.</p>
          </template>
        </BigImageCard>

        <div class="h-96 flex flex-col items-center justify-center space-y-4">
            <h2 class="text-3xl text-center text-gray-600">Tìm việc và chào giá để nhận việc ngay!</h2>
            <nuxt-link to='/project' class="p-2 px-4 text-xl bg-blue-400 text-white rounded-full">Tìm việc ngay</nuxt-link>
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