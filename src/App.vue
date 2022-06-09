<script setup lang="ts">
  import NavbarVue from '@/components/Navbar.vue';
  import { useHead } from '@vueuse/head';
  import logo1NoBg from '@/assets/dafara/logo1_nobg.png';

  useHead({
    link: [
      { rel: 'icon', href: logo1NoBg },
    ],
    title: 'Dafara Clothings',
    meta: [
      {
        name: 'description',
        content: 'Ini adalah halaman web dari dafara clothings',
      },
    ],
  });
</script>

<template>
  <header>
    <NavbarVue/>
  </header>
  <RouterView />
</template>

<style>
</style>
