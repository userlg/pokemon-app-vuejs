import { createApp } from 'vue'
import App from './App.vue'
import Paginate from 'vuejs-paginate'
import VueAxios from 'vue-axios'
import axios from 'axios'
import router  from './routes'

const app = createApp(App)
app.use(VueAxios, axios)
app.component('paginate', Paginate)
app.provide('axios', app.config.globalProperties.axios) 
app.use(router)
app.mount('#app')



