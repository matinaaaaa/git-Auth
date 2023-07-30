<template>
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-4">
                <div v-if="errors.length > 0 " class=" alert alert-danger" role="alert">
                     <ul class="mb-0">
                        <li v-for="(error , index) in errors" :key="index">{{ error }}</li>
                     </ul>
                </div>
                <form @submit.prevent="Register">
                    <div class="mb-3">
                        <label htmlFor="name" class="form-label">Name</label>
                        <input v-model="formData.name" type="text" class="form-control" id="name" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="email" class="form-label">Email address</label>
                        <input v-model="formData.email" type="text" class="form-control" id="email" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="password" class="form-label">Password</label>
                        <input v-model="formData.password" type="password" class="form-control" id="password" />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="c_password" class="form-label">Confirm Password</label>
                        <input v-model="formData.c_password" type="password" class="form-control" id="c_password" />
                    </div>
                    <button class="btn btn-primary">
                        Register
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
const toast = useToast()
const {authuser} = useAuth()
const errors = ref([]);
const formData = reactive({
    name:"",
    email:"",
    password:"",
    c_password:"",
});
async function Register(){
   
    try{
        const user = await $fetch('/api/auth/register',{
            method : 'POST',
            body : formData
        })
        authuser.value = user
        toast.success(" اطلاعات شما با موفقیت ثبت شد");
        console.log(user)
        return navigateTo('/')
    }catch(error){

       errors.value = Object.values(error.data.data).flat()
       console.log(Object.values(error.data.data).flat() , 'client error')
       
       formData.name = ''
       formData.email = ''
       formData.password = ''
       formData.c_password = ''
    }
}


</script>