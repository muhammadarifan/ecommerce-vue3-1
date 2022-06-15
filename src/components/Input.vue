<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
    class: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        default: 'text',
    },
    placeholder: {
        type: String,
        default: '',
    },
    autocomplete: {
        type: String,
        default: '',
    },
    isRequired: {
        type: Boolean,
        default: false,
    },
});

defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
</script>

<template>
    <div class="flex flex-col">
        <input
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :type="props.type" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        :class="props.class" 
        :placeholder="props.placeholder" 
        :autocomplete="props.autocomplete"
        :required="isRequired ? true : false">
    </div>
</template>