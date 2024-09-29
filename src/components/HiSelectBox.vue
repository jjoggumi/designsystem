<template>
  <div
    v-click-outside="closeSelectBox"
    class="hi-selectbox"
    :class="{
      'is-opened': isOpen,
      time: this.selectBoxType === 'time',
    }"
  >
    <button class="selected" :disabled="disabled" @click="toggleSelectBox">
      <slot name="selected" :value="value">
        {{ getValueTitle(value) }}
      </slot>
    </button>

    <div v-if="isOpen" class="option__layer" style="display: block">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "hi-select-box",
  props: {
    value: {
      type: [String, Number],
    },
    defaultValue: {
      type: [String, Number],
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
      return this.divide
        ? this.items.filter((item) => parseInt(item.value, 10) % this.divide === 0)
        : this.items;
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
