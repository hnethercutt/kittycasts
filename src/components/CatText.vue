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
      case "Patchy rain possible":
        txt = "I hope my fur doesn't get wet!";
        break;

        case "Moderate rain at times":
      case "Moderate rain":
      case "Moderate or heavy shower":
        txt = "Don't fur-get your umbrella!";
        break;

      case "Heavy rain at times":
      case "Heavy rain":
      case "Torrential rain shower":
        txt = "It's raining cats and dogs outside!";
        break;

      case "Sunny":
        txt = "Purr-fect weather for sunbathing!";
        break;

      case "Clear":
        txt = "Purr-fect night for stargazing!";
        break;

      case "Partly cloudy":
      case "Overcast":
        txt = "Purr-haps the sun is just feeling a little shy today.";
        break;

      case "Mist":
        txt = "Mist-erious vibes out there. Purr-haps a good day for a nap!";
        break;

      case "Fog":
        txt = "It's like the world put on a fluffy gray blanket--cozy!";
        break;

      case "Freezing fog":
        txt = "The air feels like a frosty mystery—time to bundle up!";
        break;

      case "Freezing drizzle":
      case "Heavy freezing drizzle":
        txt = "It’s drizzling, and it’s freezing... guess I’ll stay pawsitively cozy inside!";
        break;

      case "Light sleet showers":
      case "Light sleet":
      case "Moderate or heavy sleet showers":
      case "Moderate or heavy sleet":
      case "Patchy sleet possible":
      case "Patchy freezing drizzle possible":
      case "Light freezing rain":
      case "Moderate or heavy freezing rain":
        txt = "Rain or snow? Can't decide, so let's do both!";
        break;

      case "Ice pellets":
      case "Light showers of ice pellets":
      case "Moderate or heavy showers of ice pellets":
        txt = "Nature’s tiny ice bombs are falling—good thing I’m inside!";
        break;

      case "Patchy snow possible":
      case "Patchy light snow":
      case "Blowing snow":
      case "Light snow":
      case "Light snow showers":
        txt = "Make sure you dress warm today!";

      case "Patchy moderate snow":
      case "Moderate snow":
      case "Patchy heavy snow":
      case "Heavy snow":
      case "Moderate or heavy snow showers":
        txt = "Fur-tunately, I have a built-in coat for this weather!";
        break;

      case "Blizzard":
        txt = "Good thing I'm an indoor cat!";
        break;

      case "Patchy light snow with thunder":
      case "Moderate or heavy snow with thunder":
        txt = "Snow with thunder—guess the clouds are trying to shake things up!";

      case "Thundery outbreaks possible":
      case "Patchy light rain with thunder":
        txt = "The sky’s growling louder than my tummy at dinner!";
        break;

      case "Moderate or heavy rain with thunder":
        txt = "Thunder and heavy rain make for the purr-fect napping soundtrack!";
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
  <div id="textBox" class="text-box">Meow! Search for your city to get the weather!</div>
</template>

<style>
.text-box {
  width: 280px;
  height: 50px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "Share Tech Mono", monospace;
  font-weight: 400;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0.8);
  border: 3px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25) inset;
  color: #fff;
}

@media screen and (min-width: 480px) {
  .text-box {
    width: 300px;
    height: 70px;
  }
}

@media screen and (min-width: 1025px) {
  .text-box {
    width: 375px;
    height: 100px;
    font-size: 20px;
  }
}

</style>
