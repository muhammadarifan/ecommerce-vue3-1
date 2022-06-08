<script setup lang="ts">
  import HeroVue from '@/components/Hero.vue';
  import AboutVue from '@/components/About.vue';
  import GalleryVue from '@/components/Gallery.vue';
  import ContactVue from '@/components/Contact.vue';
  import FooterVue from '@/components/Footer.vue';
</script>

<template>
  <main>
    <HeroVue/>
    <AboutVue/>
    <GalleryVue :is-home="true"/>
    <ContactVue/>
    <FooterVue/>
  </main>
</template>
