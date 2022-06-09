import { createRouter, createWebHashHistory } from 'vue-router'


import home from '../components/home.vue';

import list from '../components/list.vue';

import picker from '../components/picker.vue';

import about from '../components/about.vue';

import search from '../components/search.vue'

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
        path: '/picker/:id',
        component: picker,
        name: 'picker'
    },
    {
        path: '/about/:id',
        component: about,
        name: 'about'
    },
    {
        path: '/search',
        component: search,
        name: 'search'
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
   