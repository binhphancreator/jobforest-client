<template>
  <main class="mx-auto max-w-screen-lg px-4">
    <BigImageCard>
      <template v-slot:left>
        <img class="w-96 h-96" src="@/assets/img/undraw_Post_re_mtr4.svg" alt="" srcset="">
      </template>
      <template v-slot:right>
        <h1 class="text-2xl">Đăng dự án không mất phí,</h1>
        <h1 class="text-2xl mb-2">Tiếp cận ngay <span class="font-medium">chuyên gia</span></h1>
        <p class="md:text-base text-sm leading-6 text-gray-900 mb-4">Bạn sẽ nhanh chóng nhận được chào giá từ cộng đồng +400.000 Freelancer/Cộng tác viên. Chủ động phỏng vấn các ứng viên thông qua hệ thống tin nhắn trực tuyến để tìm người phù hợp nhất với yêu cầu của bạn.</p>
        <div class="flex">
          <nuxt-link to="/user/project/post" class="btn block text-sm py-3 px-5 rounded-full bg-gray-700 text-white">Đăng dự án mới</nuxt-link>
        </div>
      </template>
    </BigImageCard>

    <BigImageCard reverse>
      <template v-slot:left>
        <img class="w-96 h-96" src="@/assets/img/undraw_online_cv_qy9w.svg" alt="" srcset="">
      </template>
      <template v-slot:right>
        <h1 class="text-2xl">Kết nối nhanh chóng,</h1>
        <h1 class="text-2xl mb-2"><span class="font-medium">Rút ngắn thời gian</span> tìm nhân sự</h1>
        <p class="md:text-base text-sm leading-6 text-gray-900 mb-4">jobforest kết nối bạn với Freelancer/Cộng tác viên trên lãnh thổ Việt Nam và quốc tế. Công việc của bạn sẽ nhanh chóng được giải quyết với chất lượng cao.</p>
        <div class="flex">
            <nuxt-link to="/freelancer" class="btn block text-sm py-3 px-5 rounded-full bg-gray-700 text-white">Tìm freelancer</nuxt-link>
        </div>
      </template>
    </BigImageCard>

    <BigImageCard>
      <template v-slot:left>
        <img class="w-96 h-96" src="@/assets/img/undraw_secure_files_re_6vdh.svg" alt="" srcset="">
      </template>
      <template v-slot:right>
        <h1 class="text-2xl">99,82% khách hàng hài lòng,</h1>
        <h1 class="text-2xl mb-2"><span class="font-medium">Bảo mật thông tin cá nhân</span> an toàn</h1>
        <p class="md:text-base text-sm leading-6 text-gray-900 mb-4">Khách hàng có thể đánh giá jobforest sau khi hoàn thành việc. Điều này có ảnh hưởng đến sự uy tín của Freelancer. Thông tin cá nhân và công việc của bạn luôn được bảo mật theo chính sách bảo mật của vLance.</p>
      </template>
    </BigImageCard>

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
