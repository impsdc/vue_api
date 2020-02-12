import Vue from "vue";
import Router from "vue-router";

import home from "../views/index.vue";
import favQuotes from "../views/favQuotes.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: home },
    { path: "/favQuotes", component: favQuotes }
  ]
});
