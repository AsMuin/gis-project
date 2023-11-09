<template>
    <div id="sceneview"></div>
</template>

<script setup>
import Map from '@arcgis/core/Map';
import SceneView from "@arcgis/core/views/SceneView";
import TileLayer from '@arcgis/core/layers/TileLayer';
import { onMounted } from 'vue';
import esriConfig from "@arcgis/core/config"; 
esriConfig.assetsPath = "./assets";
onMounted(() => {
   CreateView();
})
function CreateView() {
    let custommap = new TileLayer({
        url: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",
    })
    esriConfig.apiKey =
    "AAPK2a7b45ed56924ae4b2614a192db5d5d8f3dOTlYK3Ewv8lxGc99XfODBXtwV_s_EkNDqOpIo0QAjznmjt7I4r83fubeq9Y67";
const map = new Map({
    layers: custommap,
    ground: "world-elevation",
})
const view = new SceneView({
    map: map,
    zoom: 13,
    center: [116, 40],
    // camera: {
    //     position: {
    //       x: -118.808, //Longitude
    //       y: 33.961, //Latitude
    //       z: 2000 //Meters
    //     },
    //     tilt: 75
    //   },
    container:'sceneview',
})
}
</script>

<style >
#sceneview{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>