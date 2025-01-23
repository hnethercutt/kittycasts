<script setup>
function darkMode() {
  const body = document.body;
  const checkbox = document.getElementById("checkbox");
  const github = document.getElementById("github");

  body.classList.toggle("dark-mode");

  if(checkbox.checked)
  {
    github.src="/src/assets/images/github-mark-white.png";
  }
  else
  {
    github.src="/src/assets/images/github-mark.png";
  }
}

</script>

<template>
    <body>
        <div class="theme-switch-wrapper">
            <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" @click="darkMode()" />
                <div class="slider round"></div>
            </label>
        </div>
        <a href="https://github.com/conranh/kittycasts">
            <img src="/src/assets/images/github-mark.png" class="github-link" id="github"/>
        </a>
    </body>
</template>

<style>
body {
  background: linear-gradient(rgba(234, 125, 255, 1), 
            rgba(255, 218, 124, 1), 
            rgba(126, 197, 255, 1), 
            rgba(206, 125, 255, 1));
}

.dark-mode {
    color: #ffffff;
    background: linear-gradient(rgb(1, 1, 30),
            rgb(19, 1, 44),
            rgb(54, 1, 65), 
            rgb(69, 35, 2));

    .theme-switch {
        border: none;
        background: transparent;
    }

    input {
        color: #ffffff;
    }

    input::placeholder {
        color: #ffffff;
    }

    .search-bar {
        border-color: rgb(255, 255, 255, 0.5);
    }

    .search-button {
        background-image: url("/src/assets/images/search-white.png");
    }

    .list-0:hover,
    .list-1:hover,
    .list-2:hover {
        background-color: rgba(165, 95, 15, 0.4);
    }

    .current-container {
        background-color: rgba(10, 8, 38, 0.7);
    }

    .current-temp {
        color: rgb(241, 158, 225);
    }

    .air {
        background-color: rgba(39, 20, 45, 0.7);
    }

    .window-top {
        background: linear-gradient(
        90deg,
        rgb(3, 3, 63),
        rgb(37, 2, 86),
        rgb(82, 2, 98),
        rgb(109, 56, 2));
        border-left: 3px solid rgb(255, 255, 255, 0.5);
        border-right: 3px solid rgb(255, 255, 255, 0.5);
        border-top: 3px solid rgb(255, 255, 255, 0.5);
    }

    .cat-box {
        border: 3px solid rgb(255, 255, 255, 0.5);
    }

    .text-box {
        background-color: rgb(39, 39, 39);
        border: 3px solid rgba(0, 0, 0, 0.8);
        color: #fff;
    }

    .customize-container {
    background-image: linear-gradient(
        transparent 11%,
        rgba(247, 124, 222, 0.2) 11%
        );
    }
    .customize-border {
        border: 3px solid rgb(255, 255, 255, 0.5);
    }

    label {
        background-color: rgba(247, 124, 222, 0.5);
        border: 3px solid rgb(255, 255, 255, 0.5);
    }

    .line {
        border-bottom: 3px solid rgb(255, 255, 255, 0.5);
        width: 135px;
    }

    input[type="radio"]:checked + label {
        background-color: rgba(247, 124, 222, 0.2);
    }
}

.theme-switch-wrapper {
  display: flex;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 30px;
}

.theme-switch {
  display: inline-block;
  height: 34px;
  position: relative;
  width: 60px;
  background-color: transparent;
  border: none;
}

.theme-switch input {
  display:none;
}

.slider {
  background-color: #302c2c;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: .4s;
}

.slider:before {
  background-color: #ffffff;
  background-image: url("/src/assets/icons/sun.png");
  background-position: center;
  background-size: 70%;
  bottom: 4px;
  content: "";
  height: 26px;
  left: 4px;
  position: absolute;
  transition: .4s;
  width: 26px;
}

input:checked + .slider {
  background-color: #ffffff;
}

input:checked + .slider:before {
  background-color: #302c2c;
  transform: translateX(26px);
  background-image: url("/src/assets/icons/moon.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 70%;
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.github-link {
  width: 50px;
  height: auto;
  position: absolute;
  right: 100px;
  top: 20px;
}

</style>