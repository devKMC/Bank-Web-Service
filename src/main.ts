import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

createApp(App)
    .use(router) // 라우터를 애플리케이션에 추가
    .mount('#app'); // 애플리케이션을 DOM에 마운트
