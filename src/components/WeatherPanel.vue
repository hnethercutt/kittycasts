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
  <!--Both current and air-container panels-->
  <div class="weather-container">
    <!--Holds both sections within the current panel-->
    <div class="current-container">
      <div class="location">{{ city && state ? city + ", " + state : city || state }}</div>
      <!--Section 1-->
      <div class="current-details">
        <div class="conditions">
          <div class="current-temp">{{ currentTemp ? currentTemp + "°" : currentTemp }}</div>
          <div class="condition">{{ condition }}</div>
          <div id="icon"></div>
        </div>
      <!--Section 2-->
      <div class="temp-details">  
        <div class="feels-like">{{ feelsLike ? "Feels Like: " + feelsLike + "°" : feelsLike }}</div>
        <div>{{ high ? "High: " + high + "°" : high }}</div>
        <div>{{ low ? "Low: " + low + "°" : low }}</div>
      </div>
    </div>
  </div>
    <div class="air-container">
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
  margin-top: 10px;
}

.current-details {
  display: flex;
  gap: 2em;
}

.conditions {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.current-temp {
  color: rgb(24, 50, 117);
  font-size: 46px;
}

.condition {
  font-size: 26px;
}

.weather-icon {
  height: 75px;
  margin-top: 5px;
}

.temp-details {
  font-size: 18px;
  margin-top: 40px;
}

.feels-like {
  font-size: 20px;
}

.air-container {
  height: 80px;
  width: 300px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: rgba(198, 230, 255, 0.9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
}


@media screen and (min-width: 480px) {
  .weather-container {
    display: flex;
  }

  .current-container {
    width: 300px;
  }

  .air-container {
    width: 150px;
    height: 200px;
    margin-top: 0;
    margin-left: 10px;
    gap: 1em;
  }
}

@media screen and (min-width: 768px) {
  .weather-container {
    flex-direction: column;
  }
  
  .location {
    font-size: 30px;
  }

  .current-container {
    width: 350px;
    height: 250px;
  }

  .condition {
    font-size: 28px;
  }

  .air-container {
    width: 350px;
    height: 180px;
    margin-left: 0;
    margin-top: 10px;
    gap: 30px;
    font-size: 24px;
  }

  .temp-details {
  
    font-size: 24px;
    margin-top: 40px;
  }
  
  .feels-like {
    font-size: 24px;
  }

  .current-temp {
  font-size: 72px;
  }
}

@media screen and (min-width: 1025px) {
  .current-container {
    width: 400px;
    height: 300px;
    margin-bottom: 10px;
  }

  .condition {
    font-size: 32px;
  }

  .weather-icon {
    height: 100px;
    margin-top: 0;
  }

  .temp-details {
    font-size: 28px;
    margin-top: 70px;
  }

  .feels-like {
    font-size: 28px;
  }

  .current-temp {
    font-size: 84px;
  }

  .air-container {
    width: 400px;
    font-size: 26px;
  }
}
</style>
