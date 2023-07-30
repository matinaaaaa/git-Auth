<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-4">
                <div v-if="errors.length > 0 " class=" alert alert-danger" role="alert">
                     <ul class="mb-0">
                        <li v-for="(error , index) in errors" :key="index">{{ error }}</li>
                     </ul>
                </div>
                <form @submit.prevent="login">
               
                    <div class="mb-3">
                        <label htmlFor="email" class="form-label">Email address</label>
                        <input v-model="formData.email" type="text" class="form-control" id="email" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="password" class="form-label">Password</label>
                        <input v-model="formData.password" type="password" class="form-control" id="password" />
                    </div>
                    <button class="btn btn-primary">
                        Register
                        <!-- <div v-if="loading" class="spinner-border spinner-border-sm sm-2"></div> -->
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
    middleware :'guest'
})
import {useToast} from "vue-toastification";
const {authuser} = useAuth()
const toast = useToast()
const errors = ref([]);
const formData = reactive({
    email:"",
    password:"",

});
async function login(){
    console.log(formData)
    try{
      
        const user = await $fetch('/api/auth/login',{
            method : 'POST',
            body : formData
        })
        authuser.value = user
        toast.success("با موفقیت  وارد شدید");
        return navigateTo('/')
    }catch(error){
       errors.value = Object.values(error.data.data).flat()
    //    console.log(Object.values(error.data.data).flat() , 'client error')
       formData.email = ''
       formData.password = ''
    
    }
}

</script>