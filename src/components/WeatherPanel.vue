<script setup>
import { toRefs } from 'vue';

const props = defineProps({
    city: String,
    state: String,
    localTime: String,
    currentTemp: Number,
    feelsLike: Number,
    condition: String,
    gust: Number,
    wind: Number,
    humidity: Number,
    forecast: Object,
    high: Number,
    low: Number
});

const { city, state, localTime, currentTemp, feelsLike, condition, gust, wind, humidity, forecast, high, low } = toRefs(props);

</script>


<template>
<div class="current">
    <div class="location">{{ city && state ? city + ', ' + state : city || state }}</div>
    <div class="local-time">{{ localTime }}</div>
    <div class="current-temp">{{ currentTemp ? currentTemp + '°' : currentTemp}}</div>
    <div class="temps">{{ feelsLike ? 'Feels Like: ' + feelsLike + '°' : feelsLike}}
        {{ low ? 'Low: ' + low + '°': low }}
        {{ high ? 'High: ' + high + '°': high }}  
    </div>

    <div class="condition">{{ condition }}</div>
    <div class="air">
    <div class="wind">{{ wind ? 'Wind: ' + wind + ' mph' : wind }}</div>
    <div class="gust">{{ gust ? 'Gust: ' + gust + ' mph' : gust }}</div>
    <div class="humidity">{{ humidity ? 'Humidity: ' + humidity + '%' : humidity }}</div>
    </div>
</div>
</template>

<style>

.current {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 160px;
    left: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 218, 124, 0.37);
    width: 372px;
    height: 455px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.air {
    margin-top: 15px;
}
.temps {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 15px;
}

.icon {
    height: 100px;
    margin-top: 5px;
}
.location {
    margin-top: 15px;
    font-size: 25px;
}

.local-time {
    font-size: 15px;
}

.current-temp {
    margin-top: 20px;
    font-size: 72px;
    color: rgba(0, 23, 81, 0.72);
}

.condition {
    margin-top: 15px;
    font-size: 20px;
}

</style>