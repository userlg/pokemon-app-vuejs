import { createApp } from 'vue'
import App from './App.vue'
import VuePaginate from 'vue-paginate'
import VueAxios from 'vue-axios'
import axios from 'axios'
import router  from './routes'


const app = createApp(App)
app.use(VueAxios, axios)
app.use(VuePaginate)
app.provide('axios', app.config.globalProperties.axios) 
app.use(router)
app.mount('#app')



