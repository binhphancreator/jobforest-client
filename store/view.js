export const state = () => ({
    bar:{
        name:null,
        data:{
            'project-info':null,
            'chat':null,
            'messenger':null,
        },
    },
    sidebar:true,
})

export const mutations = {
    setBar(state,bar){
        state.bar.name = bar.name
        state.bar.data[bar.name] = bar.data
    },
    toggleSidebar(state){
        state.sidebar = !state.sidebar
    },
    closeBar(state){
        state.bar.name = null
    },
    openBar(state,name){
        state.bar.name = name
    },
    pushMessage(state,message){
        state.bar.data.chat.messages.data.push(message)
        state.bar.name = 'chat'
    }
}

export const actions = {
    async receiveMessage({ state,commit,dispatch },message){
        if(!state.bar.data.chat || state.bar.data.chat.id!=message.conversation_id) dispatch('createConversation',message.sender_id)
        else commit('pushMessage',message)
    },
    async createConversation({commit},id){
        var conversation = await this.$axios.$post('api/conversation/create',{id:id})
        var messages = await this.$axios.$get(`api/message?id=${conversation.id}`)
        messages.data.reverse()
        conversation.messages = messages
        commit('setBar',{name:'chat',data:conversation})
    }
}