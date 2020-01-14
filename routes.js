import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes:
        [
            {
                path: '/',
                component: Vue.component('login', () => import('./components/Pages/Login.vue')),
                name: 'login',
                meta: {
                    requiresAuth: false
                }
            },
            {
                path: '/dashboard',
                component: Vue.component('dashboard', () => import('./components/Pages/Dashboard.vue')),
                name: 'dashboard',
                meta: {
                    requiresAuth: false
                }
            },
            {
                path: '/forms',
                component: Vue.component('forms', () => import('./components/Pages/Forms.vue')),
                name: 'forms',
                meta: {
                    requiresAuth: false
                }
            },
            {
                path: '/form-builder',
                component: Vue.component('form-builder', () => import('./components/Pages/FormBuilder.vue')),
                name: 'form-builder',
                meta: {
                    requiresAuth: false
                }
            },
        ],
    base: '/',
});
