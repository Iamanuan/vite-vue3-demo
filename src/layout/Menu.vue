<!-- name: '路由菜单' -->
<template>
  <div class="menuBox">
    <div class="tabsbg">
      <span></span>
      <span></span>
      <span></span>
      <p></p>
    </div>
    <div class="el-tabs__nav is-top">
      <app-link
        v-for="(item, index) in menuList"
        :key="item.path"
        :to="item.path"
        :id="`tab-${index}`"
        class="el-tabs__item is-top"
        :class="$route.path.includes(item.path) ? 'is-active' : ''"
        >{{ item.title }}
      </app-link>
    </div>
  </div>
</template>

<script>
import AppLink from "@/components/AppLink";

export default {
  data() {
    return {
      menuList: [
        { title: "嫌疑人管理", path: "/manage/suspect" },
        { title: "查封冻结", path: "/manage/control" },
        { title: "笔录", path: "/manage/notes" },
        { title: "证据", path: "/manage/evidence" },
      ],
    };
  },
  components: { AppLink },
  computed: {},
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped></style>
