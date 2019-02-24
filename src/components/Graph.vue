<script>
import { Line } from 'vue-chartjs'


export default {
  extends: Line,
  mounted () {
    this.fetchFirebase()
      .then((d) => {
        this.chartdata.datacollection.datasets[0].data = d[0]
        this.chartdata.datacollection.labels = d[1]
      })
      .then(() => {
        this.renderChart(this.chartdata.datacollection, this.options)
      })
  },
  data: function() {
    return {
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