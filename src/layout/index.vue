<template>
  <!-- name: '管理后台整体布局' -->
  <div class="app-wrapper">
    <Header />
    <div class="content-wrapper">
      <div class="caseBox">
        {{ caseName }}
        <el-button type="tableBtn" @click="$router.push('/workbench')"
          >返回工作台</el-button
        >
      </div>
      <Menu />
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Menu from "./Menu.vue";
export default {
  components: { Header, Menu },
  data() {
    return { caseName: "" };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  created() {
    this.caseName = localStorage.getItem("caseName");
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .content-wrapper {
    width: 100%;
    padding: 0px 32px;
    height: 88%;
    .caseBox {
      font-size: 24px;
      font-weight: 600;
      color: #000c49;
      margin: 32px 0px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
