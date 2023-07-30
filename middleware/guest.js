export default defineNuxtRouteMiddleware(()=>{
    const {authuser} = useAuth()

    if(authuser.value){
       return navigateTo('/')
    }
})