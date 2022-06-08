<script setup lang="ts">
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

import Post1 from '@/assets/dafara/post1.jpeg';
import Post2 from '@/assets/dafara/post2.jpeg';
import Post3 from '@/assets/dafara/post3.jpeg';
import Post4 from '@/assets/dafara/post4.jpeg';
import Post5 from '@/assets/dafara/post5.jpeg';
import Post6 from '@/assets/dafara/post6.jpeg';
import Post7 from '@/assets/dafara/post7.jpeg';
import Post8 from '@/assets/dafara/post8.jpeg';
import Post9 from '@/assets/dafara/post9.jpeg';
import Post10 from '@/assets/dafara/post10.jpeg';
import Post11 from '@/assets/dafara/post11.jpeg';
import Post12 from '@/assets/dafara/post12.jpeg';
import Post13 from '@/assets/dafara/post13.jpeg';
import Post14 from '@/assets/dafara/post14.jpeg';

const props = defineProps({
    isHome: {
        type: Boolean,
        default: true,
    }
})

const productHome = [
    {
        id: 1,
        name: 'Piyama Lengan Pendek Polos',
        href: '#',
        price: 'Rp. 64.500',
        imageSrc: Post1,
        imageAlt: 'Gambar Piyama Lengan Pendek Polos',
    },
    {
        id: 2,
        name: 'Piyama Celana Panjang Polos',
        href: '#',
        price: 'Rp. 72.000',
        imageSrc: Post2,
        imageAlt: 'Gambar Piyama Celama Panjang Polos',
    },
    {
        id: 3,
        name: 'Piyama Baju Celana Panjang',
        href: '#',
        price: 'Rp. 75.000',
        imageSrc: Post3,
        imageAlt: 'Gambar Piyama Baju Celana Panjang',
    },
    {
        id: 4,
        name: 'Piyama Lengan Pendek Emboss',
        href: '#',
        price: 'Rp. 64.000',
        imageSrc: Post4,
        imageAlt: 'Gambar Piyama Lengan Pendek Emboss',
    },
    {
        id: 5,
        name: 'Piyama Celana Panjang Polos',
        href: '#',
        price: 'Rp. 72.000',
        imageSrc: Post5,
        imageAlt: 'Gambar Piyama Celana Panjang Polos',
    },
    {
        id: 6,
        name: 'Piyama Celana 7/8',
        href: '#',
        price: 'Rp. 72.000',
        imageSrc: Post6,
        imageAlt: 'Gambar Piyama Celana 7/8',
    },
    {
        id: 7,
        name: 'Shirt Crop',
        href: '#',
        price: 'Rp. 105.000',
        imageSrc: Post7,
        imageAlt: 'Gambar Shirt Crop',
    },
    {
        id: 8,
        name: 'Piyama Panjang Motif',
        href: '#',
        price: 'Rp. 60.000',
        imageSrc: Post8,
        imageAlt: 'Gambar Piyama Panjang Motif',
    },
];

const productProduct = [
    {
        id: 1,
        name: 'Piyama Lengan Pendek Polos',
        href: '#',
        price: 'Rp. 64.500',
        imageSrc: Post1,
        imageAlt: 'Gambar Piyama Lengan Pendek Polos',
    },
    {
        id: 2,
        name: 'Piyama Celana Panjang Polos',
        href: '#',
        price: 'Rp. 72.000',
        imageSrc: Post2,
        imageAlt: 'Gambar Piyama Celama Panjang Polos',
    },
    {
        id: 3,
        name: 'Piyama Baju Celana Panjang',
        href: '#',
        price: 'Rp. 75.000',
        imageSrc: Post3,
        imageAlt: 'Gambar Piyama Baju Celana Panjang',
    },
    {
        id: 4,
        name: 'Piyama Lengan Pendek Emboss',
        href: '#',
        price: 'Rp. 64.000',
        imageSrc: Post4,
        imageAlt: 'Gambar Piyama Lengan Pendek Emboss',
    },
    {
        id: 5,
        name: 'Piyama Celana Panjang Polos',
        href: '#',
        price: 'Rp. 72.000',
        imageSrc: Post5,
        imageAlt: 'Gambar Piyama Celana Panjang Polos',
    },
    {
        id: 6,
        name: 'Piyama Celana 7/8',
        href: '#',
        price: 'Rp. 72.000',
        imageSrc: Post6,
        imageAlt: 'Gambar Piyama Celana 7/8',
    },
    {
        id: 7,
        name: 'Shirt Crop',
        href: '#',
        price: 'Rp. 105.000',
        imageSrc: Post7,
        imageAlt: 'Gambar Shirt Crop',
    },
    {
        id: 8,
        name: 'Piyama Panjang Motif',
        href: '#',
        price: 'Rp. 60.000',
        imageSrc: Post8,
        imageAlt: 'Gambar Piyama Panjang Motif',
    },
    {
        id: 9,
        name: 'Kinda Top Rip',
        href: '#',
        price: 'Rp. 116.000',
        imageSrc: Post9,
        imageAlt: 'Gambar Kinda Top Rip',
    },
    {
        id: 10,
        name: 'Kinda Top Rip',
        href: '#',
        price: 'Rp. 116.000',
        imageSrc: Post10,
        imageAlt: 'Gambar Kinda Top Rip',
    },
    {
        id: 11,
        name: 'Plaid Top Rip',
        href: '#',
        price: 'Rp. 120.000',
        imageSrc: Post11,
        imageAlt: 'Gambar Kinda Top Rip',
    },
    {
        id: 12,
        name: 'Shirt Crop',
        href: '#',
        price: 'Rp. 105.000',
        imageSrc: Post12,
        imageAlt: 'Gambar Shirt Crop',
    },
    {
        id: 13,
        name: 'Plaid Top',
        href: '#',
        price: 'Rp. 120.000',
        imageSrc: Post13,
        imageAlt: 'Gambar Plaid Top',
    },
    {
        id: 14,
        name: 'Piyama Panjang Motif',
        href: '#',
        price: 'Rp. 60.000',
        imageSrc: Post14,
        imageAlt: 'Gambar Piyama Panjang Motif',
    },
];

let products = productHome;

if (props.isHome) {
    products = productHome;
} else {
    products = productProduct;
}

</script>

<template>
    <div class="max-w-2xl px-12 py-3 mx-auto md:py-6 sm:px-6 lg:max-w-7xl lg:px-8 md:px-4">
        <h2 class="text-4xl font-bold text-center">Products</h2>

        <div class="grid grid-cols-1 mt-16 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a v-for="product in products" :key="product.id" :href="product.href" class="group">
                <div
                    class="w-full overflow-hidden bg-gray-200 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
                    <img :src="product.imageSrc" :alt="product.imageAlt"
                        class="object-cover object-center w-full h-full transition group-hover:opacity-75" />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">
                    {{ product.name }}
                </h3>
                <div class="flex items-center justify-between">
                    <p class="mt-1 text-lg font-medium text-gray-900">
                        {{ product.price }}
                    </p>
                    <a :href="'https://wa.me/085656566338?text=Hai Dafara Clothing, Saya ingin memesan ' + product.name + ', apakah barangnya tersedia ? Terimakasih'" class="flex items-center justify-center gap-1 p-2 text-sm text-white bg-green-400 rounded-xl fill-white hover:bg-green-600 ring-green-600 ring-0 ring-offset-2 focus:ring-2" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 h-6">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        Pesan
                    </a>
                </div>
            </a>
        </div>

        <div v-if="isHome" class="flex justify-center mt-10">
            <router-link to="/product">
                <a class="flex items-center justify-center px-8 py-3 mt-3 text-base font-medium transition-all rounded-lg ring-2 ring-offset-2 ring-green-logo md:py-2 md:text-lg md:px-10 hover:bg-green-logo focus:bg-green-logo1 hover:text-white">
                    Lihat Semua
                </a>
            </router-link>
        </div>
    </div>
</template>