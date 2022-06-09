<script setup lang="ts">
  import NavbarVue from '@/components/Navbar.vue';
  import { useHead } from '@vueuse/head';

  useHead({
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
