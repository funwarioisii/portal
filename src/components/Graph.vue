<script>
import { Bar } from 'vue-chartjs'
import { log } from '@tensorflow/tfjs';

export default {
  extends: Bar,
  mounted () {
    this.fetchFirebase()
      .then((d) => {
        console.log('chartdata', d[0])
        console.log('labels', d[1])
        this.chartdata.datacollection.datasets[0].data = d[0]
        this.chartdata.datacollection.labels = d[1]
      })
      .then(() => {
        console.log('mounted')
        console.log('chartdata', this.chartdata.datacollection.datasets[0].data)
        console.log('labels', this.chartdata.datacollection.labels)
        this.renderChart(this.chartdata.datacollection, this.options)
      })
  },
  data: function() {
    return {
      lights: [{time: 0, value: 0}],
      chartdata: {
        datacollection: {
          labels: [],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: []
            }
          ]
        }
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods: {
    fetchFirebase() {
      let data = []
      let labels = []
      return new Promise((resolve, reject) => {
        firebase
        .database()
        .ref("sensor/light")
        .once("value")
        .then(result => {
          if (result.val()) {
            const rawLights = result.val();  // [{0: {name: "", rental: {place: "", status: false}}}, ...]
            for (const time in rawLights) {
              labels.push(time)
              data.push(rawLights[time])
            }
          }
          resolve([data, labels])
        })
      })
    }
  }
}


</script>

<style>
</style>
