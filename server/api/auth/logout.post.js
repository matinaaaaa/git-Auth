export default defineEventHandler(async(event)=>{
    const {public : {apiBase}} = useRuntimeConfig()
    // console.log(parseCookies(event))
    const token = getCookie(event , 'token');
    
    try {
        const data = await $fetch(`${apiBase}api/logout`, {
            method: 'POST',
           
            headers: {
                'Accept': 'application/json',
                'Authorizaition' : `Bearer ${token}`
            }
        })
        setCookie(event , 'token' , '' , {
            httpOnly:true,
            secure:true,
            maxAge: new Date(0), // 1 week
            path:'/'
        })
      
        return data;
    } catch (error) {
        return error
    }
})

