<script setup>
import { ref } from 'vue';
import Search from './components/Search.vue';
import WeatherPanel from './components/WeatherPanel.vue';

const weatherData = ref(null);

function handleWeatherData(data) {
  weatherData.value = data;
}

</script>

<template>
  <header>
    <h1>KittyCaSts</h1>
    <img class="logo" src="/src/assets/images/kitty.png">
  </header>
  <Search @weather-data="handleWeatherData"/>
  <WeatherPanel v-bind="weatherData" />


</template>

<style>
h1 {
  position: absolute;
  left: 182px;
  font-weight: 500;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 40px;
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
  color: rgba(0, 23, 81, 0.72);
  height: 90px;
}
</style>
