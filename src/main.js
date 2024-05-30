import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.scss';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primevue/resources/primevue.min.css';
import primevue from 'primevue/config';


const app = createApp(App);

app.use(router);
app.use(primevue);

app.mount('#app');
