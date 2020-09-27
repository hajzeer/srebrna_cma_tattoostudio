
import VueLazyload from 'vue-lazyload';
import Vue from 'vue';
import App from './App.vue';
import ScrollAnimation from './directives/scrollanimation';
import FixedPosition from './directives/fixedposition';


Vue.use(VueLazyload);

Vue.directive('scrollanimation', ScrollAnimation);
Vue.directive('fixedposition', FixedPosition);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
