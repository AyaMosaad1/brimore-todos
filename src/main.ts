import Vue, { createApp } from 'vue';
import BootstrapVue3 from 'bootstrap-vue-3';
import Antd from 'ant-design-vue';
import { store } from './store';
import 'ant-design-vue/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

import App from './App.vue';

const app = createApp(App);

app.use(BootstrapVue3);
app.use(Antd);

app.use(store);

app.mount('#app');
