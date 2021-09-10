export default async function({$auth,route,$axios,redirect,error}){
    if(!$auth.loggedIn) return
    var slug = route.params.slug
    try{var project = await $axios.$get(`api/project/${slug}`)} catch{return error({statusCode:404,message:'Error 404'})}

    if($auth.user.id === project.user_id) redirect(`/user/project/${project.slug}`)
}