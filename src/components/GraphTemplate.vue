<script>
import { Bar } from 'vue-chartjs'

export default {
  props:['chartdata', 'options'],
  extends: Bar,
  mounted: function() {
    this.renderChart(this.chartdata.datacollection, this.options)
  }
}
</script>
