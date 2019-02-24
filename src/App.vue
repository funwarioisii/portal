<template>
  <div id="app">
    <v-app>
      <Home />
      <v-flex>
        <v-btn color="info" @click="transPage('itemList')">Board Game</v-btn>
        <v-btn color="warning" @click="transPage('calc')">Tensor Flow</v-btn>
        <v-btn color="info" @click="transPage('history')">History</v-btn>
        <v-btn color="warning" @click="transPage('graph')">Graph</v-btn>
        <v-btn color="info" @click="transPage('catan')">catan</v-btn>
        <component :is="currentPage"></component>

      </v-flex>
    </v-app>
  </div>
</template>

<script>

import Home from "./components/Home.vue"
import ItemList from "./components/ItemList.vue"
import Calc from "./components/Calc.vue"
import History from "./components/History.vue"
import Graph from "./components/Graph.vue"
import Catan from "./components/Catan.vue"

export default {
  name: 'app',
  components: {
    Home: Home,
    ItemList: ItemList,
    Calc: Calc,
    Graph: Graph
  },
  methods: {
    transPage : function(title) {
      if (title === "itemList") {
        this.currentPage = ItemList
      } else if (title === "calc") {
        this.currentPage = Calc
      } else if (title === "history") {
        this.currentPage = History
      } else if (title === "graph") {
        this.currentPage = Graph
      } else if (title === 'catan') {
        this.currentPage = Catan
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