
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue';
import moment from 'moment';
import VueProgressBar from 'vue-progressbar';
import { Form, HasError, AlertError } from 'vform';

//window.form = Form
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

import VueRouter from 'vue-router';
import DashboardTemplate from './components/Dashboard.vue';
import ProfileTemplate from './components/Profile.vue';
import UsersTemplate from './components/Users.vue';

Vue.use(VueRouter)

const options = {
    color: '#bffaf3',
    failedColor: '#874b4b',
    thickness: '5px',
    transition: {
      speed: '0.2s',
      opacity: '0.6s',
      termination: 300
    },
    autoRevert: true,
    location: 'left',
    inverse: false
}

Vue.use(VueProgressBar, options)


let routes = [
    { path: '/dashboard', component: DashboardTemplate },
    { path: '/users', component: UsersTemplate },
    { path: '/profile', component: ProfileTemplate }
]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
})

Vue.filter('upText', (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
})

Vue.filter('myDate', (created) => {
    return moment(created).format('MMMM Do YYYY')
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router,
});
