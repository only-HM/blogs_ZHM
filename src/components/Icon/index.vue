<template>
  <i class="iconfont icon-container" :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "icon-home-line",
  success: "icon-zhengquequeding",
  error: "icon-cuowu",
  close: "icon-guanbi",
  warn: "icon-jinggao",
  info: "icon-xinxi",
  blog: "icon-blog",
  code: "icon-code",
  about: "icon-set_about_hov",
  weixin: "icon-weixin",
  mail: "icon-email",
  github: "icon-github",
  qq: "icon-QQ-circle-fill",
  arrowUp: "icon-xiangshang",
  arrowDown: "icon-xiangxia",
  empty: "icon-empty",
  chat: "icon-liuyan",
};
export const types = Object.keys(classMap);
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    //   图标类样式
    fontClass() {
      return classMap[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_3055572_gzpurdpntgp.css";
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>