<template>
  <div class="small">
    <div class="buttonList">
      <div class="redButtonList">
        <v-btn @click="addCount('red', 1)">red / 1</v-btn>
        <v-btn @click="addCount('red', 2)">red / 2</v-btn>
        <v-btn @click="addCount('red', 3)">red / 3</v-btn>
        <v-btn @click="addCount('red', 4)">red / 4</v-btn>
        <v-btn @click="addCount('red', 5)">red / 5</v-btn>
        <v-btn @click="addCount('red', 6)">red / 6</v-btn>
      </div>
      <div class="yellowButtonList">
        <v-btn @click="addCount('yellow', 1)">yellow / 1</v-btn>
        <v-btn @click="addCount('yellow', 2)">yellow / 2</v-btn>
        <v-btn @click="addCount('yellow', 3)">yellow / 3</v-btn>
        <v-btn @click="addCount('yellow', 4)">yellow / 4</v-btn>
        <v-btn @click="addCount('yellow', 5)">yellow / 5</v-btn>
        <v-btn @click="addCount('yellow', 6)">yellow / 6</v-btn>
      </div>
    </div>
    <GraphTemplate :chart-data="datacollection"></GraphTemplate>
  </div>
</template>


<script>
  import GraphTemplate from './GraphTemplate.vue'

  export default {
    components: {
      GraphTemplate
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ["red", "yellow"],
          datasets: [
            {
              label: 'One',
              backgroundColor: '#f87979',
              data: [0, 0]
            }, {
              label: 'Two',
              backgroundColor: '#f87979',
              data: [0, 0]
            },
            {
              label: 'Three',
              backgroundColor: '#f87979',
              data: [0, 0]
            },
            {
              label: 'Four',
              backgroundColor: '#f87979',
              data: [0, 0]
            }, {
              label: 'Five',
              backgroundColor: '#f87979',
              data: [0, 0]
            },
            {
              label: 'Six',
              backgroundColor: '#f87979',
              data: [0, 0]
            }
          ]
        }
      },
      addCount(label, index) {
        const _target = Object.assign({}, this.datacollection)
        _target.datasets[index-1].data[this.datacollection.labels.indexOf(label)] += 1
        this.datacollection = _target
      }
    }
  }
</script>

<style>
  .small {
    max-width: 800px;
    margin:  150px auto;
  }
</style>