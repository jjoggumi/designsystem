<template>
  <Transition name="modal">
    <div v-if="active" class="modal-mask" @click="closeModal">
      <div
        class="modal-container"
        :class="[
          size ? size : '',
          { hideHead: hideHead },
          { hideFoot: hideFoot },
        ]"
        @click.stop
      >
        <div class="modal-header">
          <slot name="modalHeader">default header</slot>
          <HiButton
            variant="link"
            icoLeft="closes"
            class="modal-closed"
            @click="$emit('closed')"
          ></HiButton>
        </div>
        <div class="modal-body">
          <slot name="modalBody">default body</slot>
        </div>
        <div class="modal-footer">
          <slot name="modalFooter">
            <HiButton
              variant="primary"
              class="modal-default-button"
              @click="$emit('closed')"
              >OK</HiButton
            >
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>
  
<script>
import HiButton from "@/components/HiButton.vue";
export default {
  name: "ComponentsModal",
  components: { HiButton },
  props: {
    active: Boolean,
    size: String,
    clickOnBg: Boolean,
    hideHead: Boolean,
    hideFoot: Boolean,
  },
  methods: {
    closeModal() {
      // 모달 배경(mask)을 클릭한 경우에만 모달을 닫습니다.
      if (this.clickOnBg) {
        this.$emit("closed");
      }
    },
  },
};
</script>
  
  <style lang="scss" scoped>
@import url(@/assets/scss/common/_modal.scss);
</style>



