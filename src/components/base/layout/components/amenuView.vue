<template>
  <div class="a-menu">
    <el-menu
      :default-action="active"
      mode="horizontal"
      background-color="transparent"
      @select="select"
    >
      <el-menu-item>
        <cl-svg v-if="true" :size="18" />
        <span class="a-menu__name"> ddd </span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" name="a-menu" setup>
import { onMounted, ref } from "vue";

// 选中标识
const active = ref("");

// 选中导航
function select(index: any) {
  console.log(index);
}
</script>

<style lang="scss" scoped>
.a-menu {
  margin: 5px 0 0 5px;

  .el-menu {
    height: 40px;
    background: transparent;
    border: 0;

    :deep(.el-sub-menu__title) {
      border: 0 !important;
    }

    :deep(.el-menu-item) {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 15px;
      background: transparent;
      border: 0;
      color: #999;

      span {
        font-size: 12px;
        margin-left: 3px;
        line-height: normal;
      }

      &:hover {
        background: transparent;
      }

      &.is-active {
        color: var(--color-primary);
        border-radius: 5px 5px 0 0;
        background: #fff;
        color: #000;
      }

      .cl-svg {
        margin-right: 5px;
      }
    }
  }
  &__name {
    margin-left: 8px;
  }
}
</style>