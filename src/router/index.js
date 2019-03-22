import Vue from 'vue'
import Router from 'vue-router'
import GraphScreen from "../screens/graph-screen"
import CatanScreen from "../screens/catan-screen"
import TensorScreen from "../screens/tensor-screen"
import GameScreen from "../screens/game-screen"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/graph',
      component: GraphScreen
    },
    {
      path: '/catan',
      component: CatanScreen
    },
    {
      path: '/tf',
      component: TensorScreen
    },
    {
      path: '/games',
      component: GameScreen
    }
  ]
})
