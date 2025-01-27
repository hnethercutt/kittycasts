<script setup>
function darkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}
</script>

<template>
  <label class="theme-switch" for="checkbox">
    <input type="checkbox" id="checkbox" @click="darkMode()" />
    <div class="slider round"></div>
  </label>
</template>

<style>
.theme-switch {
  height: 34px;
  width: 60px;
  display: inline-block;
  position: relative;
}

.theme-switch input {
  display:none;
}

.slider {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #302c2c;
  transition: .4s;
  cursor: pointer;
}

.slider:before {
  height: 26px;
  width: 26px;
  position: absolute;
  left: 4px;
  bottom: 4px;
  background-color: #ffffff;
  background-image: url("/src/assets/icons/sun.png");
  background-position: center;
  background-size: 70%;
  content: "";
  transition: .4s;
}

input:checked + .slider {
  background-color: #ffffff;
}

input:checked + .slider:before {
  background-color: #302c2c;
  background-image: url("/src/assets/icons/moon.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>