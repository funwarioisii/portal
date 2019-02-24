<template>
<div id="cameraexample">
<video autoplay playsinline muted id="webcam" width="224" height="224"></video>
  <v-btn color="info" @click="transPage('camera')">camera</v-btn>
</div>
</template>

<script>
import {Webcam} from '../javascript/webcam'
const webcam = new Webcam(document.getElementById('webcam'));

</script>