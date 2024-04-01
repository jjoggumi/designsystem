import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router.js'
import '@/styles/css/reboot.css'
import '@/styles/scss/common.scss'
import '@/styles/scss/layout.scss'

createApp(App).use(router).mount('#app')