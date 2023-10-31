<template>
  <div id="mapview"></div>
  <!-- <BUtton @click="createMapView()"></BUtton> -->
</template>
<script  setup >
//vue3新特性，参数直接暴露，无需return和export dafult
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Basemap from "@arcgis/core/Basemap";
import TileLayer from "@arcgis/core/layers/TileLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer"; //要素图层
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Sketch from "@arcgis/core/widgets/Sketch"; //空间查询捕捉
import esriConfig from "@arcgis/core/config";
import { onMounted ,inject, nextTick} from "vue";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"; //图形图层
import Graphic from "@arcgis/core/Graphic"; //图形
import Locate from "@arcgis/core/widgets/Locate"; //定位
import Editor from "@arcgis/core/widgets/Editor";
import { useRouter, useRoute } from "vue-router";
import { RouterLink, RouterView } from "vue-router";
esriConfig.assetsPath = "./assets";
// onMounted 生命周期函数，在MapView组件创建完成之后就会执行里面的函数
onMounted(() => {
  createMapView();
  console.log("成功在渲染后挂载");
  // AddFeatureLayer();
  
});
const myPointsFeatureLayer = new FeatureLayer({
  //初始化个人的点要素图层
  url: "https://services1.arcgis.com/FEyNUzBr2TXC33oD/arcgis/rest/services/point/FeatureServer/0",
});
// let Place = inject('Place')
// console.log(Place)
function createMapView() {
  //创建地图视图
  console.log("1");
  esriConfig.apiKey =
    "AAPK2a7b45ed56924ae4b2614a192db5d5d8f3dOTlYK3Ewv8lxGc99XfODBXtwV_s_EkNDqOpIo0QAjznmjt7I4r83fubeq9Y67";
  const map = new Map({
    basemap: "arcgis-topographic", //Topographic 地形 Imagery 成像  Navigation 导航  Light gray canvas 浅灰色帆布
    layers: [myPointsFeatureLayer],
  });
  const view = new MapView({
    //MapView 为2D   SceneView为3D
    map: map,
    center: [-118.80543, 34.027],
    zoom: 13,
    container: "mapview",
  });
  console.log(view);
  const scalebar = new ScaleBar({
    //初始化比例尺工具
    view: view,
  });
  view.ui.add(scalebar, "bottom-left"); //加载到底部左边
  // Add sketch widget
  const graphicsLayerSketch = new GraphicsLayer();
  map.add(graphicsLayerSketch);
  const sketch = new Sketch({
    //初始化空间绘图捕捉工具
    layer: graphicsLayerSketch,
    view: view,
    creationMode: "update", // Auto-select
  });
  view.ui.add(sketch, "top-right"); //加载ui到右上方
  // Add sketch events to listen for and execute query
  sketch.on("update", (event) => {}); //事件监听，自动更新
  // SQL query array
  const parcelLayerSQL = [
    //设置查询列表
    "Choose a SQL where clause...",
    "UseType = 'Residential'",
    "UseType = 'Government'",
    "UseType = 'Irrigated Farm'",
    "TaxRateArea = 10853",
    "TaxRateArea = 10860",
    "TaxRateArea = 08637",
    "Roll_LandValue > 1000000",
    "Roll_LandValue < 1000000",
  ];
  let whereClause = parcelLayerSQL[0];
  // Add SQL UI
  const select = document.createElement("select");
  select.setAttribute("class", "esri-widget esri-select");
  select.setAttribute(
    "style",
    "width: 200px; font-family: 'Avenir Next'; font-size: 1em"
  );
  parcelLayerSQL.forEach(function (query) {
    let option = document.createElement("option");
    option.innerHTML = query;
    option.value = query;
    select.appendChild(option);
  });
  view.ui.add(select, "top-right"); //加载UI到右上方
  // Listen for changes
  select.addEventListener("change", (event) => {
    //监听事件，自动更新
    whereClause = event.target.value;
  });
  const locate = new Locate({
    //初始化加载当前位置工具
    view: view,
    useHeadingEnabled: false,
    goToOverride: function (view, options) {
      options.target.scale = 1500;
      return view.goTo(options.target);
    },
  });
  view.ui.add(locate, "top-left");
  // Editor widget
  const editor = new Editor({
    view: view,
  });
  // Add widget to the view
  view.ui.add(editor, "top-right");
  // // Get query layer and set up query
  // const parcelLayer = new FeatureLayer({
  //   url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/LA_County_Parcels/FeatureServer/0",
  // });
  // function queryFeatureLayer(extent) {
  //   const parcelQuery = {
  //     where: whereClause, // Set by select element
  //     spatialRelationship: "intersects", // Relationship operation to apply
  //     geometry: extent, // Restricted to visible extent of the map
  //     outFields: ["APN", "UseType", "TaxRateCity", "Roll_LandValue"], // Attributes to return
  //     returnGeometry: true,
  //   };
  // }
  // parcelLayer
  //   .queryFeatures(parcelQuery)

  //   .then((results) => {
  //     console.log("Feature count: " + results.features.length);
  //   })
  //   .catch((error) => {
  //     console.log(error.error);
  //   });
  // function displayResults(results) {
  //   // Create a blue polygon
  //   const symbol = {
  //     type: "simple-fill",
  //     color: [20, 130, 200, 0.5],
  //     outline: {
  //       color: "white",
  //       width: 0.5,
  //     },
  //   };
  //   const popupTemplate = {
  //     title: "Parcel {APN}",
  //     content:
  //       "Type: {UseType} <br> Land value: {Roll_LandValue} <br> Tax Rate City: {TaxRateCity}",
  //   };
  // }
  // // Assign styles and popup to features
  // results.features.map((feature) => {
  //   feature.symbol = symbol;
  //   feature.popupTemplate = popupTemplate;
  //   return feature;
  // });
  // // Clear display
  // view.closePopup();
  // view.graphics.removeAll();
  // // Add features to graphics layer
  // view.graphics.addMany(results.features);
  // displayResults(results);
  // const trailheadsLayer = new FeatureLayer({
  //   //点要素图层
  //   url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
  // });
  // const trailsLayer = new FeatureLayer({
  //   //线要素图层
  //   url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
  // });
  // const parksLayer = new FeatureLayer({
  //   //面要素图层
  //   url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0",
  // });
  // map.add(trailheadsLayer, 2);
  // map.add(trailsLayer, 1);
  // map.add(parksLayer, 0); // 数字代表渲染顺序，先渲染就会被覆盖
  // console.log("加载要素图层");
  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);
  console.log("加载图形图层");
  const point = {
    //Create a point
    type: "point",
    longitude: -118.80657463861,
    latitude: 34.0005930608889,
  };
  const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40], // Orange
    outline: {
      color: [255, 255, 255], // White
      width: 1,
    },
  };
  const pointGraphic = new Graphic({
    //点图形
    geometry: point,
    symbol: simpleMarkerSymbol,
  });
  graphicsLayer.add(pointGraphic);
  console.log("在图形图层加载点图形");
  // Create a line geometry
  const polyline = {
    type: "polyline",
    paths: [
      [-118.821527826096, 34.0139576938577], //Longitude, latitude
      [-118.814893761649, 34.0080602407843], //Longitude, latitude
      [-118.808878330345, 34.0016642996246], //Longitude, latitude
    ],
  };
  const simpleLineSymbol = {
    type: "simple-line",
    color: [226, 119, 40], // Orange
    width: 2,
  };
  const polylineGraphic = new Graphic({
    geometry: polyline,
    symbol: simpleLineSymbol,
  });
  graphicsLayer.add(polylineGraphic);
  console.log("在图形图层中加载线图形");
  // Create a polygon geometry
  const polygon = {
    type: "polygon",
    rings: [
      [-118.818984489994, 34.0137559967283], //Longitude, latitude
      [-118.806796597377, 34.0215816298725], //Longitude, latitude
      [-118.791432890735, 34.0163883241613], //Longitude, latitude
      [-118.79596686535, 34.008564864635], //Longitude, latitude
      [-118.808558110679, 34.0035027131376], //Longitude, latitude
    ],
  };

  const simpleFillSymbol = {
    type: "simple-fill",
    color: [227, 139, 79, 0.8], // Orange, opacity 80%
    outline: {
      color: [255, 255, 255],
      width: 1,
    },
  };
  const popupTemplate = {
    title: "{Name}", //标签名
    content: "{Description}", //文本内容
  };
  const attributes = {
    Name: "Mahou Riviera", //映射到标签名
    Description: "This is Mahou Riviera ", //映射到文本内容
  };
  const polygonGraphic = new Graphic({
    //多边形初始化组件
    geometry: polygon,
    symbol: simpleFillSymbol,
    attributes: attributes,
    popupTemplate: popupTemplate,
  });
  graphicsLayer.add(polygonGraphic);
  console.log("在图形图层中加载多边形图形和弹出窗口");
}

</script>
<style>
#mapview {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
