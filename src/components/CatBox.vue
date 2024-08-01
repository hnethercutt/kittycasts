<script setup>
import { onMounted } from 'vue';
import CatText from './CatText.vue';

onMounted(() => {
    let btns = document.querySelectorAll('button');
    const fur = document.getElementById("furColor");
    const eyes = document.getElementById("eyeColor");
    const teeth = document.getElementById("teeth");
    const blush = document.getElementById("blush");

    // When any customization button is clicked, updates the cat image
    btns.forEach(function (i) {
        i.addEventListener('click', function() {
            const id = i.getAttribute("id");
            const cl = i.className;


            if(cl == "fur-button")
            {
                fur.src="/src/assets/images/fur/" + id + ".png";
            }
            else if(cl == "eyes-button")
            {
                eyes.src="/src/assets/images/eyes/" + id + ".png";
            }
            else if(cl == "teeth-button")
            {
                teeth.src="/src/assets/images/teeth/" + id + ".png";
            }
            else if(cl == "blush-button")
            {
                blush.src="/src/assets/images/blush/" + id + ".png";
            }
        })
    })
})
</script>

<template>
    <div class="window-container">
        <div class="window-top"></div>
        <div class="cat-box">
            <!--Placeholder cat-->
            <div class="cat">
            <img class="test">
            <img id="eyeColor" class="eye-color" src = "/src/assets/images/eyes/pink.png">
            <img id="furColor" class="fur-color" src="/src/assets/images/fur/grey-tabby.png">
            <img id="blush" class="blush" src="/src/assets/images/blush/blush1.png">
            <img id="teeth" class="teeth" src="/src/assets/images/teeth/two.png">
            </div>
            <CatText v-bind="weatherData"/>
        </div>
    </div>

    <div class="customize-container">
    <div class="customize-border"></div>
        <div class="customize">
            <input id="fur-tab" type="radio" name="customize" checked="checked"/>
            <label for="fur-tab">Fur</label>
            <div class="options">
                <button class="fur-button" id="black">Black</button>
                <button class="fur-button" id="brown-tabby">Brown tabby</button>
                <button class="fur-button" id="grey-tabby">Grey tabby</button>
                <button class="fur-button" id="orange-tabby">Orange tabby</button>
                <button class="fur-button" id="orange-white">Orange/White</button>
                <button class="fur-button" id="tuxedo">Tuxedo</button>
                <button class="fur-button" id="white">White</button>
            </div>
            <input id="eyes-tab" type="radio" name="customize"/>
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
            <input id="teeth-tab" type="radio" name="customize"/>
            <label for="teeth-tab">Teeth</label>
            <div class="options">
                <button class="teeth-button" id="one">One tooth</button>
                <button class="teeth-button" id="two">Two teeth</button>
            </div>
            <input id="blush-tab" type="radio" name="customize"/>
            <label for="blush-tab">Blush</label>
            <div class="options">
                <button class="blush-button" id="blush1">Blush 1</button>
                <button class="blush-button" id="blush2">Blush 2</button>
            </div>
        <div class="line"></div>
    </div>
</div>
</template>
    
    <style>
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
        margin-top: 75px;
    }
    
    .window-top {
        background: linear-gradient(90deg, 
            rgba(234, 125, 255, 0.9) 0.01%,
            rgba(255, 218, 124, 0.9) 35%, 
            rgba(126, 197, 255, 0.9) 69.5%, 
            rgba(206, 125, 255, 0.9));
        border-left: 5px solid rgba(0, 0, 0, 0.75);
        border-radius: 20px 20px 0px 0px;
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
        border-radius: 0px 0px 20px 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        height: 650px;
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
        height: 125px;
        width: 125px;
        background-color: transparent;
        background-position: center;
        background-size: 300px;
        border: none; 
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

    .customize-border {
        height: 380px;
        width: 510px;
        position: absolute;
        border: 3px solid black;
        border-top: none;
        top: 333px;
        left: 1256px;
        box-sizing: border-box;
        pointer-events: none;
    }
    .line {
        border-bottom: 3px solid black;
        width: 210px;
    }
    
    .customize {
        display:flex;
        flex-wrap: wrap;
        width: 600px;
        margin: -10px;
    }

    label {
        background-color: rgba(159, 232, 250, 0.7);
        padding: .7em 1em;
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

    input[type=radio], .options {
        display: none;
    }


    input[type=radio]:checked + label {
        background-color: rgba(126, 197, 255, 0.9);
        border-bottom: none;
    }

    input[type=radio]:checked + label + .options {
        display: block;
    }

    .customize-container {
        background-image: linear-gradient(transparent 11%, rgba(126, 197, 255, 0.9) 11%);
        box-shadow: 
            0px 4px 4px -4px rgba(0, 0, 0, 0.25), 
            0px 4px 4px -4px rgba(0, 0, 0, 0.25);
        height: 420px;
        margin-left: 100px;
        margin-top: 200px;
        padding: 10px;
        width: 510px;
    }
    </style>