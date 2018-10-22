import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios);
 
//import HelloWorld from '@/components/HelloWorld'
//import home from '../components/home.vue';
import listMail from '../components/listMail.vue';
import listTickets from '../components/listTickets.vue';
import login from '../components/login.vue';

Vue.use(Router)

export default new Router({
  routes: [
  	 {
        name: 'login',
        path: '/',
        component: login
    },
    {
        name: 'listMail',
        path: '/list-mail',
        component: listMail
    },
    {
        name: 'listTickets',
        path: '/list-tickets',
        component: listTickets
    },
  ]
})
