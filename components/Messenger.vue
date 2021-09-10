<template>
  <Bar class="sm:w-96" v-if="$store.state.view.bar.name==='messenger' && (!pages.length || pages.includes($route.path))">
    <template slot='header-left'>
        <div class="flex-1 flex items-center svg-hover">
            <svg class="w-6 h-6 fill-gray-400 mr-2" viewBox="0 0 28 28" alt="" height="20" width="20"><path d="M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"></path></svg>
            <p class="text-sm text-gray-700">Messenger</p>
        </div>
    </template>
    <template>
        <ul class="mt-2 space-y-2">
            <li @click='contact(participant(conversation).id)' class="flex items-center cursor-pointer" v-for='conversation in conversations' :key='conversation.id'>
              <img class="h-14 w-14 rounded-full" :src="`${$store.state.cloud}/file/${participant(conversation).avatar}`">
              <div class="ml-2">
                <p class="text-gray-700">{{participant(conversation).fullname}}</p>
                <p v-if='conversation.last_message' class="text-sm text-gray-500">{{conversation.last_message.message.substr(0,30)}}...</p>
                <p v-else class="text-sm text-gray-500">Hãy gửi lời chào đến {{participant(conversation).fullname}}</p>
              </div>
            </li>
        </ul>
    </template>
  </Bar>
</template>

<script>
export default {
    data(){return{
      pages:[],
    }},
    methods:{
      participant(conversation){
        return conversation.participants.find(participant=>participant.id!=this.$store.state.auth.user.id)
      },
      async contact(id){
        this.$store.dispatch('view/createConversation',id)
      }
    },
    computed:{
      conversations(){
        return this.$store.state.view.bar.data['messenger'].data
      },
    },
}
</script>

<style>

</style>