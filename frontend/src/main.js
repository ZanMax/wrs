import Vue from 'vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueRouter from 'vue-router'
import router from '@/router/index'
import axios from 'axios'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import titleMixin from './mixins/titleMixin'
import store from './store'

// DEV
const baseURL = 'http://localhost:8000/api';

// PROD
// const baseURL = 'https://wrs.domain.com/api';

axios.defaults.baseURL = baseURL;

Vue.config.productionTip = false

const token = localStorage.getItem('token')
if (token) {
    axios.defaults.headers.common['Authorization'] = token
}

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.mixin(titleMixin)
Vue.use(require('vue-moment'))

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
