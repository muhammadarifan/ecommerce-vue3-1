import { useFetch } from '@vueuse/core';
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue';

interface apiPostCustomerMessageData {
    status: string;
    message: string;
    elapsed_time: number;
    errors?: any;
    data: null;
}

interface apiPostCustomerMessageBody {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export const useCustomerMessageStore = defineStore('customer_message', () => {
    const loadingNetworkCustomerMessage: Ref<boolean> = ref(false);
    const responseNetworkCustomerMessage: Ref<apiPostCustomerMessageData|null> = ref(null);
    const throwableNetworkCustomerMessage: Ref<string> = ref("");

    const postCustomerMessage = async (body: apiPostCustomerMessageBody) => {
        loadingNetworkCustomerMessage.value = true
        
        const baseURL = import.meta.env.VITE_ECOMMERCE_BASE_API_URL;
        const { error, data } = await useFetch<apiPostCustomerMessageData>(baseURL + '/customer-message').post({
            name: body.name,
            email: body.email,
            phone: body.phone,
            message: body.message
        }).json();

        if (error) {
            throwableNetworkCustomerMessage.value = error.toString();
        } else {
            throwableNetworkCustomerMessage.value = '';
        }

        if (data) {
            responseNetworkCustomerMessage.value = data.value;
            if (data.value?.status == 'error') {
                throwableNetworkCustomerMessage.value = data.value.message;
            } else {
                throwableNetworkCustomerMessage.value = '';
            }
        }

        loadingNetworkCustomerMessage.value = false;

        console.log(loadingNetworkCustomerMessage.value, responseNetworkCustomerMessage.value, throwableNetworkCustomerMessage.value);
        
    }

    return {
        loadingNetworkCustomerMessage,
        responseNetworkCustomerMessage,
        throwableNetworkCustomerMessage,
        postCustomerMessage
    }
})

