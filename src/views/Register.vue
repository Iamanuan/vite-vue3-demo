<!-- 注册页 -->
<template>
  <div class="register-container">
    <div class="loginLogoClass">
      <img src="@/assets/images/logo.png" alt="" />
      案管家
    </div>
    <div class="registerTitleClass">注册</div>
    <el-form
      :model="data.registerForm"
      ref="registerFormRef"
      :rules="registerFormRules"
      class="register-form"
    >
      <el-form-item prop="policeNumber">
        <el-input
          v-model="data.registerForm.policeNumber"
          placeholder="请输入警号"
        />
      </el-form-item>
      <el-form-item prop="policePass">
        <el-input
          type="password"
          v-model="data.registerForm.policePass"
          placeholder="请输入密码"
          @keyup.enter.native="handleRegister(registerFormRef)"
      /></el-form-item>
      <el-form-item>
        <el-button @click="handleRegister(registerFormRef)">注册</el-button>
      </el-form-item>
    </el-form>
    <a href="#" class="loginBtn" @click="router.go(-1)">返回登录页</a>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { RegisterData } from "../type/register";
import { ElMessage, FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";
import { register } from "@/api/public";
const data = reactive(new RegisterData());
const registerFormRules = reactive<FormRules>({
  policeNumber: [{ required: true, message: "请输入警号", trigger: "blur" }],
  policePass: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
const registerFormRef = ref<FormInstance>();
const router = useRouter();
// 注册
const handleRegister = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      register(data.registerForm).then((res) => {
        if (res.code === 1000) {
          ElMessage.success("警员注册成功！");
          router.go(-1);
        }
      });
    } else {
      return false;
    }
  });
};
</script>

<style lang="scss" scoped>
.register-container {
  width: 100%;
  height: 100%;
  background: #0e2f5d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  position: relative;
  .register-form {
    width: 500px;
    height: 350px;
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
  .loginBtn {
    position: absolute;
    left: 57%;
    top: 71%;
    &:hover {
      color: #5a9bf8;
    }
  }
  .registerTitleClass {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    position: absolute;
    left: 39.5%;
    top: 43%;
  }
}
</style>
