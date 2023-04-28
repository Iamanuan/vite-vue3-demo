<!-- 头部组件 -->
<template>
  <div class="headerBox">
    <img src="@/assets/images/logo.png" alt="logo" class="logoClass" />
    <span class="titleClass">案管家</span>
    <span class="subTitleClass" :style="isShow ? '' : 'opacity: 0'"
      ><span class="dotClass"></span>工作台</span
    >
    <div class="infoBox">
      <img
        src="@/assets/images/defaultAvatar.png"
        class="el-avatar el-avatar--circle"
      />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{ policeNumber }}<i class="el-icon-arrow-down"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click.native.stop="handleLogout()"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import userStore from "../stores/user";
import { logout } from "@/api/public";
const store = userStore();
defineProps<{
  isShow: boolean;
}>();
const policeNumber = store.policeNumber;
const handleLogout = async () => {
  const { code, message } = await logout();
  if (code === 1000) {
    ElMessage.success("您已退出登录！");
    localStorage.clear();
    location.reload();
  } else {
    ElMessage.error(message);
  }
};
</script>

<style lang="scss" scoped></style>
