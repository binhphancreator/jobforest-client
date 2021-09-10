<template>
  <Bar class="sm:w-96" v-if="$store.state.view.bar.name==='chat' && (!pages.length || pages.includes($route.path))">
    <template slot='header-left'>
      <div class="flex-1 flex items-center">
        <nuxt-link class="block mr-4" to='/'><img class="h-8 w-8 rounded-full" :src="`${$store.state.cloud}/file/${participant.avatar}`" :alt="participant.fullname"></nuxt-link>
        <p class="text-sm text-gray-700">{{participant.fullname}}</p>
      </div>
    </template>
    <template>
      <div class="my-2 overflow-y-auto">
        <ul class="space-y-2">
          <li :class="['flex items-center',sender(message.sender_id).id==$auth.user.id?'flex-row-reverse':'']" v-for='message in conversation.messages.data' :key='message.id'>
            <img class="w-6 h-6 rounded-full" :src="`${$store.state.cloud}/file/${sender(message.sender_id).avatar}`">
            <p :class="['bg-gray-100 text-sm p-2 rounded-xl text-gray-600',sender(message.sender_id).id==$auth.user.id?'bg-blue-50 mr-2':'ml-2']">{{message.message}}</p>
          </li>
        </ul>
      </div>
    </template>
    <template slot='bottom'>
      <form class="flex items-center relative" @submit.prevent="sendMessage">
        <input placeholder="Gửi tin nhắn" v-model='message' class="flex-1 h-12 p-2 text-sm text-gray-600" type="text">
        <button class="flex items-center justify-center">
          <svg class="fill-blue-400 w-6 h-6" width="20px" height="20px" viewBox="0 0 24 24"><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fill-rule="evenodd" stroke="none"></path></svg>
        </button>
      </form>
    </template>
  </Bar>
</template>

<script>
export default {
    data(){return{
      pages:[],
      message:null,
    }},
    computed:{
      participant(){
        return this.$store.state.view.bar.data['chat'].participants.find(participant=>participant.id!=this.$store.state.auth.user.id)
      },
      conversation(){
        return this.$store.state.view.bar.data['chat']
      },
    },
    methods:{
      sendMessage(){
        this.$axios.$post('/api/message/send',{message:this.message,conversation_id:this.$store.state.view.bar.data['chat'].id,receiver_id:this.participant.id}).then(res=>{this.$store.commit('view/pushMessage',res);this.message = null})
      },
      sender(id){
        return this.$store.state.view.bar.data['chat'].participants[0].id==id ? this.$store.state.view.bar.data['chat'].participants[0] : this.$store.state.view.bar.data['chat'].participants[1]
      }
    },
}
</script>

<style>

</style>