<template>
  <div :class="classList" style="display: block">
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
    type: { type: String, default: null },
    size: { type: String, default: null },
    titleLine: { type: Boolean, default: false },
    closeSkip: { type: Boolean, default: false }
  },
  data() {
    return {};
  },
  computed: {
    classList() {
      const className = ["hi-modal-common"];
      this.type === 'type01' ? className.push(`modal-message`) : 
      this.type ===  null ? null : 
      className.push(`modal-${this.type}`) ;
      this.size ? className.push(`modal-${this.size}`) : null;
      this.titleLine ? className.push("title-line") : null;
      this.closeSkip ? className.push("title-close-skip") : null;
      return className.join(" ");
    }
  },
};
</script>
