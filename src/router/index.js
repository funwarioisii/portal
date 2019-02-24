import Vue from 'vue'
import Router from 'vue-router'
import graphScreen from "../screens/graph-screen";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/graph',
      component: graphScreen
    }
  ]
})
