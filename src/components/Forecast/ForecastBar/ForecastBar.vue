<template>
  <div class="bar">
    <div class="controller">
      <div class="controller__indicator"></div>
    </div>
    <div class="switch">
      <button class="switch__btn" @click="isHourMode = true">Hourly Forecast</button>
      <button class="switch__btn" @click="isHourMode = false">Weekly Forecast</button>
    </div>
    <div class="effects">
      <div :class="con_style_gradient"></div>
      <div class="effects__border"></div>
    </div>
    <div class="bar__list" v-if="!isHourMode">
      <ForecastCard v-for="day of props.days" :value="{
        'day': day,
        hour: undefined
      }" :key="day.date" :isHourMode />
    </div>
    <div class="bar__list" v-else>
      <ForecastCard v-for="hour of props.current_day?.hour" :value="{
        'day': undefined,
        hour: hour
      }" :key="hour.time" :isHourMode />
    </div>
    <div class="bar__navigation">

    </div>
  </div>
</template>

<script setup lang="ts">
import * as vue from "vue";
import ForecastCard from "../ForecastCard/ForecastCard.vue";
import type { Forecastday } from "../WeatherGPS.interfaces";

const con_style_gradient = vue.computed(() => ({
  "effects__gradient": true,
  "effects__gradient--left": isHourMode.value,
  "effects__gradient--right": !isHourMode.value
}))

const props = defineProps<{
  current_day: Forecastday | undefined,
  days: Forecastday[] | undefined
}>();

const isHourMode: vue.Ref<boolean> = vue.ref(false);

</script>

<style lang="scss" scoped>
.bar {
  position: absolute;
  z-index: 2000;
  bottom: 0px;

  width: 100%;
  height: 100%;

  max-height: 325px;

  background: linear-gradient(167.57deg, rgba(46, 51, 90, 0.26) -4.68%, rgba(28, 27, 51, 0.26) 95.45%);
  backdrop-filter: blur(50px);

  border-radius: 44px;

  box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 1) inset;

  &__list {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    gap: 12px;
    overflow-x: auto;
    padding: 0px 20px 20px;

    &::-webkit-scrollbar-button {
      width: 100%;
    }

    &::-webkit-scrollbar-thumb {
      opacity: 0;
    }

    &::-webkit-scrollbar {
      width: 100%;
    }
  }
}

.switch {
  display: grid;
  grid-template-columns: 1fr 1fr;

  &__btn {
    font-family: "SF Pro Text";
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.5px;
    text-align: center;

    color: rgba(235, 235, 245, 0.6);
    background-color: transparent;
    border: 0;

  }
}

.controller {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  &__indicator {
    width: 48px;
    height: 5px;
    top: 8px;
    left: 171px;
    gap: 0px;
    border-radius: 10px;
    opacity: 0px;

    background: rgba(0, 0, 0, 0.3);

  }
}

.effects {
  &__gradient {
    border-width: 3px 0 0;
    border-style: solid;

    transition: border-image .2s ease-in-out;

    mix-blend-mode: multiply;

    &--left {
      border-image: linear-gradient(90deg,
          rgba(255, 255, 255, 0) 3.33%,
          rgba(255, 255, 255, 1) 33.31%,
          rgba(255, 255, 255, 0) 63.31%,
          rgba(255, 255, 255, 0) 93.66%) 100% 13% 0% 11% stretch;
    }

    &--right {
      border-image: linear-gradient(-90deg,
          rgba(255, 255, 255, 0) 3.33%,
          rgba(255, 255, 255, 1) 33.31%,
          rgba(255, 255, 255, 0) 63.31%,
          rgba(255, 255, 255, 0) 93.66%) 100% 13% 0% 11% stretch;
    }
  }

  &__border {
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  }
}
</style>
