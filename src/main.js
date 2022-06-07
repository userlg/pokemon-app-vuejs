import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue from '../node_modules/bootstrap-vue/';
//import 'bootstrap-vue/dist/bootstrap-vue.css';
//import 'bootstrap/dist/css/bootstrap.css';

createApp(App)
.use(BootstrapVue)
.mount('#app')
