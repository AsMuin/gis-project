<template>
  <div id="view"></div>
</template>

<script setup>
import Map from "@arcgis/core/Map";
import Graphic from "@arcgis/core/Graphic";
import esriConfig from "@arcgis/core/config";
import MapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search";
import { onMounted } from "vue";
import * as geometryEngine from "@arcgis/core/geometry/geometryEngine.js";
import * as locator from "@arcgis/core/rest/locator.js";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
import   "https://unpkg.com/@esri/arcgis-rest-request@4.0.0/dist/bundled/request.umd.js";
import   "https://unpkg.com/@esri/arcgis-rest-demographics@4.0.0/dist/bundled/demographics.umd.js";
esriConfig.assetsPath = "./assets";
const authentication = arcgisRest.ApiKeyManager.fromKey(
  "AAPK2a7b45ed56924ae4b2614a192db5d5d8f3dOTlYK3Ewv8lxGc99XfODBXtwV_s_EkNDqOpIo0QAjznmjt7I4r83fubeq9Y67"
);
esriConfig.apiKey =
  "AAPK2a7b45ed56924ae4b2614a192db5d5d8f3dOTlYK3Ewv8lxGc99XfODBXtwV_s_EkNDqOpIo0QAjznmjt7I4r83fubeq9Y67";
onMounted(() => {
  createMapView();
});
function createMapView() {
  const map = new Map({
    basemap: "arcgis-navigation",
  });
  const view = new MapView({
    map: map,
    center: [9.19, 45.4642], // Milan, Italy
    zoom: 4,
    container: "view",
  });
  const search = new Search({
    view: view,
  });
  view.ui.add(search, "top-right");
  view.when(() => {
          reactiveUtils.watch(
            () => search.activeSource,
            (loaded) => {
              if (loaded) {
                search.popupEnabled = false;
                search.activeSource.placeholder = "Find facts for cities or places";
              }
              getDemographicData("Milan", view.center);
            },
            { once: true }
          );
        })
  search.on("select-result", (event) => {
    if (!event.result) {
      return;
    }
    getDemographicData(event.result.name, event.result.feature.geometry);
  });
  view.on("click", (e) => {
    const params = {
      location: e.mapPoint,
      outFields: "*",
    };
    const locatorUrl =
      "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";

    locator.locationToAddress(locatorUrl, params).then(
      function (response) {
        const city = response.attributes.City || response.attributes.Region;
        getDemographicData(city, params.location);
      },
      // Show the address found
      function (err) {
        // Show no address found
        view.graphics.removeAll();
        console.log("No address found.");
      }
    );
  });
  function getDemographicData(city, point) {
    // Request demographic data
    arcgisRest
      .queryDemographicData({
        studyAreas: [
          {
            geometry: {
              x: point.longitude,
              y: point.latitude,
            },
          },
        ],
        authentication: authentication,
      })

      .then((response) => {
        if (
          response.results[0].value.FeatureSet.length > 0 &&
          response.results[0].value.FeatureSet[0].features.length > 0
        ) {
          const attributes =
            response.results[0].value.FeatureSet[0].features[0].attributes;
        }
      });
  }
  function showData(city, attributes, point) {
    if (!city || !attributes || !point) {
      return;
    }
    const title = `Global facts near ${city}`;
    const content = `Population: ${attributes.TOTPOP}<br>Males: ${attributes.TOTMALES} <br>Females: ${attributes.TOTFEMALES}<br>Average Household Size: ${attributes.AVGHHSZ}`;

    view.openPopup({
      location: point,
      title: title,
      content: content,
    });

    const buffer = geometryEngine.geodesicBuffer(point, 1, "miles");
    const graphicBuffer = new Graphic({
      geometry: buffer,
      symbol: {
        type: "simple-fill",
        color: [50, 50, 50, 0.1],
        outline: {
          color: [0, 0, 0, 0.25],
          width: 0.5,
        },
      },
    });
    view.graphics.removeAll();
    view.graphics.add(graphicBuffer);
  }
}
</script>
<style>
#view {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
