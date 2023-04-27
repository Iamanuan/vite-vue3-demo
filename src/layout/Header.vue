<!-- 头部组件 -->
<template>
  <div class="headerBox">
    <img src="@/assets/images/logo.png" alt="logo" class="logoClass" />
    <span class="titleClass">案管家</span>
    <span class="subTitleClass" :style="isShow ? '' : 'opacity: 0'"
      ><span class="dotClass"></span>工作台</span
    >
    <div class="infoBox">
      <el-avatar
        :size="50"
        :src="require('@/assets/images/defaultAvatar.png')"
      />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{ policeNumber }}<i class="el-icon-arrow-down"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native.stop="handleLogout()"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isShow: boolean
}>()
const policeNumber = "";
const handleLogout = () => {};
// import { logout } from "@/api/public";
// export default {
//   props: {
//     isShow: { type: Boolean, default: false },
//   },
//   data() {
//     return { policeNumber: "" };
//   },
//   components: {},
//   computed: {},
//   methods: {
//     async handleLogout() {
//       const { code, message } = await logout();
//       if (code === 1000) {
//         this.$message.success("您已退出登录！");
//         localStorage.clear()
//         location.reload();
//       } else {
//         this.$message.error(message);
//       }
//     },
//   },
//   created() {
//     this.policeNumber = localStorage.getItem("policeNumber");
//   },
// };
</script>

<style lang="scss" scoped></style>
