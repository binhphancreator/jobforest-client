import Echo from 'laravel-echo'

window.Pusher = require('pusher-js')

export default ({ app }, inject) => {
    var echo = new Echo({
        broadcaster: "pusher",
        key: '6a0c1d3cca2fe88caea7',
        wsHost: "149.28.129.121",
        wsPort: 6001,
        forceTLS: false,
        disableStats: false,
        authorizer: (channel, options) => {
            return {
                authorize: (socketId, callback) => {
                    app.$axios.$post('/api/broadcasting/auth', {
                        socket_id: socketId,
                        channel_name: channel.name
                    })
                    .then(response => {
                        callback(false, response);
                    })
                    .catch(error => {
                        callback(true, error);
                    });
                }
            };
        },
    })
    if(app.store.state.auth.loggedIn) echo.private(`chat.${app.store.state.auth.user.id}`).listen('.send.message',message=>app.store.dispatch('view/receiveMessage',message))
    inject('echo', echo)
}