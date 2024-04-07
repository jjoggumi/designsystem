import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router.js'
import '@/styles/css/reboot.css'
import '@/styles/scss/common.scss'
import '@/styles/scss/layout.scss'
import store from '@/store/store'

let app = createApp(App);
app.use(store)
app.use(router)
app.mount('#app')