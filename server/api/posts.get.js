// export default defineEventHandler(async(event)=>{
//     const {public : {apiBase}} = useRuntimeConfig()
  
//     const token = getCookie(event , 'token');
   
//     try {
//         const posts = await $fetch(`${apiBase}api/posts`, {   
//             headers: {
//                 'Accept': 'application/json',
//                 'Authorizaition' : `Bearer ${token}`
//             }
//         })
//         console.log(posts)
//         return posts
//     } catch (error) {
        
//        return error
//     }
// })

