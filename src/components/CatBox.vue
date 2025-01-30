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

// Toggle customization menu
function showCustom()
{
  document.getElementById("customBox").style.display = "block";
  document.getElementById("customButton").style.display = "none";
  document.getElementById("closeButton").style.display = "block";
}

function closeCustom()
{
  document.getElementById("customBox").style.display = "none";
  document.getElementById("closeButton").style.display = "none";
  document.getElementById("customButton").style.display = "block";
}

</script>

<template>
  <!--Both the cat box and the customization box-->
  <div class="cat-box-container">
  <!--The entire cat box-->
  <div class="cat-box">
    <button id="customButton" class="custom-button" @click="showCustom()">Click Here to Customize!</button>
    <button id="closeButton" class="close-button" @click="closeCustom()">Click Here to Finish Customizing!</button>
      <!--Just the box for the cat-->
      <div class="box">
      <!--The cat itself-->
        <div class="cat">
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
  </div>

  <!--The entire customization box-->
  <div class="customize-box" id="customBox">
    <!--Just the part of the box where the options are-->
    <div class="customize">
    <!--The tabs and buttons-->
    <div class="customize-sections">
      <input id="fur-tab" type="radio" name="customize" checked="checked" />
      <label class="custom-label" for="fur-tab">Fur</label>
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
      <label class="custom-label" for="eyes-tab">Eyes</label>
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
      <label class="custom-label" for="teeth-tab">Teeth</label>
      <div class="options">
        <button class="teeth-button" id="teeth-none"></button>
        <button class="teeth-button" id="one"></button>
        <button class="teeth-button" id="two"></button>
      </div>
      <input id="blush-tab" type="radio" name="customize" />
      <label class="custom-label" for="blush-tab">Blush</label>
      <div class="options">
        <button class="blush-button" id="blush-none"></button>
        <button class="blush-button" id="blush1"></button>
        <button class="blush-button" id="blush2"></button>
      </div>
    </div>
    </div>
</div>
</div>
</template>

<style>
.cat-box-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cat-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.close-button {
  display: none;
}

.custom-button,
.close-button {
  background: linear-gradient(
    90deg,
    rgba(234, 125, 255),
    rgba(255, 218, 124),
    rgba(126, 197, 255),
    rgba(206, 125, 255)
  );
  border-left: 3px solid rgba(0, 0, 0, 0.8);
  border-right: 3px solid rgba(0, 0, 0, 0.8);
  border-top: 3px solid rgba(0, 0, 0, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 25px;
  font-family: "Chela One", system-ui;
  font-size: 16px;
  cursor: pointer;
  color: #000;
}

.box {
  align-items: center;
  border: 3px solid rgba(0, 0, 0);
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
  gap: 130px;
  pointer-events: none;
}

.cat {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
}

.eye-color {
  height: 300px;
  position: absolute;
}

.fur-color {
  height: 300px;
  position: absolute;
}

.blush {
  height: 300px;
  position: absolute;
}

.teeth {
  height: 300px;
  position: absolute;
}

.customize-box {
  display: none;
  margin: 10px;
}

.customize {
  box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.25),
    0px 4px 4px -4px rgba(0, 0, 0, 0.25);
  height: 650px;
  width: 300px;
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
}

.customize-sections {
  display: flex;
  flex-wrap: wrap;
}

.custom-label {
  background-color: rgba(126, 197, 255, 0.7);
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0.7em 1em;
  cursor: pointer;
  border-radius: 20px 20px 0px 0px;
  border: transparent;
}

.options {
  width: 300px;
  padding-left: 20px;
  padding-bottom: 10px;
  background-color: 
  rgba(126, 197, 255, 0.9);
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
  order: 1;
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
  background-color: rgba(255, 255, 255, 0.5);
}

.line {
  border-bottom: 100px solid black;
  width: 38px;
}

input[type="radio"],
.options {
  display: none;
}

input[type="radio"]:checked + .custom-label {
  background-color: rgba(126, 197, 255, 0.9);
  border-bottom: none;
}

input[type="radio"]:checked + .custom-label + .options {
  display: block;
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


@media screen and (min-width: 480px) {
  .box {
    height: 350px;
    width: 350px;
    gap: 145px;
  }

  .cat {
    margin-top: 100px;
  }

  .options {
  width: 400px;
  padding-left: 10px;
  }

  .eye-color,
  .fur-color,
  .blush,
  .teeth {
    height: 350px;
  }

  .customize {
    height: 400px;
    width: 400px;
  }

  .line {
    width: 135px;
  }

  .customize-box {
    margin: 10px;
  }

  .custom-button,
  .close-button {
    height: 30px;
    font-size: 20px;
  }
}

@media screen and (min-width: 768px) 
{
  .box {
    height: 400px;
    gap: 160px;
  }
  
  .cat {
    margin-top: 125px;
  }
}

@media screen and (min-width: 1025px) 
{
  .box {
    height: 450px;
    width: 450px;
    gap: 175px;
  }

  .eye-color,
  .fur-color,
  .blush,
  .teeth {
    height: 400px;
  }

  .custom-button,
  .close-button {
    height: 40px;
    font-size: 22px;
  }
}
</style>