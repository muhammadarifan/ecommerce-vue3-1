<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { MenuIcon, XIcon } from '@heroicons/vue/solid'

const currentRoute = computed(() => {
    return useRoute().name
});

const menuIconState: Ref<Boolean> = ref(false);
</script>

<template>
    <nav class="px-4 py-4 bg-white border-gray-200 rounded md:px-2 sm:px-4 dark:bg-gray-800">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://flowbite.com" class="flex items-center">
                <img src="@/assets/dafara/logo1_nobg.png" class="h-6 mr-3 sm:h-9" alt="Dafara Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Dafara Clothing</span>
            </a>
            <button type="button" class="md:hidden" @click="menuIconState = !menuIconState">
                <Transition name="popover" mode="out-in">
                    <div v-if="!menuIconState">
                        <MenuIcon class="w-6 h-6 text-gray-600 dark:text-white" />
                    </div>
                    <div v-else>
                        <XIcon class="w-6 h-6 text-gray-600 dark:text-white" />
                    </div>
                </Transition>
            </button>

            <Transition name="popover" mode="out-in">
                <div v-if="menuIconState == true" class="absolute right-0 w-full px-1 pt-2 top-16">
                    <ul class="flex flex-col py-4 pl-4 pr-6 bg-white rounded-lg">
                        <li class="w-full">
                            <router-link to="/" class="flex gap-1 group" @click="menuIconState = !menuIconState">
                                <div :class="((currentRoute == 'home') ? 'visible' : 'invisible')"
                                    class="w-2 h-2 rounded-full group-hover:visible bg-green-logo"></div>
                                <a href="#"
                                    class="block w-full py-2 pl-3 pr-4 text-lg text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-logo md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/about" class="flex gap-1 group" @click="menuIconState = !menuIconState">
                                <div :class="((currentRoute == 'about') ? 'visible' : 'invisible')"
                                    class="w-2 h-2 rounded-full group-hover:visible bg-green-logo"></div>
                                <a href="#"
                                    class="block w-full py-2 pl-3 pr-4 text-lg text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-logo md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/product" class="flex gap-1 group" @click="menuIconState = !menuIconState">
                                <div :class="((currentRoute == 'product') ? 'visible' : 'invisible')"
                                    class="w-2 h-2 rounded-full group-hover:visible bg-green-logo"></div>
                                <a href="#"
                                    class="block w-full py-2 pl-3 pr-4 text-lg text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-logo md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Product</a>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/contact" class="flex gap-1 group" @click="menuIconState = !menuIconState">
                                <div :class="((currentRoute == 'contact') ? 'visible' : 'invisible')"
                                    class="w-2 h-2 rounded-full group-hover:visible bg-green-logo"></div>
                                <a href="#"
                                    class="block w-full py-2 pl-3 pr-4 text-lg text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-logo md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </Transition>
            <div class="hidden w-full md:block md:w-auto">
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <router-link to="/" class="flex gap-1 group">
                            <div :class="((currentRoute == 'home') ? 'visible' : 'invisible')"
                                class="w-2 h-2 rounded-full group-hover:visible bg-green-logo"></div>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 text-lg text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-logo md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about" class="flex gap-1 group">
                            <div :class="((currentRoute == 'about') ? 'visible' : 'invisible')"
                                class="w-2 h-2 rounded-full group-hover:visible bg-green-logo"></div>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 text-lg text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-logo md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/product" class="flex gap-1 group">
                            <div :class="((currentRoute == 'product') ? 'visible' : 'invisible')"
                                class="w-2 h-2 rounded-full group-hover:visible bg-green-logo"></div>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 text-lg text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-logo md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Product</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/contact" class="flex gap-1 group">
                            <div :class="((currentRoute == 'contact') ? 'visible' : 'invisible')"
                                class="w-2 h-2 rounded-full group-hover:visible bg-green-logo"></div>
                            <a href="#"
                                class="block py-2 pl-3 pr-4 text-lg text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-logo md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>