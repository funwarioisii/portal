import Vue from 'vue'
import Router from 'vue-router'
import GraphScreen from "../screens/graph-screen"
import CatanScreen from "../screens/catan-screen"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/graph',
      component: GraphScreen
    },
    {
      path: '/catan',
      component: CatanScreen
    }
  ]
})
