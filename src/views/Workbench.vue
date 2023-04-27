<!-- 工作台 -->
<template>
  <div class="workbench-container">
    <Header :isShow="true" />
    <div class="contentBox">
      <div class="statisticsBox"></div>
      <div class="caseBox">
        <div class="titleClass">案件管理</div>
      </div>
      <div class="rightBox">
        <div class="cardItemBox suspectBox">
          <div class="titleClass">
            嫌疑人进度提醒<span @click="router.push('/manage/suspect')"
              >全部</span
            >
          </div>
        </div>
        <div class="cardItemBox controlBox">
          <div class="titleClass">查封冻结提醒</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "@/layout/Header.vue";

import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scoped>
.workbench-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .contentBox {
    padding: calc(30vh / 10.8);
    height: calc(1000vh / 10.8);
    width: 100%;
    .statisticsBox {
      width: 1856px;
      height: calc(180vh / 10.8);
      background: #ffffff;
      border-radius: 8px;
      margin-bottom: calc(30vh / 10.8);
    }
    .caseBox {
      width: 1145px;
      height: calc(730vh / 10.8);
      background: #ffffff;
      border-radius: 8px;
      float: left;
      margin-right: 30px;
      padding: 20px;
    }
    .rightBox {
      height: calc(730vh / 10.8);
      width: 685px;
      float: left;
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      .cardItemBox {
        height: calc(50% - 15px);
        background: #ffffff;
        border-radius: 8px;
        padding: 10px 20px;
      }
    }

    .titleClass {
      font-size: 24px;
      font-weight: 600;
      color: #000c49;
    }
  }
}
</style>
