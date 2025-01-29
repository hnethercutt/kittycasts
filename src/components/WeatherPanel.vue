<script setup>
import { toRefs, watch } from "vue";

const props = defineProps({
  city: String,
  state: String,
  currentTemp: Number,
  feelsLike: Number,
  condition: String,
  gust: Number,
  wind: Number,
  humidity: Number,
  high: Number,
  low: Number,
  icon: String,
});

// Converts reactive prop object with API returned data so each element can be referenced directly
const {
  city,
  state,
  currentTemp,
  feelsLike,
  condition,
  gust,
  wind,
  humidity,
  high,
  low,
  icon,
} = toRefs(props);

// When the cities condition is determined, displays the corresponding weather icon
watch(condition, async () => {
  const iconLocation = icon.value;
  deleteIcon();
  createIcon(iconLocation);
});

// Ensures icon from any previous searches is removed
function deleteIcon() {
  document.getElementById("icon").textContent = "";
}

// Adds an img element with the correct icon img source
function createIcon(iconLocation) {
  const iconPic = document.getElementById("icon");
  const img = document.createElement("img");
  img.classList.add("weather-icon");
  img.src = iconLocation;
  iconPic.appendChild(img);
}
</script>

<template>
  <div class="weather-container">
    <div class="current-container">
      <div class="location">{{ city && state ? city + ", " + state : city || state }}</div>
      <div class="temp-container">
        <div class="current">
          <div class="current-temp">{{ currentTemp ? currentTemp + "°" : currentTemp }}</div>
          <div class="condition">{{ condition }}</div>
          <div id="icon"></div>
        </div>
      <div class="temp-details">  
        <div class="feels-like">{{ feelsLike ? "Feels Like: " + feelsLike + "°" : feelsLike }}</div>
        <div>{{ high ? "High: " + high + "°" : high }}</div>
        <div>{{ low ? "Low: " + low + "°" : low }}</div>
      </div>
    </div>
    </div>
    <div class="air">
      <div>
        {{ wind ? "Wind: " + wind + " mph" : wind }}
      </div>
      <div>
        {{ gust ? "Gust: " + gust + " mph" : gust }}
      </div>
      <div>
        {{ humidity ? "Humidity: " + humidity + "%" : humidity }}
      </div>
  </div>
</div>
</template>

<style>
.weather-icon {
  height: 75px;
  margin-top: 5px;
}

.temp-container {
  display: flex;
  gap: 2em;
}

.current-container {
  align-items: center;
  background-color: rgba(252, 230, 188, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 200px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 300px;
}

.location {
  font-size: 24px;
  text-align: center;
  margin-top: 5px;
}

.current {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.current-temp {
  color: rgb(24, 50, 117);
  font-size: 46px;
}

.temp-details {

  font-size: 18px;
  margin-top: 40px;
}

.feels-like {
  font-size: 20px;
}

.condition {
  font-size: 26px;
}

.air {
  align-items: center;
  background-color: rgba(198, 230, 255, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  font-size: 20px;
  height: 80px;
  justify-content: center;
  width: 300px;
  margin-top: 10px;
}

.weather-container {
  margin: 5px;
}

@media screen and (min-width: 480px) {
  .weather-container {
    display: flex;
  }

  .current-container {
    width: 300px;
  }

  .air {
    width: 150px;
    height: 200px;
    margin-top: 0;
    margin-left: 10px;
    gap: 1em;
  }
}

@media screen and (min-width: 768px) {
  .current-container {
    width: 350px;
    height: 250px;
  }

  .air {
    width: 175px;
    height: 250px;
    gap: 30px;
    font-size: 24px;
  }

  .current-temp {
  font-size: 72px;
}

.temp-details {

  font-size: 24px;
  margin-top: 40px;
}

.feels-like {
  font-size: 24px;
}

.condition {
  font-size: 26px;
}

.location {
  font-size: 30px;
}
}

@media screen and (min-width: 1025px) {
  .current-container {
    width: 400px;
    margin-bottom: 10px;
  }

  .air {
    width: 200px;
    height: 250px;
    font-size: 28px;
    text-align: center;
  }
}
</style>
