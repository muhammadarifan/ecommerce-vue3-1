import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './css/tailwind.css'
import './css/transition.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

declare module "@vue/runtime-dom" {
    interface IframeHTMLAttributes extends HTMLAttributes {
        loading?: "lazy" | "eager" | "auto";
    }
}
