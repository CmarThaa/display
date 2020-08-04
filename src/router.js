import Vue from 'vue';
import Router from 'vue-router';
import display from "./display";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/display',
      component: display,
    }]
})
