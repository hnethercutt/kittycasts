<script setup>
import { onMounted, toRefs } from "vue";
import CatText from "./CatText.vue";

const props = defineProps({
  condition: String
});

const {
  condition
} = toRefs(props);
onMounted(() => {
  let btns = document.querySelectorAll("button");
  const fur = document.getElementById("furColor");
  const eyes = document.getElementById("eyeColor");
  const teeth = document.getElementById("teeth");
  const blush = document.getElementById("blush");

  // When any customization button is clicked, updates the cat image
  btns.forEach(function (i) {
    i.addEventListener("click", function () {
      const id = i.getAttribute("id");
      const cl = i.className;

      if (cl == "fur-button") {
        fur.src = "/src/assets/images/fur/" + id + ".png";
      } else if (cl == "eyes-button") {
        eyes.src = "/src/assets/images/eyes/" + id + ".png";
      } else if (cl == "teeth-button") {
        teeth.src = "/src/assets/images/teeth/" + id + ".png";
      } else if (cl == "blush-button") {
        blush.src = "/src/assets/images/blush/" + id + ".png";
      }
    });
  });
});
</script>

<template>
  <div class="window-container">
    <div class="window-top"></div>
    <div class="cat-box">
      <!--Placeholder cat-->
      <div class="cat">
        <img class="test" />
        <img
          id="eyeColor"
          class="eye-color"
          src="/src/assets/images/eyes/pink.png"
        />
        <img
          id="furColor"
          class="fur-color"
          src="/src/assets/images/fur/grey-tabby.png"
        />
        <img
          id="blush"
          class="blush"
          src="/src/assets/images/blush/blush1.png"
        />
        <img id="teeth" class="teeth" src="/src/assets/images/teeth/two.png" />
      </div>
      <CatText :condition="condition"/>
    </div>
    <p>&#169; 2024 Hannah Nethercutt</p>
  </div>

  <div class="customize-container">
    <div class="customize-border"></div>
    <div class="customize">
      <input id="fur-tab" type="radio" name="customize" checked="checked" />
      <label for="fur-tab">Fur</label>
      <div class="options">
        <button class="fur-button" id="black"></button>
        <button class="fur-button" id="brown-tabby"></button>
        <button class="fur-button" id="grey-tabby"></button>
        <button class="fur-button" id="orange-tabby"></button>
        <button class="fur-button" id="orange-white"></button>
        <button class="fur-button" id="tuxedo"></button>
        <button class="fur-button" id="white"></button>
        <button class="fur-button" id="siamese"></button>
        <button class="fur-button" id="calico"></button>
      </div>
      <input id="eyes-tab" type="radio" name="customize" />
      <label for="eyes-tab">Eyes</label>
      <div class="options">
        <button class="eyes-button" id="aqua" type="submit"></button>
        <button class="eyes-button" id="blue"></button>
        <button class="eyes-button" id="green"></button>
        <button class="eyes-button" id="grey"></button>
        <button class="eyes-button" id="orange"></button>
        <button class="eyes-button" id="pink"></button>
        <button class="eyes-button" id="purple"></button>
        <button class="eyes-button" id="red"></button>
        <button class="eyes-button" id="yellow"></button>
      </div>
      <input id="teeth-tab" type="radio" name="customize" />
      <label for="teeth-tab">Teeth</label>
      <div class="options">
        <button class="teeth-button" id="teeth-none"></button>
        <button class="teeth-button" id="one"></button>
        <button class="teeth-button" id="two"></button>
      </div>
      <input id="blush-tab" type="radio" name="customize" />
      <label for="blush-tab">Blush</label>
      <div class="options">
        <button class="blush-button" id="blush-none"></button>
        <button class="blush-button" id="blush1"></button>
        <button class="blush-button" id="blush2"></button>
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<style>
p {
  margin-left: 50px;
  font-size: 18px;
}

.teeth {
  height: 500px;
  position: absolute;
}

.cat {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 115px;
}

.blush {
  height: 500px;
  position: absolute;
}

.eye-color {
  height: 500px;
  position: absolute;
}

.window-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.window-top {
  background: linear-gradient(
    90deg,
    rgba(234, 125, 255, 0.9) 0.01%,
    rgba(255, 218, 124, 0.9) 35%,
    rgba(126, 197, 255, 0.9) 69.5%,
    rgba(206, 125, 255, 0.9)
  );
  border-left: 5px solid rgba(0, 0, 0, 0.75);
  border-right: 5px solid rgba(0, 0, 0, 0.75);
  border-top: 5px solid rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 45px;
  left: 50px;
  position: relative;
}

.cat-box {
  align-items: center;
  border: 5px solid rgba(0, 0, 0, 0.75);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 600px;
  justify-content: center;
  gap: 250px;
  left: 50px;
  position: relative;
  width: 600px;
}

.fur-color {
  height: 500px;
  position: absolute;
}

.fur-button,
.eyes-button,
.teeth-button,
.blush-button {
  height: 120px;
  width: 125px;
  background-color: transparent;
  background-position: center;
  background-size: 300px;
  border-color: transparent;
  border-radius: 20px 20px 20px 20px;
  cursor: pointer;
}

.fur-button:hover,
.eyes-button:hover,
.teeth-button:hover,
.blush-button:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

#aqua {
  background-image: url("/src/assets/images/eyes/aqua.png");
}
#blue {
  background-image: url("/src/assets/images/eyes/blue.png");
}
#green {
  background-image: url("/src/assets/images/eyes/green.png");
}
#grey {
  background-image: url("/src/assets/images/eyes/grey.png");
}
#orange {
  background-image: url("/src/assets/images/eyes/orange.png");
}
#pink {
  background-image: url("/src/assets/images/eyes/pink.png");
}
#purple {
  background-image: url("/src/assets/images/eyes/purple.png");
}
#red {
  background-image: url("/src/assets/images/eyes/red.png");
}
#yellow {
  background-image: url("/src/assets/images/eyes/yellow.png");
}

#teeth-none {
  background-image: url("/src/assets/images/teeth/teeth-none.png");
  background-size: 800px;
}

#one {
  background-image: url("/src/assets/images/teeth/one.png");
  background-size: 800px;
}

#two {
  background-image: url("/src/assets/images/teeth/two.png");
  background-size: 800px;
}

#black {
  background-image: url("/src/assets/images/fur/black.png"),
    url("/src/assets/images/eyes/yellow.png");
  background-size: cover;
}

#brown-tabby {
  background-image: url("/src/assets/images/fur/brown-tabby.png"),
    url("/src/assets/images/eyes/aqua.png");
  background-size: cover;
}

#calico {
  background-image: url("/src/assets/images/fur/calico.png"),
    url("/src/assets/images/eyes/orange.png");
  background-size: cover;
}

#grey-tabby {
  background-image: url("/src/assets/images/fur/grey-tabby.png"),
    url("/src/assets/images/eyes/pink.png");
  background-size: cover;
}

#orange-tabby {
  background-image: url("/src/assets/images/fur/orange-tabby.png"),
    url("/src/assets/images/eyes/green.png");
  background-size: cover;
}

#orange-white {
  background-image: url("/src/assets/images/fur/orange-white.png"),
    url("/src/assets/images/eyes/blue.png");
  background-size: cover;
}

#siamese {
  background-image: url("/src/assets/images/fur/siamese.png"),
    url("/src/assets/images/eyes/orange.png");
  background-size: cover;
}

#tuxedo {
  background-image: url("/src/assets/images/fur/tuxedo.png"),
    url("/src/assets/images/eyes/orange.png");
  background-size: cover;
}

#white {
  background-image: url("/src/assets/images/fur/white.png"),
    url("/src/assets/images/eyes/grey.png");
  background-size: cover;
}

#blush-none {
  background-image: url("/src/assets/images/blush/blush-none.png");
  background-size: 200px;
}

#blush1 {
  background-image: url("/src/assets/images/blush/blush1.png");
  background-size: 200px;
}

#blush2 {
  background-image: url("/src/assets/images/blush/blush2.png");
  background-size: 200px;
}

.customize-border {
  height: 375px;
  width: 400px;
  position: absolute;
  border: 3px solid black;
  border-top: none;
  top: 287px;
  right: 107px;
  box-sizing: border-box;
  pointer-events: none;
}
.line {
  border-bottom: 3px solid black;
  width: 135px;
}

.customize {
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  margin: -10px;
}

label {
  background-color: rgba(159, 232, 250, 0.7);
  padding: 0.7em 1em;
  cursor: pointer;
  border: 3px solid rgba(0, 0, 0, 0.75);
  border-radius: 20px 20px 0px 0px;
}

.options {
  padding-left: 10px;
  order: 1;
  background-color: transparent;
  width: 510px;
}

input[type="radio"],
.options {
  display: none;
}

input[type="radio"]:checked + label {
  background-color: rgba(126, 197, 255, 0.9);
  border-bottom: none;
}

input[type="radio"]:checked + label + .options {
  display: block;
}

.customize-container {
  background-image: linear-gradient(
    transparent 11%,
    rgba(126, 197, 255, 0.9) 11%
  );
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.25),
    0px 4px 4px -4px rgba(0, 0, 0, 0.25);
  height: 418px;
  margin-left: 100px;
  margin-top: 152px;
  padding: 10px;
  width: 400px;
}
</style>