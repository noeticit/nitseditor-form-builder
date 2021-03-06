/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import VueRouter from 'vue-router';
import {router} from "./routes";
import layout from './components/Layout';

window.Vue = require('vue');

Vue.use(VueRouter);

/**
 * Middleware to check authentication
 */

// router.beforeEach((to, from, next) => {
//     if(to.meta.requiresAuth && auth.isLoggedIn())
//         next()
//     if(!to.meta.requiresAuth && auth.isLoggedIn())
//         next()
//     if(to.meta.requiresAuth && !auth.isLoggedIn())
//         next({path: '/'})
//     if(!to.meta.requiresAuth && !auth.isLoggedIn())
//         next()
// })

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router: router,
    render:h=>h(layout)
});