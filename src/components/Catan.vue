<template>
  <div id="catan">
    <div class="buttonList" v-for="(count, index) in diceCount"
      :key="index" @click="addCount(index)">
      <button>{{index}} : {{count}}</button>
    </div>
    <div class="history" v-for="(item) in history" :key="item">{{item}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      redDice: [1, 2, 3, 4, 5, 6],
      yellowDice: [1, 2, 3, 4, 5, 6],
      dices: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      diceCount: {
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0
      },
      history: []
    }
  },
  methods: {
    addCount: function(index) {
      this.diceCount[index] += 1
      this.history.push(index)
    }
  }
}
</script>
