import { createRouter, createWebHistory } from 'vue-router'


import home from '../components/home.vue';

import list from '../components/list.vue';

const routes = createRouter([
    {
        path: '/',
        component: home
    },
    {
        path: '/list',
        component: list
    }

]);

const router = {
    history: createWebHistory,
    routes
}

export default router;