<template>
  <calcite-shell>
    <calcite-shell-panel slot="panel-start" position="start" id="contents">
      <calcite-combobox
        id="categorySelect"
        placeholder="Filter by category"
        overlay-positioning="fixed"
        selection-mode="single"
      >
        <calcite-combobox-item
          value="10000"
          text-label="Arts and Entertainment"
        ></calcite-combobox-item>
        <calcite-combobox-item
          value="11000"
          text-label="Business and Professional Services"
        ></calcite-combobox-item>
        <calcite-combobox-item
          value="12000"
          text-label="Community and Government"
        ></calcite-combobox-item>
        <calcite-combobox-item
          value="13000"
          text-label="Dining and Drinking"
        ></calcite-combobox-item>
        <calcite-combobox-item
          value="15000"
          text-label="Health and Medicine"
        ></calcite-combobox-item>
        <calcite-combobox-item
          selected
          value="16000"
          text-label="Landmarks and Outdoors"
        ></calcite-combobox-item>
        <calcite-combobox-item
          value="17000"
          text-label="Retail"
        ></calcite-combobox-item>
        <calcite-combobox-item
          value="18000"
          text-label="Sports and Recreation"
        ></calcite-combobox-item>
        <calcite-combobox-item
          value="19000"
          text-label="Travel and Transportation"
        ></calcite-combobox-item>
      </calcite-combobox>
      <calcite-panel class="contents">
        <calcite-flow id="flow">
          <calcite-flow-item>
            <calcite-list id="results">
              <calcite-notice open>
                <div slot="message">
                  Click on the map to search for nearby places
                </div>
              </calcite-notice>
            </calcite-list>
            <calcite-button icon-end="arrow-bold-left" @click="tohome()"
              >返回</calcite-button
            >
          </calcite-flow-item>
        </calcite-flow>
      </calcite-panel>
    </calcite-shell-panel>
    <div id="onemap"></div>
  </calcite-shell>
</template>
<script setup>
import "@esri/calcite-components/dist/calcite/calcite.css";
import Map from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"; //图形图层
import PlacesQueryParameters from "@arcgis/core/rest/support/PlacesQueryParameters";
// import Places from "@arcgis/core/rest/places";
import { onMounted } from "vue";
import FetchPlaceParameters from "@arcgis/core/rest/support/FetchPlaceParameters";
import Circle from "@arcgis/core/geometry/Circle";
import WebStyleSymbol from "@arcgis/core/symbols/WebStyleSymbol";
import Graphic from "@arcgis/core/Graphic";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import * as places from "@arcgis/core/rest/places.js";
import { useRouter, useRoute } from "vue-router";
import { RouterLink, RouterView } from "vue-router";
esriConfig.assetsPath = "./assets";
// onUpdated(() => {CreateMapView();})
onMounted(() => {
  CreateMapView();
  // PlaceSearch();
});
const router = useRouter();
const route = useRoute();
function tohome() {
  console.log("Back to home");
  router.push({
    path: "/home",
  });
}
function CreateMapView() {
  const placesLayer = new GraphicsLayer({
    id: "placesLayer",
  });
  // GraphicsLayer for map buffer
  const bufferLayer = new GraphicsLayer({
    id: "bufferLayer",
  });
  esriConfig.apiKey =
    "AAPK2a7b45ed56924ae4b2614a192db5d5d8f3dOTlYK3Ewv8lxGc99XfODBXtwV_s_EkNDqOpIo0QAjznmjt7I4r83fubeq9Y67";
  const map = new Map({
    basemap: "arcgis-navigation",
    layers: [placesLayer, bufferLayer],
  });
  const view = new MapView({
    map: map,
    center: [116, 40],
    zoom: 13,
    container: "onemap",
  });
  console.log(view);
  // function PlaceSearch() {
  let infoPanel; // Info panel for place information
  let clickPoint; // Clicked point on the map
  let activeCategory = "16000"; // Landmarks and Outdoors category
  // Info panel interactions
  const categorySelect = document.getElementById("categorySelect");
  const resultPanel = document.getElementById("results");
  const flow = document.getElementById("flow");
  // Clear graphics and results from the previous place search
  function clearGraphics() {
    bufferLayer.removeAll(); // Remove graphics from GraphicsLayer of previous buffer
    placesLayer.removeAll(); // Remove graphics from GraphicsLayer of previous places search
    resultPanel.innerHTML = "";
    if (infoPanel) infoPanel.remove();
  }
  // View on-click event to capture places search location
  view.on("click", (event) => {
    clearGraphics();
    clickPoint = event.mapPoint;
    // Pass point to the showPlaces() function
    clickPoint && showPlaces(clickPoint);
  });
  // Event listener for category changes
  categorySelect.addEventListener("calciteComboboxChange", () => {
    activeCategory = categorySelect.value;
    clearGraphics();
    // Pass point to the showPlaces() function with new category value
    clickPoint && showPlaces(clickPoint);
  });
  // Display map click search area and pass to places service
  async function showPlaces(placePoint) {
    // Buffer graphic represents click location and search radius
    const circleGeometry = new Circle({
      center: placePoint,
      geodesic: true,
      numberOfPoints: 100,
      radius: 500, // set radius to 500 meters
      radiusUnit: "meters",
    });
    const circleGraphic = new Graphic({
      geometry: circleGeometry,
      symbol: {
        type: "simple-fill", // autocasts as SimpleFillSymbol
        style: "solid",
        color: [3, 140, 255, 0.1],
        outline: {
          width: 1,
          color: [3, 140, 255],
        },
      },
    });
    // Add buffer graphic to the view
    bufferLayer.graphics.add(circleGraphic);
    // Parameters for queryPlacesNearPoint()
    const placesQueryParameters = new PlacesQueryParameters({
      categoryIds: [activeCategory],
      radius: 500, // set radius to 500 meters
      point: placePoint,
    });
    // The results variable represents the PlacesQueryResult
    const results = await places.queryPlacesNearPoint(placesQueryParameters);
    // Pass the PlacesQueryResult to the tabulatePlaces() function
    tabulatePlaces(results);
  }
  // Investigate the individual PlaceResults from the array of results
  // from the PlacesQueryResult and process them
  function tabulatePlaces(results) {
    results.results.forEach((placeResult) => {
      // Pass each result to the addResult() function
      addResult(placeResult);
    });
  }
  // Creates webstyles based on the given name
  function createWebStyle(symbolName) {
    return new WebStyleSymbol({
      name: symbolName,
      styleName: "Esri2DPointSymbolsStyle",
    });
  }
  // Visualize the places on the map based on category
  // and list them on the info panel with more details
  async function addResult(place) {
    const placeGraphic = new Graphic({
      geometry: place.location,
    });
    switch (activeCategory) {
      case "10000": // Arts and Entertainment
        placeGraphic.symbol = createWebStyle("museum");
        break;
      case "11000": // Business and Professional Services
        placeGraphic.symbol = createWebStyle("industrial-complex");
        break;
      case "12000": // Community and Government
        placeGraphic.symbol = createWebStyle("embassy");
        break;
      case "13000": // Dining and Drinking
        placeGraphic.symbol = createWebStyle("vineyard");
        break;
      case "15000": // Health and Medicine
        placeGraphic.symbol = createWebStyle("hospital");
        break;
      case "16000": // Landmarks and Outdoors category
        placeGraphic.symbol = createWebStyle("landmark");
        break;
      case "17000": // Retail
        placeGraphic.symbol = createWebStyle("shopping-center");
        break;
      case "18000": // Sports and Recreation
        placeGraphic.symbol = createWebStyle("sports-complex");
        break;
      case "19000": // Travel and Transportation
        placeGraphic.symbol = createWebStyle("trail");
        break;
      default:
        placeGraphic.symbol = createWebStyle("museum");
    }
    // Add each graphic to the GraphicsLayer
    placesLayer.graphics.add(placeGraphic);
    const infoDiv = document.createElement("calcite-list-item");
    infoDiv.label = place.name;
    infoDiv.description = `
  ${place.categories[0].label} -
  ${Number((place.distance / 1000).toFixed(1))} km`;
    // If a place in the info panel is clicked
    // then open the feature's popup
    infoDiv.addEventListener("click", async () => {
      view.openPopup({
        location: place.location,
        title: place.name,
      });
      // Move the view to center on the selected place feature
      view.goTo(placeGraphic);
      // Fetch more details about each place based
      // on the place ID with all possible fields
      const fetchPlaceParameters = new FetchPlaceParameters({
        placeId: place.placeId,
        requestedFields: ["all"],
      });
      // Pass the FetchPlaceParameters and the location of the
      // selected place feature to the getDetails() function
      getDetails(fetchPlaceParameters, place.location);
    });
    resultPanel.appendChild(infoDiv);
    // Get place details and display in the info panel
    async function getDetails(fetchPlaceParameters, placePoint) {
      // Get place details
      const result = await places.fetchPlace(fetchPlaceParameters);
      const placeDetails = result.placeDetails;
      // Set-up panel on the info for more place information
      infoPanel = document.createElement("calcite-flow-item");
      flow.appendChild(infoPanel);
      infoPanel.heading = placeDetails.name;
      infoPanel.description = placeDetails.categories[0].label;
      // Pass attributes from each place to the setAttribute() function
      setAttribute("Description", "information", placeDetails.description);
      setAttribute("Address", "map-pin", placeDetails.address.streetAddress);
      setAttribute("Phone", "mobile", placeDetails.contactInfo.telephone);
      setAttribute("Hours", "clock", placeDetails.hours.openingText);
      setAttribute("Rating", "star", placeDetails.rating.user);
      setAttribute("Email", "email-address", placeDetails.contactInfo.email);
      setAttribute(
        "Facebook",
        "speech-bubble-social",
        placeDetails.socialMedia.facebookId
          ? `www.facebook.com/${placeDetails.socialMedia.facebookId}`
          : null
      );
      setAttribute(
        "Twitter",
        "speech-bubbles",
        placeDetails.socialMedia.twitter
          ? `www.twitter.com/${placeDetails.socialMedia.twitter}`
          : null
      );
      setAttribute(
        "Instagram",
        "camera",
        placeDetails.socialMedia.instagram
          ? `www.instagram.com/${placeDetails.socialMedia.instagram}`
          : null
      );
      // If another place is clicked in the info panel, then close
      // the popup and remove the highlight of the previous feature
      infoPanel.addEventListener("calciteFlowItemBack", async () => {
        view.closePopup();
      });
    }
    // Take each place attribute and display on info panel
    function setAttribute(heading, icon, validValue) {
      if (validValue) {
        const element = document.createElement("calcite-block");
        element.heading = heading;
        element.description = validValue;
        const attributeIcon = document.createElement("calcite-icon");
        attributeIcon.icon = icon;
        attributeIcon.slot = "icon";
        attributeIcon.scale = "m";
        element.appendChild(attributeIcon);
        infoPanel.appendChild(element);
      }
    }
  }
  // }
}
</script>
<style>
#onemap {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
