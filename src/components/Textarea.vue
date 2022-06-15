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
    placeholder: {
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
        <textarea
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" 
        cols="30" 
        rows="10" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        :class="props.class" 
        :placeholder="props.placeholder"
        :required="isRequired ? true : false">
        </textarea>
    </div>
</template>