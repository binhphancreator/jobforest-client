export default ({ app }, inject) => {
    inject('login', function(data){
        app.$auth.loginWith('laravelSanctum',{data:data}).then(res=>{
            app.$echo.private(`chat.${this.$store.state.auth.user.id}`).listen('.send.message',message=>app.$store.dispatch('view/receiveMessage',message))
            if(app.context.route.path == '/') window.location.reload()
        })
    })
}