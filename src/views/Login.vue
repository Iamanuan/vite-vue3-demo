<!-- 登录页 -->
<template>
  <div class="login-container">
    <div class="loginLogoClass">
      <img src="@/assets/images/logo.png" alt="" />
      案管家
    </div>
    <div class="loginTitleClass">登录</div>
    <el-form
      :model="loginForm"
      ref="loginFormRef"
      :rules="loginFormRules"
      class="login-form"
    >
      <el-form-item prop="policeNumber">
        <el-input v-model="loginForm.policeNumber" placeholder="请输入警号" />
      </el-form-item>
      <el-form-item prop="policePass">
        <el-input
          type="password"
          v-model="loginForm.policePass"
          placeholder="请输入密码"
          @keyup.enter.native="handleLogin(loginFormRef)"
      /></el-form-item>
      <el-form-item>
        <el-button @click="handleLogin(loginFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
    <router-link to="/register" class="registerBtn">新用户注册</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import { LoginData } from "../type/login";
import { FormInstance, FormRules } from "element-plus";
import { login } from "../api/api";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const data = reactive(new LoginData());
    const loginFormRules = reactive<FormRules>({
      policeNumber: [
        { required: true, message: "请输入警号", trigger: "blur" },
      ],
      policePass: [{ required: true, message: "请输入密码", trigger: "blur" }],
    });
    const loginFormRef = ref<FormInstance>();
    const router = useRouter();
    // 登录
    const handleLogin = async (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      await formEl.validate((valid: any) => {
        if (valid) {
          login(data.loginForm).then((res) => {
            localStorage.setItem("token", res.data.token);
            router.push("/workbench");
          });
        } else {
          return false;
        }
      });
    };
    return {
      ...toRefs(data),
      loginFormRules,
      loginFormRef,
      handleLogin,
    };
  },
});
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: #0e2f5d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: relative;
  .login-form {
    width: 500px;
    height: 300px;
    border: 1px solid #333;
    background: #fff;
    border-radius: 13px;
    box-shadow: 0 0 10px 0 #6c91c9;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .el-form-item {
      width: 80%;
    }
    .el-cascader,
    .el-select,
    .el-button {
      width: 100%;
    }
    .el-button {
      background: #5a9bf8;
      color: #fff;
    }
  }
  .registerBtn {
    position: absolute;
    left: 57%;
    top: 69%;
    &:hover {
      color: #5a9bf8;
    }
  }
  .loginTitleClass {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    position: absolute;
    left: 39.5%;
    top: 45.5%;
  }
}
</style>
