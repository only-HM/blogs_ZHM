<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handClick(item)" :class="{ active: item.isSelect }">{{
        item.name
      }}</span>
      <span
        v-if="item.aside"
        @click="handClick(item)"
        class="aside"
        :class="{ active: item.isSelect }"
        >{{ item.aside }}</span
      >
      <!-- 显示当前组件 -->
      <RightList :list="item.children" @select="handClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang='less' scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;

  .right-list-container {
    margin-left: 1em;
  }

  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    font-size: 14px;

    .active {
      font-weight: bold;
      color: @warn;
    }
  }
}

.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>