import Vue from 'vue';
import App from './app.vue';
import router from './router/router';
import plugins from './p-plugins';

Vue.config.productionTip = false;

Vue.use(plugins);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
