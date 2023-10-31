<template>
  <RouterView></RouterView>
</template>
<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
const router = useRouter();
const route = useRoute();
onMounted(() => {ToHome()})
function ToHome(){
  router.push({
    path:"/home"
  })
}
</script>
<style>
html,
body
 {
  width: 100%;
  height: 100%;
  margin: 0;
}

</style>
