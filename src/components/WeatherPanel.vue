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
  <div class="weather">
  <div class="current-container">
    <div class="location">
      {{ city && state ? city + ", " + state : city || state }}
    </div>
    <div class="temp-container">
      <div class="current-temp">
        {{ currentTemp ? currentTemp + "°" : currentTemp }}
      </div>
      <div class="temp-details">
        <div class="feels-like">
          {{ feelsLike ? "Feels Like: " + feelsLike + "°" : feelsLike }}
        </div>
        <div>{{ high ? "High: " + high + "°" : high }}</div>
        <div>{{ low ? "Low: " + low + "°" : low }}</div>
      </div>
    </div>
    <div class="condition">{{ condition }}</div>
    <div id="icon"></div>
  </div>

  <div class="air-container">
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
  </div>
</template>

<style>
.weather-icon {
  width: auto;
  height: 110px;
}

.current-container {
  align-items: center;
  background-color: rgba(252, 230, 188, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 350px;
  left: 50px;
  position: relative;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  top: 160px;
  width: 400px;
}

.location {
  display: flex;
  font-size: 36px;
  justify-content: center;
  margin-top: 15px;
}

.temp-container {
  display: flex;
  flex-direction: row;
}

.current-temp {
  color: rgb(24, 50, 117);
  display: flex;
  font-size: 84px;
  margin-top: 10px;
  justify-content: flex-start;
}

.temp-details {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  justify-content: space-around;
  margin-left: 25px;
  margin-top: 20px;
}

.feels-like {
  font-size: 28px;
}

.condition {
  font-size: 34px;
  margin-top: 20px;
}

.air-container {
  display: flex;
  flex-direction: row;
}

.air {
  align-items: center;
  background-color: rgba(198, 230, 255, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  font-size: 28px;
  height: 175px;
  justify-content: space-around;
  left: 50px;
  position: relative;
  top: 180px;
  width: 400px;
}

@media only screen and (max-width: 430px) {
  .current-container {
    height: 150px;
    width: 250px;
    left: 8px;
    top: 470px;
  }

  .air {
    width: 150px;
    height: 150px;
    top: 470px;
    left: 20px;
    font-size: 22px;
  }

  .weather {
    display: flex;
    flex-direction: row;
  }

  .location {
    font-size: 24px;
    margin-top: 5px;
  }

  .current-temp {
    font-size: 60px;
    margin-top: 5px;
  }

  .feels-like {
    font-size: 22px;
  }

  .temp-details {
    font-size: 18px;
    margin-left: 10px;
  }

  .condition {
    font-size: 26px;
    margin-top: 1px;
  }

  .weather-icon {
    position: fixed;
    left: 190px;
    top: 650px;
    height: 65px;
  }

  .temp-details {
    margin-top: 10px;
  }
}
</style>
