<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const txt = "Testing testing";
  let start = 0;

  // Creates the typewrite effect in the text box when the page loads
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
});
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
  font-size: 16px;
  height: 100px;
  align-items: center;
  margin-top: 20px;
  width: 500px;
}
</style>
