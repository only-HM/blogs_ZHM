<template>
  <div class="home-container" ref="container" @wheel="handleWheel">
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="hangleTransitionEnd"
    >
      <li v-for="item in banners" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <div v-show="index >= 1" class="icon icon-up" @click="switchTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <div
      v-show="index < banners.length - 1"
      class="icon icon-down"
      @click="switchTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <ul class="indicator">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in banners"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
    <Loading v-if="isLoading" />
  </div>
</template>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  background: @dark;
  overflow: hidden;

  ul {
    margin: 0;
    list-style: none;
    padding: 0;

    &.carousel-container {
      width: 100%;
      height: 100%;
      transition: 0.5s;

      li {
        width: 100%;
        height: 100%;
      }
    }

    &.indicator {
      .self-center();
      transform: translateY(-50%);
      left: auto;
      right: 20px;

      li {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: @words;
        cursor: pointer;
        margin-bottom: 10px;
        border: 1px solid #fff;
        box-sizing: border-box;
        transition: 0.5s;

        &.active {
          background: #fff;
        }
      }
    }
  }

  .icon {
    .self-center();
    font-size: 30px;
    cursor: pointer;
    color: @gray;
    @gap: 15px;
    transform: translateX(-50%);

    &.icon-up {
      top: @gap;
      animation: jump-up 0.8s infinite;
    }

    &.icon-down {
      top: auto;
      bottom: @gap;
      animation: jump-down 0.8s infinite;
    }

    @jump: 5px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }

      50% {
        transform: translate(-50%, -@jump);
      }

      100% {
        transform: translate(-50%, @jump);
      }
    }

    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }

      50% {
        transform: translate(-50%, @jump);
      }

      100% {
        transform: translate(-50%, -@jump);
      }
    }
  }
}
</style>

<script>
import { getBanners } from "@/api/banner";
import CarouselItem from "./Carouselitem.vue";
import Icon from "@/components/Icon";
import Loading from "@/components/Loading";
export default {
  components: {
    CarouselItem,
    Icon,
    Loading,
  },
  data() {
    return {
      isLoading: true,
      banners: [],
      index: 0, //当前显示的是第几张轮播图
      containerHegiht: 0, //整个容器的高度
      switching: false, //是否正在切换中
    };
  },
  async created() {
    this.banners = await getBanners();
    this.isLoading = false;
  },
  mounted() {
    this.containerHegiht = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHegiht + "px";
    },
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      this.index = i;
    },
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        // 往上滚动
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.banners.length - 1) {
        // 往下滚动
        this.switching = true;
        this.index++;
      }
    },
    hangleTransitionEnd() {
      this.switching = false;
    },
    handleResize() {
      this.containerHegiht = this.$refs.container.clientHeight;
    },
  },
};
</script>