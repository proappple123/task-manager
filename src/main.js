import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import bootstrap from 'bootstrap';


createApp(App)
  .use(router)
    .use(bootstrap)
  .mount('#app');
