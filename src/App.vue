<script setup>
import { ref } from "vue";
import Search from "./components/Search.vue";
import WeatherPanel from "./components/WeatherPanel.vue";
import CatBox from "./components/CatBox.vue";

const weatherData = ref(null);

function handleWeatherData(data) {
  weatherData.value = data;
}
</script>

<template>
  <header>
    <img class="logo" src="/src/assets/images/kitty.png" />
    <h1>kittycaSts</h1>
    <a href="https://github.com/conranh/kittycasts"
      ><img src="/src/assets/images/github-mark.png" class="github-link"
    /></a>
    <!--Adding this here for whenever I make dark mode
    <a href="https://github.com/conranh/kittycasts"><img src="/src/assets/images/github-mark-white.png"></a>-->
  </header>
  <div class="container">
    <div class="panel">
      <Search @weather-data="handleWeatherData" />
      <WeatherPanel v-bind="weatherData" />
    </div>
    <CatBox v-bind="weatherData"/>
  </div>
</template>

<style>
h1 {
  position: fixed;
  left: 170px;
  font-weight: 500;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 68px;
  margin-top: 0px;
}

.github-link {
  width: 50px;
  height: auto;
  position: absolute;
  right: 20px;
  top: 20px;
}

/**/
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
}

.logo {
  position: absolute;
  left: 17px;
  width: 140px;
  height: 90px;
  object-fit: cover;
}

header {
  position: relative;
  margin: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: rgba(255, 255, 255, 0.21);
  height: 10vh;
}

.panel {
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.4);
  height: 90vh;
  width: 500px;
}

</style>
