<script setup>
import { ref } from "vue";
import Search from "./components/Search.vue";
import WeatherPanel from "./components/WeatherPanel.vue";
import CatBox from "./components/CatBox.vue";
import ThemeToggler from "./components/ThemeToggler.vue";

const weatherData = ref(null);

function handleWeatherData(data) {
  weatherData.value = data;
}

</script>

<template>
<header class="header">
  <img class="logo" src="/src/assets/images/kitty.png" />
  <a class="title">kittycaSts</a>
    <input class="side-menu" type="checkbox" id="side-menu">
    <label class="hamburger" for="side-menu">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="hamburger">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </label>
    <nav class="nav">
      <ul class="menu">
        <li><div class="github">
          <div class="github-text">GitHub Repository</div>
            <a class="github-icon" href="https://github.com/conranh/kittycasts"></a>
          </div>
        </li>
        <li><div class="theme">
          <div class="theme-text">Light/Dark Mode</div>
            <a><ThemeToggler/></a>
          </div>
        </li>
    </ul>
  </nav>  
</header>
<div class="search-stuff">
<Search @weather-data="handleWeatherData" />
</div>
<div class="container">
  <div class="cat-stuff">
  <CatBox v-bind="weatherData"/>
  </div>
  <div class="weather-stuff">
  <WeatherPanel v-bind="weatherData" />
  </div>
</div>
<footer>© 2025 Hannah Nethercutt</footer>
</template>

<style>
footer {
  position: absolute;
  left: 0;
  right: 0;
  margin-bottom: 0;
  text-align: center;
  font-size: 18px;
}

.header{
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}

.logo{
  height: 80px;
  padding: 5px;
  font-size: 60px;
}

.title {
  padding-top: 22px;
  position: absolute;
  font-size: 40px;
  font-weight: 500;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.side-menu {
  display: none;
} 

.side-menu:checked ~ nav{
  max-height: 20%;
}

.hamburger{
  height: 30px;
  width: 30px;
  padding: 16px;
  padding-right: 2px;
  float: right;
  cursor: pointer;
}

.nav{
  width: 100%;
  height: 100%;
  max-height: 0;
  padding-top: 0px;
  position: relative;
  right: 0;
  background-color: transparent;
  overflow: hidden;
}
  
.menu a{
  padding: 10px;
  display: block;
  color: #000;
  font-size: 18px;
  text-align: right;
}

.github {
  padding-right: 5px;
  display: flex;
  align-items: center;
}
    
.github-text {
  margin-left: auto;
}

.github-icon {
  height: 30px;
  width: 30px;
  margin: 10px;
  background-image: url("/src/assets/icons/github-mark.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.theme {
  padding-right: 5px;
  display: flex;
  align-items: center;
}

.theme-text {
  margin-left: auto;
}

.container {
  width: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1em;
}

.search-stuff {
  display: flex;
  justify-content: center;
}

@media screen and (min-width: 480px) {
  .title {
    padding: 14px;
    font-size: 56px;
  }

  .hamburger {
    width: 40px;
    height: 40px;
    padding-top: 16px;
  }
}

@media screen and (min-width: 768px)
{
  .nav {
    width: fit-content;
    max-height: none;
    top: 0;
    position: relative;
    float: right;
    background-color: transparent;
    box-shadow: none;
  }

  .menu li {
    float: left;
  }

  .menu a:hover {
    background-color: transparent;
  }

  .hamburger {
    display: none;
  }

  .github-icon {
    margin: 2px;
  }

  .github-text {
    display: none;
  }

  .theme-text {
      display: none;
  }

  .container {
    flex-direction: row;
  }
}

</style>
