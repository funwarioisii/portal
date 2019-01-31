<template>
  <div id="app">
    <v-app>
      <Home />
      <v-flex>
        <v-btn color="info" @click="transPage('itemList')">Board Game</v-btn>
        <v-btn color="warning" @click="transPage('calc')">Tensor Flow</v-btn>
        <v-btn color="info" @click="transPage('history')">History</v-btn>
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
      } else if (title === "history") {
        this.currentPage = History
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
