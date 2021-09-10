<template>
  <div :class="['card-job','shadow-md' ,'rounded-md' ,'bg-white' ,'p-5' ,'cursor-pointer' ,'box-border' ,'hover:translate-x-10',($store.state.view.bar.name=='project-info' && project.id===$store.state.view.bar.data['project-info'].id)?'border-2 border-blue-400':'']" style="transition : all 0.1s ease;">
    <div class="block mb-2">
      <nuxt-link :to='`/project/${project.slug}`' class="block mb-1 sm:text-base text-sm text-gray-900 mb-1 sm:mb-0">{{project.name}}</nuxt-link>
      <div>
        <nuxt-link :to='`/user/${project.user.slug}`' class="inline text-sm text-blue-400">{{project.user.fullname}}</nuxt-link>
        <span class="text-sm text-gray-500">đã đăng vào {{$moment(project.createt_at).format('YYYY-MM-DD')}}</span>
      </div>
      
    </div>

    <div class="bg-gray-50 sm:flex items-center justify-between p-2 py-3 rounded mb-4">
      <p class="text-sm text-gray-700">{{project.location + " | " + project.work_form + " | " + project.salary_type}}</p>
      <p class="text-sm text-gray-700">{{"Hạn chào giá : "+project.deadline_bids}}</p>
    </div>

    <div class="flex flex-nowrap space-x-2">
      <nuxt-link :to='`/project/expertise/${project.expertise_id}`' class="text-xs text-white p-2 bg-blue-400 rounded whitespace-nowrap" href="/">{{$store.getters['tags/getExpertisesById'](project.expertise_id).name}}</nuxt-link>
      <nuxt-link :to='`/project/skill/${skill}`' v-for="skill in project.skills" :key="skill" class="text-xs text-gray-700 p-2 bg-gray-100 rounded whitespace-nowrap" href="/">{{$store.getters['tags/getSkillById'](skill).name}}</nuxt-link>
    </div>

  </div>
</template>

<script>
export default {
  props:['project']
}
</script>