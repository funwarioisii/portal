<template>
  <div id="app">
    <v-app>
      <v-flex>
        <router-link to="/games">
          <v-btn color="info">Board Game</v-btn>
        </router-link>
        <router-link to="/tf">
          <v-btn color="warning">Tensor Flow</v-btn>
        </router-link>
        <router-link to="/sensor">
          <v-btn color="warning">Sensor</v-btn>
        </router-link>
        <router-link to="/catan">
          <v-btn color="info">catan</v-btn>
        </router-link>
        <router-link to="/graph">
          <v-btn color="warning">Graph</v-btn>
        </router-link>

        <!-- <component :is="currentPage"></component> -->
        <router-view></router-view>
      </v-flex>
    </v-app>
  </div>
</template>

<script>

import Home from "./components/Home.vue"
import ItemList from "./components/ItemList.vue"
import Calc from "./components/Calc.vue"
import History from "./components/History.vue"
import HomeSensor from "./components/HomeSensor.vue"
import Catan from "./components/Catan.vue"

export default {
  name: 'app',
  components: {
    Home: Home,
    ItemList: ItemList,
    Calc: Calc,
    HomeSensor: HomeSensor
  },
  methods: {
    transPage : function(title) {
      if (title === "itemList") {
        this.currentPage = ItemList
      } else if (title === "calc") {
        this.currentPage = Calc
      } else if (title === "history") {
        this.currentPage = History
      } else if (title === "sensor") {
        this.currentPage = HomeSensor
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
