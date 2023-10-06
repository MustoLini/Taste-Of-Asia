
<template>
  <TheHeader/>
  <div class="card-container">
      <RouterView></RouterView>
  </div>
</template>

<script>
 import {RouterView,RouterLink} from "vue-router";
 import TheHeader from "./components/TheHeader.vue";

export default {
  components: {TheHeader}
}
</script>

<style scoped>

</style>


