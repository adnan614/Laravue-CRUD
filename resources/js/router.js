import Vue from 'vue';

import VueRouter from 'vue-router';
import content from './components/Content.vue';
import categories from './components/Category.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: content
    },
    {
        path: '/categories',
        component: categories
    }

];

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
    
})

export default router;