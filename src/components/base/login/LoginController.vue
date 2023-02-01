<template>
  <div class="page-login">
    <div class="box">
      <div class="logo">
        <img
          src="https://b-img-storage.oss-cn-hangzhou.aliyuncs.com/blog/wallpaper_1.jpeg"
          alt="Logo"
        />
        <span>{{ "CooL - ADMIN" }}</span>
      </div>
      <p class="desc">一款快速开发后台权限管理系统111</p>

      <el-form label-position="top" class="form" :disabled="saving">
        <el-form-item label="用户名">
          <input
            v-model="form.username"
            placeholder="请输入用户名"
            maxlength="20"
            autocomplete="on"
          />
        </el-form-item>

        <el-form-item label="密码">
          <input
            v-model="form.password"
            placeholder="请输入用户名"
            maxlength="20"
            autocomplete="off"
          />
        </el-form-item>

        <div class="op">
          <el-button round :loading="saving" @click="toLogin">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" name="login" setup>
import router from "@/router";
import { reactive, ref } from "vue";
// import { ElMessage } from "element-plus";

// 状态
const saving = ref(false);

// 表单数据
const form = reactive({
  username: "",
  password: "",
});

// 登录
async function toLogin() {
  router.push("/main");
  // router.push("/main");
}
</script>

<style lang="scss" scoped>
.page-login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  background-color: #2f3447;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logo {
      height: 50px;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      color: #fff;

      img {
        height: 50px;
      }

      span {
        font-size: 38px;
        margin-left: 10px;
        letter-spacing: 5px;
        font-weight: bold;
      }
    }

    .desc {
      color: #eee;
      font-size: 14px;
      letter-spacing: 1px;
      margin-bottom: 50px;
    }

    .el-form {
      width: 300px;

      :deep(.el-form-item) {
        margin-bottom: 20px;

        .el-form-item__lable {
          color: #ccc;
        }
      }

      input {
        background-color: transparent;
        color: #fff;
        border: 0;
        height: 40px;
        width: calc(100% - 4px);
        margin: 0 2px;
        padding: 0 2px;
        box-sizing: border-box;
        -webkit-text-fill-color: #fff;
        font-size: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 0;

        &:-webkit-autofill {
          box-shadow: 0 0 0px 1000px transparent inset !important;
          transition: background-color 50000s ease-in-out 0s;
        }

        &::-webkit-input-placeholder {
          font-size: 12px;
        }

        &:focus {
          border: #fff;
        }
      }

      .row {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;

        .captcha {
          position: relative;
          right: 0;
          bottom: 1px;
        }
      }
    }

    .op {
      display: flex;
      justify-content: center;
      margin-top: 50px;

      :deep(.el-button) {
        height: 40px;
        width: 140px;
        font-size: 16px;
      }
    }
  }
}
</style>
