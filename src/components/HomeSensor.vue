<template>
  <Graph 
    :chartdata="chartdata"
    :options="options"></Graph>
</template>

<script>

import Graph from "./Graph.vue";

export default {
  data() {
    return {
      chartdata: {
      labels: [],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: []
        }
      ]
    },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  beforeCreate() {
    firebase
      .database()
      .ref("sensor/light")
      .once("value")
      .then(result => {
        if (result.val()) {
          const rawLights = result.val();  // [{0: {name: "", rental: {place: "", status: false}}}, ...]
          for (const time in rawLights) {
            this.chartdata.labels.push(time)
            this.chartdata.datasets[0].data.push(rawLights[time])
          }
        }
      })
  },
  components: {
    Graph: Graph
  }
}
</script>
