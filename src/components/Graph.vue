<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: ['chartdata', 'options'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
  },
  data() {
    return {
      lights: [{time: 0, value: 0}],
      chartdata: [],
      options: []
    }
  },
  beforeCreate: function(){
    let chartdata = []
    let options = []
    firebase
      .database()
      .ref("sensor/light")
      .once("value")
      .then(result => {
        if (result.val()) {
          const rawLights = result.val();  // [{0: {name: "", rental: {place: "", status: false}}}, ...]
          for (const time in rawLights) {
            chartdata.push(time)
            options.push(rawLights[time])
          }
        }
        console.log(chartdata)
        console.log(options)
      })
    
    this.chartdata = chartdata
    this.options = options
  }
}
</script>

<style>
</style>