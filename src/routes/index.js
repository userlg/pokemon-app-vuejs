import { createRouter, createWebHashHistory } from 'vue-router'


import home from '../components/home.vue';

import list from '../components/list.vue';

import picker from '../components/picker.vue'

import about from '../components/about.vue'

const routes = [
    {
        path: '/',
        component: home,
        name:'home'
    },
    {
        path: '/list',
        component: list,
        name: 'list'
    },
    {
        path: '/picker/:slug',
        component: picker,
        name: 'picker'
    },
    {
        path: '/about',
        component: about,
        name: 'about'
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
   