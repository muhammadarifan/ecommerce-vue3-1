<script setup lang="ts">
import InputVue from './Input.vue';
import TextareaVue from './Textarea.vue';

const gmapApiKey = import.meta.env.VITE_GMAP_API_KEY;
</script>

<template>
    <div class="flex flex-col my-12 md:flex-row">
        <div class="hidden w-1/2 h-screen bg-blue-100 md:block">
            <iframe class="w-full h-full" width="600" height="450" style="border:0" loading="lazy" allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                :src="'https://www.google.com/maps/embed/v1/place?key=' + gmapApiKey + '&q=Dafara Clothing blitar'">
            </iframe>
        </div>
        <div class="flex flex-col items-center justify-center w-full p-12 md:w-1/2">
            <h1 class="text-4xl font-bold text-center">Contact Us</h1>
            <form action="" class="w-full mt-12">
                <InputVue type="text" class="mt-3" placeholder="Name" autocomplete="name" />
                <InputVue type="tel" class="mt-3" placeholder="Phone Number" autocomplete="phone" />
                <InputVue type="email" class="mt-3" placeholder="Email" autocomplete="email" />
                <TextareaVue class="mt-3" placeholder="Message" />
                <button type="button" class="flex items-center justify-center w-full px-8 py-3 mt-3 text-base font-medium text-white border border-transparent rounded-md bg-green-logo hover:bg-green-logo1 md:py-4 md:text-lg md:px-10 ring-offset-2 ring-green-logo1 focus:ring-4">Submit</button>
            </form>
        </div>
        <div class="block w-full px-12 md:hidden h-80">
            <iframe class="w-full h-full" width="600" height="450" style="border:0" loading="lazy" allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                :src="'https://www.google.com/maps/embed/v1/place?key=' + gmapApiKey + '&q=Dafara Clothing blitar'">
            </iframe>
        </div>
    </div>
</template>