<template>
  <div id = "calc">
    <h2>Tensor Flow</h2>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import * as tf from '@tensorflow/tfjs';
const x = tf.tensor2d([1, 2, 3, 4], [4, 1])
const y = tf.tensor2d([1, 3, 5, 7], [4, 1])
const resultCalc = tf.add(x, y).dataSync()  // JSON like { "0": 2, "1": 5, "2": 8, "3": 11 }
const model = tf.loadModel('http://localhost:3000/model.json')

model.then(
  (loadedModel) => {
    loadedModel.summary()
    const result = loadedModel.predict(tf.randomUniform([1, 28, 28, 1])).dataSync()
    console.log(result)
  }
 )

let result = []
for (const key in resultCalc) {
    result.push(resultCalc[key])
}

export default {
  data() {
    return {
      result: result
    }
  }
}
</script>
