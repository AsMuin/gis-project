<template>
  <el-container>
    <el-header>GIS</el-header>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="12">
            <h2 class="mb-2"></h2>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
                 
            >
              <el-sub-menu index="1">
                <template #title>
                  <el-icon><icon-menu /></el-icon>
                  <span>图层</span>
                </template>
                <el-menu-item-group title="Group One">
                  <el-menu-item index="1-1" @click="toMapView()"
                    >MapView</el-menu-item
                  >
                  <el-menu-item index="1-2" @click="toOneMap"
                    >OneMap(PlacesSearch)</el-menu-item
                  >
                </el-menu-item-group>
                <el-menu-item-group title="Group Two">
                  <el-menu-item index="1-3" @click="toDataVisual()"
                    >DataVisual(Population)</el-menu-item
                  >
                </el-menu-item-group>
                <el-menu-item index="1-4">
                  <template #title>item four</template>
                  <!-- <el-menu-item index="1-4-1">item one</el-menu-item> -->
                </el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="2">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>地点</span>
                </template>
                <el-menu-item-group title="北方">
                  <el-menu-item index="2-1" @click="change">北京</el-menu-item>
                  <el-menu-item index="2-2">黑龙江</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="南方">
                  <el-menu-item index="2-3">广州</el-menu-item>
                </el-menu-item-group>
                <el-menu-item index="2-4">
                  <template #title>杭州</template>
                  <!-- <el-menu-item index="1-4-1">item one</el-menu-item> -->
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item index="3" disabled>
                <el-icon><document /></el-icon>
                <span>文档</span>
              </el-menu-item>
              <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <span>参数设置</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main><RouterView></RouterView></el-main>
    </el-container>
  </el-container>
</template>
<script  setup lang="ts">
import MapView from "../components/MapView.vue";
import { ref, reactive, provide, onMounted,onBeforeUnmount,onUpdated} from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";
import { RouterLink, RouterView } from "vue-router";
const router = useRouter();
const route = useRoute();
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath);
// };
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath);
// };
onMounted(() => {});
// onUpdated(() => {BeiJing})
function toMapView() {
  console.log("1");
  router.push({
    path: "/home/mapview",
  });
}
function toDataVisual() {
  console.log("1");
  router.push({
    path: "/home/datavisual",
  });
}
const toOneMap = () => {
  console.log("2");
  router.push({
    path: "/home/onemap",
  });
};
// const BeiJing = () => {
//   provide("Place", [116, 40]);
//   console.log("Home传送成功")
// };
//   provide("Place", [116, 40]);
const mapCenter =ref ()
const change =()=>{
//  MapCenter.value.ChangePlace()
console.log(mapCenter.value)
 
}
</script>
<style>
html,
body,
#app {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
