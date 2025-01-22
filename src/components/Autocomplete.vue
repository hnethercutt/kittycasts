<script setup>
import { fetchCity, fetchWeather } from "../services/WeatherApi.js";
import { onMounted, onUnmounted, ref, getCurrentInstance } from "vue";
import Search from "./Search.vue";

// Timer so autocomplete doesn't show one character at a time
let timerID;

// Holds city to send to API
const location = ref("");

// Ensures location data is current
const { emit } = getCurrentInstance();

onMounted(() => {
  if (input) {
    input.addEventListener("keyup", handleKeyup);
  }

  const searchButton = document.getElementById("searchButton");

  // Adds functionality to the search button
  searchButton.addEventListener("click", (event) => {
    event.preventDefault();

    location.value = document.getElementById("input").value;
    emit("city-selected", location.value);
  });
});

// Begins autocomplete
function handleKeyup(event) {
  clearTimeout(timerID);
  timerID = setTimeout(() => {
    fetchCity(event.target.value).then((cityData) => {
      displaySuggestions(cityData);
    });
  }, 250);
}

function displaySuggestions(data) {
  removeItems();

  // Creates list items to store the suggestions for display
  let listItem = document.createElement("li");
  listItem.classList.add("list-items");

  if (data) {
    // API returns an array of locations, the first 3 are inserted as list items/suggestions
    for (var i = 0; i < 3; i++) {
      listItem.innerHTML += `<li class = list-${i} id =${i}>${
        data[i].name + ", " + data[i].region}</li>`;
      document.querySelector(".list").appendChild(listItem);

      let items = document.querySelectorAll(".list-items");

      // Adds functionality to the suggestions
      items.forEach((item) => {
        item.addEventListener("click", (event) => {
          var index = event.target.id;
          location.value = data[index].name + ", " + data[index].region;
          console.log(location.value);
          emit("city-selected", location.value);

          removeItems();
        });
      });
    }
  }
}

// Clears autocomplete suggestions
function removeItems() {
  let items = document.querySelectorAll(".list-items");

  items.forEach((item) => {
    item.remove();
  });
}

// Ends timer when it's no longer needed
onUnmounted(() => {
  clearTimeout(timerID);
});
</script>

<template>
  <ul class="list" id="auto"></ul>
</template>

<style>
ul {
  list-style: none;
  padding: 0;
}

.list {
  width: 100%;
}

.list-0:hover {
  background-color: rgba(210, 144, 250, 0.4);
}

.list-1:hover {
  background-color: rgba(210, 144, 250, 0.4);
}

.list-2:hover {
  background-color: rgba(210, 144, 250, 0.4);
}

.list-items {
  margin-top: -10px;
  cursor: pointer;
  font-size: larger;
}
</style>
