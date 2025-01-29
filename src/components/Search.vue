<script setup>
import { ref, watch, getCurrentInstance } from "vue";
import { fetchWeather } from "../services/WeatherApi.js";
import Autocomplete from "./Autocomplete.vue";

const selectedCity = ref(null);
const { emit } = getCurrentInstance();

// Component is notified when a city is selected and sends this info to the API for display
watch(selectedCity, async (city) => {
  if (city) {
    const weatherData = await fetchWeather(city);
    emit("weather-data", weatherData);
  }
});
</script>

<template>
  <div class="search-container">
    <form id="searchBar" class="search-bar" autocomplete="off">
      <input
        id="input"
        v-model="input"
        type="text"
        placeholder="Search for your city/state or zip code"
      />
      <button id="searchButton" class="search-button" type="submit"></button>
    </form>
    <Autocomplete @city-selected="selectedCity = $event" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Chela+One&family=Share+Tech+Mono&display=swap');

.search-bar {
  display: flex;
  border: rgba(0, 0, 0, 0.8);
  border-width: 3px;
  border-style: solid;
  width: 300px;
  height: 35px;
}

input {
  outline: none;
  border: none;
  padding: 10px;
  font-size: 18px;
  width: 420px;
  background-color: transparent;
  font-family: "Chela One", system-ui;
}

input::placeholder
{
  color: #000;
}

.search-button {
  background-color: transparent;
  background-image: url("/src/assets/images/search.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  width: 38px;
}

.search-container {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}

@media screen and (min-width: 480px) {
  .search-bar {
    width: 400px;
  }

  input {
    font-size: 22px;
  }
}
</style>
