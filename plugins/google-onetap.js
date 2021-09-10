export default ({ app }, inject) => {
    inject('onetap', function(callback){
        if(!app.$auth.loggedIn)
        window.onload = function () {
            google.accounts.id.initialize({
                client_id: '753794211908-ug57a18l14sge0484ahophh5ulobrbdn.apps.googleusercontent.com',
                callback: callback,
                cancel_on_tap_outside:false
            });
            google.accounts.id.prompt();
        }
    })
}