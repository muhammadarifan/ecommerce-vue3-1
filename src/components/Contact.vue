<script setup lang="ts">
import { useCustomerMessageStore } from '@/stores/customer_message';
import { computed } from '@vue/reactivity';
import { ref, watch, type Ref } from 'vue';
import InputVue from './Input.vue';
import TextareaVue from './Textarea.vue';
import { ThumbUpIcon, ExclamationCircleIcon } from '@heroicons/vue/solid';


const gmapApiKey = import.meta.env.VITE_GMAP_API_KEY;

const customerMessageStore = useCustomerMessageStore();

const name: Ref<string> = ref('');
const email: Ref<string> = ref('');
const phone: Ref<string> = ref('');
const message: Ref<string> = ref('');

const successModalState = ref(false);
const errorModalState = ref(false);

const loadingNetworkCustomerMessage = computed(() => {
    return customerMessageStore.loadingNetworkCustomerMessage;
});

const responseNetworkCustomerMessage = computed(() => {
    return customerMessageStore.responseNetworkCustomerMessage;
});
const throwableNetworkCustomerMessage = computed(() => {
    return customerMessageStore.throwableNetworkCustomerMessage;
});

watch(responseNetworkCustomerMessage, (value) => {
    if (value?.status == 'success') {
        setTimeout(() => {
            successModalState.value = true;
        }, 500);
        setTimeout(() => {
            successModalState.value = false
            resetModel()
        }, 2000);
    }
});

watch(throwableNetworkCustomerMessage, (value) => {
    if (value != '') {
        setTimeout(() => {
            errorModalState.value = true
        }, 500);
        setTimeout(() => {
            errorModalState.value = false
        }, 2000);
    }
});

const storeCustomerMessage = (e: Event) => {
    if (name.value == '' || email.value == '' || phone.value === '' || message.value === '') {
        return;
    }

    const customerMessage = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
    };

    customerMessageStore.postCustomerMessage(customerMessage);
}

const resetModel = () => {
    name.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';
}

</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-col my-12 md:flex-row">
            <div class="hidden w-1/2 h-screen bg-blue-100 md:block">
                <iframe class="w-full h-full" width="600" height="450" style="border:0" loading="lazy" allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    :src="'https://www.google.com/maps/embed/v1/place?key=' + gmapApiKey + '&q=Dafara Clothing blitar'">
                </iframe>
            </div>
            <div class="flex flex-col items-center justify-center w-full p-12 md:w-1/2">
                <h1 class="text-4xl font-bold text-center">Contact Us</h1>
                <form class="w-full mt-12" @submit.prevent="storeCustomerMessage">
                    <InputVue type="text" class="mt-3" placeholder="Name" autocomplete="name" v-model="name"
                        :is-required="true" />
                    <InputVue type="email" class="mt-3" placeholder="Email" autocomplete="email" v-model="email"
                        :is-required="true" />
                    <InputVue type="tel" class="mt-3" placeholder="Phone Number" autocomplete="phone" v-model="phone"
                        :is-required="true" />
                    <TextareaVue class="mt-3" placeholder="Message" v-model="message" :is-required="true" />
                    <button type="submit"
                        class="flex items-center justify-center w-full px-8 py-3 mt-3 text-base font-medium text-white border border-transparent rounded-md bg-green-logo hover:bg-green-logo1 md:py-4 md:text-lg md:px-10 ring-offset-2 ring-green-logo1 focus:ring-4">Submit</button>
                </form>
            </div>
            <div class="block w-full px-12 md:hidden h-80">
                <iframe class="w-full h-full" width="600" height="450" style="border:0" loading="lazy" allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    :src="'https://www.google.com/maps/embed/v1/place?key=' + gmapApiKey + '&q=Dafara Clothing blitar'">
                </iframe>
            </div>
        </div>
        <Transition name="popover" mode="out-in">
            <div v-if="loadingNetworkCustomerMessage == true"
                class="fixed top-0 left-0 flex items-center justify-center w-full h-screen">
                <div class="absolute top-0 left-0 z-40 w-full h-screen bg-gray-800 opacity-50"></div>
                <div class="z-50 p-8 bg-white rounded-lg">
                    <div class="w-20 h-20 border-[10px] border-gray-400 rounded-full border-t-green-800 animate-spin">
                    </div>
                </div>
            </div>
        </Transition>
        <Transition name="popover" mode="out-in">
            <div v-if="successModalState == true"
                class="fixed top-0 left-0 flex items-center justify-center w-full h-screen">
                <div class="absolute top-0 left-0 z-40 w-full h-screen bg-gray-800 opacity-50"
                    @click="successModalState = false"></div>
                <div class="z-50 flex flex-col items-center justify-center p-8 bg-white rounded-lg">
                    <ThumbUpIcon class="w-16 h-16 text-green-800 animate-bounce"></ThumbUpIcon>
                    <p class="mt-5 text-gray-800">{{ responseNetworkCustomerMessage?.message }}</p>
                </div>
            </div>
        </Transition>
        <Transition name="popover" mode="out-in">
            <div v-if="errorModalState == true"
                class="fixed top-0 left-0 flex items-center justify-center w-full h-screen">
                <div class="absolute top-0 left-0 z-40 w-full h-screen bg-gray-800 opacity-50"
                    @click="errorModalState = false"></div>
                <div class="z-50 flex flex-col items-center justify-center p-8 bg-white rounded-lg">
                    <ExclamationCircleIcon class="w-16 h-16 text-red-800 animate-bounce"></ExclamationCircleIcon>
                    <p class="mt-5 text-gray-800">{{ throwableNetworkCustomerMessage }}</p>
                </div>
            </div>
        </Transition>
    </div>
</template>