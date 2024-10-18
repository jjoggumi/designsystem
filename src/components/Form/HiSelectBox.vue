<!--
@File(Method): HiSelectBox.vue
@Author: -
@Date Created: -
@Description: 셀렉트박스 컴포넌트
@Modified: 2024-10-17 : 디자인 시스템 반영 
  - 버튼 커스터마이징을 위한 slot 분기 처리, 
  - 옵션 커스터마이징을 위한 slot 추가 및 분기 처리, 
  - 다중옵션을 위한 value와 defaultValue 타입추가, 
  - selectboxtype props 값 class 적용
-->

<template>
  <div
    v-click-outside="closeSelectBox"
    class="hi-selectbox"
    :class="{
      'is-opened': isOpen,
      //'time': this.selectBoxType === 'time'
      [selectBoxType]: selectBoxType,
    }"
  >
    <button class="selected" :disabled="disabled" @click="toggleSelectBox">
      <template v-if="$scopedSlots['selected']">
        <slot name="selected" :value="value"></slot>
      </template>
      <template v-else>
        {{ getValueTitle(value) }}
      </template>
    </button>

    <div v-if="isOpen" class="option__layer" style="display: block">
      <template v-if="$scopedSlots['custom-option']">
        <slot name="custom-option" :items="dividedItems" :value="value" :select-item="selectItem"></slot>
      </template>
      <template v-else>
        <button
          v-for="item of dividedItems"
          :key="item.value"
          :ref="`hi-select-box-${item.value}`"
          class="option"
          :class="{
            'is-selected': item.value === value,
          }"
          @click="selectItem(item)"
        >
          <slot name="list" :item="item"></slot>
          {{ item.title }}
        </button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "hi-select-box",
  props: {
    value: {
      type: [String, Number, Array],
    },
    defaultValue: {
      type: [String, Number, Array],
    },
    items: {
      type: Array,
    },
    divide: {
      type: Number,
    },
    /**
     * ex)
     * time: 시, 분
     */
    selectBoxType: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    emptyTitle: {
      type: String,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    dividedItems() {
      return this.divide ? this.items.filter((item) => parseInt(item.value, 10) % this.divide === 0) : this.items;
    },
  },
  watch: {
    isOpen(val) {
      if (val) {
        const ref = `hi-select-box-${this.value}`;
        this.doFocus(ref);
      }
    },
  },
  mounted() {
    if (!this.value && this.defaultValue) {
      this.$emit("update:value", this.defaultValue);
    }
  },
  methods: {
    closeSelectBox() {
      this.isOpen = false;
    },
    toggleSelectBox() {
      this.isOpen = !this.isOpen;
    },
    getValueTitle(val) {
      const foundItem = this.dividedItems.find((item) => item.value === val);
      return foundItem ? foundItem.title : this.emptyTitle || "?";
    },
    selectItem(item) {
      this.$emit("update:value", item.value);
      this.closeSelectBox();
    },
    doFocus(ref) {
      this.$nextTick(() => {
        if (this.$refs[ref] && this.$refs[ref][0]) {
          this.$refs[ref][0].focus();
        }
      });
    },
  },
};
</script>

<style scoped></style>
