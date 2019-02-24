<script>
// import { Bar } from 'vue-chartjs'

// let chartdata = {
//   datacollection: {
//     labels: [],
//     datasets: [
//       {
//         label: 'Data One',
//         backgroundColor: '#f87979',
//         data: []
//       }
//     ]
//   }
// }

// let options = {
//   responsive: true,
//   maintainAspectRatio: false
// }

// export default {
//   extends: Bar,


//   mounted () {
//     this.renderChart(chartdata, options)
//   }
// }
import { Bar } from 'vue-chartjs'
let chartdata = {
        labels: ["Jan", "Feb"],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [100, 50]
          }
        ]
      }

let options = {
        responsive: true,
        maintainAspectRatio: false
      }
export default {
  extends: Bar,
  // beforeCreate: function(){
  //   firebase
  //     .database()
  //     .ref("sensor/light")
  //     .once("value")
  //     .then(result => {
  //       if (result.val()) {
  //         const rawLights = result.val();  // [{0: {name: "", rental: {place: "", status: false}}}, ...]
  //         for (const time in rawLights) {
  //           chartdata.labels.push(time)
  //           chartdata.datasets[0].data.push(rawLights[time])
      
  //         }
  //       }
  //     })
  // },

  mounted() {
    this.renderChart(
      chartdata,
      options
    )
  }
}
</script>