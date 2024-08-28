<script setup>
import { watch, toRefs } from "vue";

const props = defineProps({
  condition: String,
});

const { condition } = toRefs(props);

// Determines the text box output based on the weather condition and displays it
watch(
  () => props.condition,
  (newValue) => {
    let start = 0;
    let txt = condition.value;
    document.getElementById("textBox").innerHTML = "";

    // Using very basic text for now just to make sure it works, will update these later
    switch (txt) {
      case "Light rain shower":
      case "Light rain":
      case "Light drizzle":
      case "Patchy light rain":
      case "Patchy light drizzle":
        txt = "It's a little rainy";
        break;

      case "Patchy rain possible":
        txt = "Rain is possible today";

      case "Sunny":
        txt = "It's sunny";
        break;

      case "Clear":
        txt = "It's clear";
        break;

      case "Partly cloudy":
        txt = "It's partly cloudy";
        break;

      case "Overcast":
        txt = "It's overcast";
        break;

      case "Mist":
        txt = "It's misty";
        break;

      case "Patchy snow possible":
        txt = "It might snow today";

      case "Light sleet showers":
      case "Light sleet":
      case "Moderate or heavy sleet showers":
      case "Moderate or heavy sleet":
        txt = "It's sleeting";
        break;

      case "Patchy sleet possible":
        txt = "Sleet is possible today";
        break;

      case "Patchy freezing drizzle possible":
        txt = "Patchy freezing drizzle is possible today";
        break;

      case "Thundery outbreaks possible":
        txt = "There may be thunder today";
        break;

      case "Blowing snow":
        txt = "It's blowing snow";
        break;

      case "Blizzard":
        txt = "There is a blizzard";
        break;

      case "Fog":
        txt = "It's foggy";
        break;

      case "Freezing fog":
        txt = "There is freezing fog";
        break;

      case "Freezing drizzle":
      case "Heavy freezing drizzle":
        txt = "There is freezing drizzle";
        break;

      case "Moderate rain at times":
      case "Moderate rain":
      case "Heavy rain at times":
      case "Heavy rain":
      case "Moderate or heavy shower":
      case "Torrential rain shower":
        txt = "It's raining";
        break;

      case "Light freezing rain":
      case "Moderate or heavy freezing rain":
        txt = "There is freezing rain";
        break;

      case "Patchy light snow":
      case "Light snow":
      case "Light snow showers":
        txt = "It's a little snowy";
        break;

      case "Patchy moderate snow":
      case "Moderate snow":
      case "Patchy heavy snow":
      case "Heavy snow":
      case "Moderate or heavy snow showers":
        txt = "It's snowing";
        break;

      case "Ice pellets":
      case "Light showers of ice pellets":
      case "Moderate or heavy showers of ice pellets":
        txt = "There are ice pellets";
        break;

      case "Patchy light rain with thunder":
        txt = "It's a little rainy and thundering";

      case "Moderate or heavy rain with thunder":
        txt = "It's raining and thundering";

      case "Patchy light snow with thunder":
        txt = "It's a little snowy and thundering";

      case "Moderate or heavy snow with thunder":
        txt = "It's snowing and thundering";
        break;
    }

    // Creates the typewriter effect for the text display
    const catText = setInterval(function () {
      document.getElementById("textBox").innerHTML += txt.charAt(start);
      if (++start == txt.length) {
        clearInterval(catText);
        $("#textBox").trigger(
          $.Event("keypress", {
            keyCode: 13,
          })
        );
      }
    }, 100);
  }
);
</script>

<template>
  <div id="textBox" class="text-box"></div>
</template>

<style>
.text-box {
  background-color: rgba(0, 0, 0, 0.8);
  border: 3px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25) inset;
  color: #fff;
  display: flex;
  justify-content: center;
  font-family: "Share Tech Mono", monospace;
  font-weight: 400;
  font-size: 18px;
  height: 100px;
  align-items: center;
  margin-top: 20px;
  width: 500px;
}
</style>
