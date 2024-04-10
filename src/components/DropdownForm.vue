<template>
  <div class="dropdown" :class="{'block':block}" ref="dropdown">
    <button class="caption" @click="toggleDropdown">
      {{ selectedOption ? selectedOption.label : placeholder }}
    </button>
    <div v-if="isActive" class="content">
      <ul class="list">
        <li v-for="(option, index) in dropdown.options" :key="index" @click="selectOption(option)">
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name : "ComponentsDropdownForm",
  props: {
    dropdown: {
      type: Object,
      required: true
    },
    value: [String, Object], // 외부 데이터와 양방향 바인딩할 값
    block: Boolean,
    placeholder: {
      type: String,
      default: "Select an option"
    }

  },
  data () {
    return {
      pvalue: this.value,
      
      isActive: false,
      selectedOption: null
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {    
    toggleDropdown() {
      this.isActive = !this.isActive;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.$emit("input", {value: option.value, target: this.dropdown}); // 선택한 옵션의 값을 외부로 emit
      this.isActive = false; // 드롭다운 메뉴 닫기
    },
    onClickButton() {
      this.$emit('input', this.pvalue++)
    },    
    close() {
      this.isActive = false;
    },
    handleClickOutside(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.close();
      }
    }
  }
};
</script>
