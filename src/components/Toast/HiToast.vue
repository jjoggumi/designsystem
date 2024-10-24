<!--
@File(Method): HiToast.vue
@Author: 김은영
@Date Created: 2024-10-23
@Description: 토스트 컴포넌트
-->
<template>
  <div class="toast-message" :style="style">
    <template v-if="$scopedSlots['con']">
      <slot name="con"></slot>
    </template>
    <template v-else>
      <p class="msg">
        {{ message }}
      </p>
    </template>
  </div>
</template>

<script>
export default {
  name: "HiToast",
  props: {
    open: { type: Boolean, default: false },
    message: { type: String, default: null },
    width: { type: Number, default: null },
    height: { type: Number, default: null },
    top: { type: Number, default: null },
    bottom: { type: Number, default: 50 },
    left: { type: Number, default: null },
    right: { type: Number, default: null },
  },
  computed: {
    style: function () {
      let obj = {
        width: `${this.width}px`,
        height: `${this.height}px`,
      };
      let c = false;
      let r = false;

      if (this.top) {
        obj.top = `${this.top}px`;
      } else if (this.bottom) {
        obj.bottom = `${this.bottom}px`;
      } else {
        c = true;
        obj.top = "50%";
      }

      if (this.left) {
        obj.left = `${this.left}px`;
      } else if (this.right) {
        obj.right = `${this.right}px`;
      } else {
        r = true;
        obj.left = "50%";
      }

      if (c === true && r === true) {
        obj.transform = "translate(-50%, -50%)";
      } else if (c === true) {
        obj.transform = "translateY(-50%)";
      } else if (r === true) {
        obj.transform = "translateX(-50%)";
      }
      return obj;
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.toast-message {
  position: absolute;
  border-radius: 56px;
  font-size: 16px;
  color: #fff;
  background: #000000b8;
  opacity: 1;
  z-index: 10000;
  display: block;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 0 24px;
  margin: 0 auto;
  text-align: center;
  animation: toastMessageAnimation 0.3s linear 2s forwards;
  max-width: 420px;
  width: 95%;
  height: 66px;
}
.toast-message.type02 {
  display: flex;
  animation: toastMessageAnimation 0.3s linear 2s forwards;
}
.toast-message p {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.toast-message p.esc {
  font-size: 14px;
  font-weight: 500;
  color: #ff8737;
  cursor: pointer;
}
@keyframes toastMessageAnimation {
  0% {
    opacity: 0.9;
  }
  25% {
    opacity: 0.75;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.25;
  }
  99% {
    opacity: 0;
    z-index: 10000;
  }
  100% {
    opacity: 0;
    z-index: 1;
  }
}
</style>
