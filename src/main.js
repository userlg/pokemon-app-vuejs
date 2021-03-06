import { createApp } from 'vue'
import App from './App.vue'

import VueAxios from 'vue-axios'
import axios from 'axios'
import router  from './routes'


import { createPinia } from 'pinia';

const app = createApp(App)
app.use(createPinia())
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios) 
app.use(router)
app.mount('#app')



