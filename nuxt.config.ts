// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig:{
       public:{
        apiBase :'http://127.0.0.1:8000/',
       }
    },
    css: ['~/assets/css/main.css'],
    

})
