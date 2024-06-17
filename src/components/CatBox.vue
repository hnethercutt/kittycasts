<template>
    <div class="window-container">
        <div class="window-top"></div>
        <div class="cat-box">
            <!--Placeholder cat-->
            <img class="cat" src="/src/assets/images/weather-cat.png">
            <div class="text-box">
                <p></p>
            </div>
        </div>
    </div>
    <div class="customize"></div>
    </template>
    
    <style>
    
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
        height: 49px;
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
        height: 690px;
        justify-content: center;
        left: 50px;
        position: relative;
        width: 700px;
    }
    
    .cat {
        height: 450px;
    }
    
    .text-box {
        background-color: rgba(0, 0, 0, 0.8);
        border: 3px solid rgba(255, 255, 255, 0.8);
        box-shadow: 
            0px 4px 4px rgba(0, 0, 0, 0.25), 
            0px 4px 4px rgba(0, 0, 0, 0.25), 
            0px 4px 4px rgba(0, 0, 0, 0.25) inset;
        color: #fff;
        font-size: 16px;
        height: 100px;
        margin-top: 25px;
        text-align: center;
        width: 500px;
    }
    
    .customize {
        background-color: rgba(126, 197, 255, 0.9);
        border: 3px solid rgba(0, 0, 0, 0.75);
        box-shadow: 
            0px 4px 4px rgba(0, 0, 0, 0.25), 
            0px 4px 4px rgba(0, 0, 0, 0.25);
        height: 739px;
        margin-left: 100px;
        margin-top: 75px;
        width: 700px;
    }
    
    </style>