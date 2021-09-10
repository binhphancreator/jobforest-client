export default ({ app }, inject) => {
    inject('logout', async function(){
        await app.$echo.leave(`chat.${app.$auth.user.id}`)
        await app.$auth.logout()
        if(app.context.route.path == '/') window.location.reload()
    })
}