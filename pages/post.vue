<template>
    <div class="container mt-5">
       <div class="row gy-4">
           <div v-for="post in posts" :key="post.id" class="col-md-4">
            <div class="card">
                <div class="card-header">
                       {{ post.title }}
                </div>
                <div class="card-body">
                    {{ post.body }}
                </div>
            </div>
           </div>  
       </div>
    </div>
</template>
<script setup>
//  const headers = useRequestHeaders(['cookie'])
const {data:posts , error} = await useFetch('https://jsonplaceholder.typicode.com/posts')
console.log(posts , error )
</script>