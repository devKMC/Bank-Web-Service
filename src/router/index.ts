import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Account from '../components/Account.vue'; 
import Signup from '../components/Signup.vue';
import Home from '../pages/Home.vue'; // 홈 페이지 임포트
import Layout from '../pages/layout.vue';

const routes = [
    {
        path: '/',
        name: 'Home', 
        component: Home, 
    },
    {
        path: '/layout',
        name: 'layout',
        component: Layout,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/signup', 
        name: 'Signup',
        component: Signup, 
    },
    {
        path: '/accounts',
        name: 'Account',
        component: Account,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
