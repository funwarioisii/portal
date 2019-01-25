<template>
  <div id="app">
    <Home />
    <button @click="transPage('itemList')">Board Game</button>
    <button @click="transPage('calc')">Tensor Flow</button>

    <component :is="currentPage"></component>
  </div>
</template>

<script>

import Home from "./components/Home.vue"
import ItemList from "./components/ItemList.vue"
import Calc from "./components/Calc.vue"


export default {
  name: 'app',
  components: {
    Home: Home,
    ItemList: ItemList,
    Calc: Calc
  },
  methods: {
    transPage : function(title) {
      if (title === "itemList") {
        this.currentPage = ItemList
      } else if (title === "calc") {
        this.currentPage = Calc
      }
    }
  },
  data() {
    return {
      currentPage: this.currentPage
    }
  }
}
</script>
</style>
