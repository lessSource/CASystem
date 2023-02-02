<template>
  <div class="app-layout" :class="{ collapse: true }">
    <div class="app-layout__mask" @click="true"></div>
    <div class="app-layout__left">
      <slider />
    </div>

    <div class="app-layout__right">
      <topbar />
      <process />
      <views />
    </div>
  </div>
</template>

<script setup lang="ts">
import Topbar from "../layout/components/TopbarView.vue";
import Slider from "../layout/components/SliderView.vue";
import process from "../layout/components/ProcessView.vue";
import Views from "../layout/components/ViewsPa.vue";
</script>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  background-color: #f7f7f7;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  &__left {
    overflow: hidden;
    height: 100%;
    width: 255px;
    transform: left 0.2s;
    background: orange;
  }

  &__right {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: calc(100% - 255px);
    background: blue;
  }

  &__mask {
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    z-index: 999;
  }

  @media only screen and (max-width: 768px) {
    .app-layout__left {
      position: absolute;
      left: 0;
      z-index: 9999;
      transition: transform 0.3s cubic-bezier(0.7, 0.3, 0.1, 1),
        box-shadow 0x cubic-bezier(0.7, 0.3, 0.1, 1);
    }

    .app-layout__right {
      width: 100%;
    }

    &.collapse {
      .app-layout__left {
        transform: translateX(-100%);
      }

      .app-layout__mask {
        display: none;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .app-layout__left,
    .app-layout__right {
      transition: width 0.2s ease-in-out;
    }

    .app-layout__mask {
      display: none;
    }

    &.collapse {
      .app-layout__left {
        width: 200px;
      }

      .app-layout__right {
        width: calc(100% - 200px);
      }
    }
  }
}
</style>