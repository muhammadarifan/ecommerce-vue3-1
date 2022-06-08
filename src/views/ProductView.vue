<script setup lang="ts">
  import GalleryVue from '@/components/Gallery.vue';
  import FooterVue from '@/components/Footer.vue';
</script>

<template>
  <main>
    <GalleryVue :is-home="false"/>
    <FooterVue/>
  </main>
</template>
