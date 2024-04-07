<template>
<div>
  <button id="show-modal" @click="showModal = true">
    <slot name="button">show modal</slot>
  </button> 
  <Teleport to="body">
  <Transition name="modal">
    <div v-if="showModal" class="modal-mask" @click="closeModal">
      <div class="modal-container" :class="size">
        <div class="modal-header">
          <slot name="header">default header</slot>
          <button class="modal-closed" @click="showModal = false">closed</button>
        </div>
        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            default footer
            <button class="modal-default-button" @click="showModal = false">OK</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
  </Teleport>
</div>
</template>

<script>
export default {
  name : 'ComponentsModal',
  props : {
    size: String,
    type: String,
    bgStatic : Boolean
  }, 
  data() {
    return {
      showModal: false
    }
  },  
  methods: {
    closeModal(event) {
      // 모달 배경(mask)을 클릭한 경우에만 모달을 닫습니다.
      if (this.bgStatic && event.target.classList.contains('modal-mask')) {
        this.showModal = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/scss/common/_modal.scss";
</style>