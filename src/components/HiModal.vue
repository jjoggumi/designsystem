<template>
  <div :class="['hi-modal-common', [addClassName]]" style="display: block">
    <!-- <div class="modal__dim" @click="$emit('close')"></div> -->
    <div class="modal__dim"></div>
    <div class="modal__layer">
      <div class="modal__header">
        <h2 class="heading"><slot name="heading"></slot></h2>
        <button class="btn-close" @click="$emit('close')"></button>
      </div>
      <div class="modal__content">
        <slot name="content"></slot>
      </div>
      <div class="modal__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HiModal",
  props: {
    addClassName: { type: String, default: null },
  },
  data() {
    return {};
  },
};
</script>
