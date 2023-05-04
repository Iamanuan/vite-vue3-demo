<!-- 工作台 -->
<template>
  <div class="workbench-container">
    <Header :isShow="true" />
    <div class="contentBox">
      <div class="statisticsBox">
        <div
          class="itemBox"
          v-for="(item, index) in statisticsList"
          :key="index"
        >
          <img src="@/assets/images/statisticsIcon1.png" alt="" />
          <div class="infoClass">
            <span class="labelClass">{{ item.label }}</span>
            <span class="valueClass">{{ item.value }}</span>
          </div>
        </div>
      </div>
      <div class="caseBox">
        <div class="titleClass">案件管理</div>
        <div class="dataList-wrap">
          <el-form :model="searchForm" class="search-box" ref="searchFormRef">
            <el-form-item label="案件编号">
              <el-input
                v-model="searchForm.caseNumber"
                placeholder="请输入案件编号"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item label="案件名称">
              <el-input
                v-model="searchForm.caseName"
                placeholder="请输入案件名称"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleSearch">查 询</el-button>
              <el-button type="default" @click="handleReset">重 置</el-button>
            </el-form-item>
          </el-form>
          <el-table :data="tableData" class="table-box">
            <el-table-column
              prop="caseNumber"
              label="案件编号"
              min-width="150"
              header-align="center"
              align="center"
              show-overflow-tooltip
            >
            </el-table-column>
            <el-table-column
              prop="caseName"
              label="案件名称"
              min-width="60"
              header-align="center"
              align="center"
            >
            </el-table-column>
            <el-table-column
              min-width="135"
              label="操作"
              header-align="center"
              align="center"
            >
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { queryCaseSummary, queryCaseList } from "@/api/workbench";
import Header from "@/layout/Header.vue";
import { onMounted, ref } from "vue";
import { StatisticsListInt, SearchFormInt } from "../type/workbench";

// ts数组类型的运用
const statisticsList = ref<StatisticsListInt[]>([
  { value: 0, label: "案件数" },
  { value: 0, label: "嫌疑人数" },
  { value: 0, label: "已打标笔录数" },
  { value: 0, label: "证据量" },
  { value: 0, label: " 冻结查封数量" },
]);
let tableData: any = ref([]);

// ts对象类型的运用
let searchForm = ref<SearchFormInt>({
  caseNumber: "",
  caseName: "",
});

const queryCaseSummaryData = async () => {
  const { data } = await queryCaseSummary();
  statisticsList.value[0].value = data.caseQuantity;
  statisticsList.value[1].value = data.suspectQuantity;
  statisticsList.value[2].value = data.recordQuantity;
  statisticsList.value[3].value = data.evidenceQuantity;
  statisticsList.value[4].value = data.checkQuantity;
};

const queryCaseListData = async () => {
  const { data } = await queryCaseList({
    ...{ pageNumber: 0, pageSize: 10 },
    ...searchForm.value,
  });
  tableData.value = data.content;
};

const handleSearch = () => {
  queryCaseListData();
};
const handleReset = () => {
  searchForm.value = {
    caseNumber: "",
    caseName: "",
  };
  handleSearch();
};
onMounted(() => {
  queryCaseSummaryData();
  queryCaseListData();
});
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
      display: flex;
      justify-content: space-around;
      align-items: center;
      .itemBox {
        width: 216px;
        height: 106px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0px;
          left: 0px;
        }
        .infoClass {
          position: absolute;
          display: flex;
          flex-flow: column;
          align-items: center;
          width: 100%;
          height: 100%;
          justify-content: center;
          padding-right: 20px;
          padding-top: 20px;
          span {
            display: inline-block;
            width: 100%;
            text-align: end;
          }
          .labelClass {
            font-size: 14px;
            font-weight: 400;
            color: #000c49;
          }
          .valueClass {
            font-size: 34px;
            font-weight: normal;
            color: #132d6f;
          }
        }
      }
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
        .listBox {
          height: 91%;
          overflow: auto;
          .itemClass {
            border-bottom: 1px solid #d2daee;
            display: flex;
            padding: 15px 0px;
            align-items: flex-end;
            .signClass {
              width: 60px;
              height: 60px;
              border-radius: 50px;
              line-height: 20px;
              text-align: center;
              font-size: 14px;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              span {
                display: inline-block;
                word-break: break-all;
                width: 30px;
              }
              &.red {
                background: rgba(249, 19, 19, 0.1);
                color: #f91313;
              }
              &.yellow {
                background: rgba(249, 144, 19, 0.1);
                color: #f99013;
              }
              &.green {
                background: #2b9d181a;
                color: #2b9d18;
              }
              .dot {
                width: 10px;
                height: 10px;
                display: inline-block;
                border-radius: 50%;
                position: absolute;
                top: 5px;
                right: 5px;
                &.red {
                  background: #f91313;
                }
                &.yellow {
                  background: #f99013;
                }
                &.green {
                  background: #2b9d18;
                }
              }
            }
            .infoClas {
              width: 80%;
              display: flex;
              flex-flow: column;
              padding: 0px 15px;
              justify-content: space-evenly;
              height: 60px;
              .titleClass {
                width: 100%;
                font-size: 15px;
                font-weight: 400;
                color: #333333;
                display: inline-block;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .dateClass {
                font-size: 14px;
                font-weight: 400;
                color: #919191;
              }
            }
            .el-button {
              width: 92px;
              height: 30px;
            }
          }
        }
      }
    }

    .titleClass {
      font-size: 24px;
      font-weight: 600;
      color: #000c49;
      display: flex;
      justify-content: space-between;
      height: 35px;
      line-height: 35px;
      span {
        font-size: 14px;
        font-weight: 600;
        color: #0065e1;
        cursor: pointer;
      }
      .statClass {
        height: 30px;
        line-height: 30px;
        .redClass {
          width: 90px;
          height: 30px;
          background: rgba(249, 19, 19, 0.1);
          border-radius: 4px;
          margin-right: 35px;
          color: #f91313;
          display: inline-block;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          position: relative;
          span {
            width: 30px;
            height: 30px;
            display: inline-block;
            background: #f91717;
            border-radius: 50%;
            color: #fff;
            position: absolute;
            right: -15px;
          }
        }
        .yellowClass {
          width: 90px;
          height: 30px;
          background: rgba(249, 144, 19, 0.1);
          border-radius: 4px;
          margin-right: 20px;
          color: #f99013;
          display: inline-block;
          font-size: 14px;
          font-weight: 400;
          text-align: center;
          position: relative;
          span {
            width: 30px;
            height: 30px;
            display: inline-block;
            background: #f99013;
            border-radius: 50%;
            color: #fff;
            position: absolute;
            right: -15px;
          }
        }
      }
    }
  }
  .dataList-wrap {
    padding: 15px 0px 0px 0px;
    height: calc(100% - 22px);
    .search-box {
      .el-form-item {
        :deep(.el-form-item__content) {
          width: 100%;
        }
      }
    }
    .table-box.el-table {
      height: 50vh;
    }
  }
}
</style>
