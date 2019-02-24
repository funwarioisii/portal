<script>
import { Line } from 'vue-chartjs'


export default {
  extends: Line,

  mounted() {
    let chartdata = {
      labels: [],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#f87979',
          data: []
        }
      ]
    }

    let options = {
      responsive: true,
      maintainAspectRatio: false
    }

    firebase
      .database()
      .ref("sensor/light")
      .once("value")
      .then(result => {
        if (result.val()) {
          const rawLights = result.val();  // [{0: {name: "", rental: {place: "", status: false}}}, ...]
          for (const time in rawLights) {
            chartdata.labels.push(time)
            chartdata.datasets[0].data.push(rawLights[time])
          }
          this.renderChart(
            chartdata,
            options
          )
        }
      })
  }
}
</script>