<template>
    <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
        <div class="container">
            <NuxtLink class="navbar-brand" to="/">Dragon.io</NuxtLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <NuxtLink class="nav-link" activeClass="active" to="/">Home</NuxtLink>
                    </li>

                    <li class="nav-item">
                        <NuxtLink class="nav-link" activeClass="active" to="/post">posts</NuxtLink>

                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                   <div class="d-flex" v-if="authuser">
                        <li class="nav-item">
                            <NuxtLink class="nav-link" activeClass="active" to="/profile">Profile</NuxtLink>
                        </li>
                            <li class="nav-item">
                        <a class="nav-link" @click="logout" href="#">Logout</a>
                        </li>
                   </div>
                   <div class="d-flex" v-else>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" activeClass="active" to="/auth/register">Register</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" activeClass="active" to="/auth/login">login</NuxtLink>

                    </li>
                  </div>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
   import {useToast} from "vue-toastification";
   const {authuser} = useAuth()
   const toast = useToast()
   async function logout(){
       const headers = useRequestHeaders(['cookie'])
       await useFetch('/api/auth/logout',{
            method:'POST',
            headers
        })
        authuser.value = null;
        toast.warning("از حساب خود خارج شدید ");

   }
</script>