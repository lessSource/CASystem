<template>
  <div class="route-nav">
    <p v-if="false" class="title">测试一下</p>
    <template v-else>
      <el-breadcrumb>
        <el-breadcrumb-item v-for="(item, index) in list" :key="index"
          >{{ item }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
  </div>
</template>

<script lang="ts" name="route-nav" setup>
const list = ["1", "2", "3"];
</script>

<style lang="scss" scoped>
.route-nav {
  white-space: nowrap;
  background-color: blueviolet;

  :deep(.el-breadcrumb) {
    margin: 0 10px;

    .el-bradcrumb__inner {
      font-size: 13px;
    }
  }

  .title {
    font-size: 15px;
    font-weight: 500;
    margin-left: 8px;
  }
}
</style>