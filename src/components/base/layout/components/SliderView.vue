<template>
  <div class="app-slider">
    <div class="app-slider__logo" @click="toHome">
      <img src="https://b-img-storage.oss-cn-hangzhou.aliyuncs.com/blog/wallpaper_1.jpeg" />
      <span v-if="!true || false">{{ "Name" }}</span>
    </div>

    <div class="app-slider__container">
      <b-menu />
    </div>
  </div>
</template>

<script lang="ts" setup>
import BMenu from "./bmenuView";


function toHome() {
  
}
</script>

<style lang="scss">
.app-slider {
  height: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  // background-color: #bcbfcb;

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    cursor: pointer;

    img {
      height: 30px;
      width: 30px;
    }

    span {
      color: #fff;
      font-weight: bold;
      font-size: 26px;
      margin-left: 10px;
      font-family: inherit;
      white-space: nowrap;
    }
  }

  &__container {
    height: calc(100% - 80px);
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  &__menu {
    &.el-popper {
      &.is-light {
        border: 0;
      }
    }

    .el-menu {
      border-right: 0;
      background-color: transparent;

      &--popup {

        .cl-svg,
        span {
          color: #000;
        }
      }

      .el-sub-menu__title,
      &-item {

        &.is-active,
        &:hover {
          background-color: var(--color-primary) !important;

          .cl-svg,
          span {
            color: #fff;
          }
        }
      }

      .el-sub-menu__title,
      &-item,
      &__title {
        color: #eee;
        letter-spacing: 0.5px;
        height: 50px;
        line-height: 50px;

        .wrap {
          width: 100%;
        }

        .cl-svg {
          font-size: 16px;
        }

        span {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 1px;
          margin-left: 10px;
          user-select: none;
        }
      }

      &--collapse {
        .wrap {
          text-align: center;

          .cl-svg {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
