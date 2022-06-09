import { createApp } from 'vue'
import App from './App.vue'

import VueAxios from 'vue-axios'
import axios from 'axios'
import router  from './routes'

import Pagination from 'v-pagination-3';


const app = createApp(App)
app.component('pagination', Pagination);
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios) 
app.use(router)
app.mount('#app')



