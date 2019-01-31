<template>
  <div id="ItemList">
    <h2>Board games</h2>
    <div class="gameList" v-for="(game, index) in games" :key="index">
      <v-card class="elevation-2">
        <v-card-title class="headline">{{game.name}}</v-card-title>
        <v-card-text>{{game.rental.place}}, {{game.rental.status}}</v-card-text>
      </v-card>
    </div>
  </div>
</template>


<script>
export default {
  name: "itemlist",
  data() {
    return {
      games: [{name: "", rental: {place: "", status: false}}]
    }
  },
  created: function () {
    firebase
      .database()
      .ref("boardgame/")
      .once("value")
      .then(result => {
        if (result.val()) {
          const rowGames = result.val();  // [{0: {name: "", rental: {place: "", status: false}}}, ...]
          let games = []
          for (const key in rowGames) {
            games.push(rowGames[key])
          }
          this.games = games;
        }
      })
  },
  methods: {
    displayTitle: function(gameJson) {
      return gameJson.name
    }
  }
}
</script>
