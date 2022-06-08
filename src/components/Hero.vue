<script setup lang="js">
</script>

<template>
    <div class="hidden h-screen bg-green-logo md:flex">
        <div class="flex flex-col items-center justify-center w-full md:w-1/2">
            <h1 class="text-4xl font-bold text-center text-white">WELCOME TO DAFARA CLOTHINGS</h1>
            <h2 class="mt-3 text-lg text-center text-white">Pusat belanja fashion kekinian dengan style baru</h2>
        </div>
        <div class="hidden w-1/2 h-screen md:block">
            <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1570857502809-08184874388e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="image-hero">
        </div>
    </div>
    <div class="flex h-full bg-cover bg-[url('https://images.unsplash.com/photo-1570857502809-08184874388e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2hvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')] md:hidden">
        <div class="flex flex-col items-center justify-end w-full px-12 from-green-logo/80 to-green-logo/0 bg-gradient-to-t md:w-1/2">
            <h1 class="mb-3 text-3xl font-bold text-center text-white mt-60">WELCOME TO DAFARA CLOTHINGS</h1>
            <h2 class="mb-6 text-base text-center text-white">Pusat belanja fashion kekinian dengan style baru</h2>
        </div>
    </div>
</template>