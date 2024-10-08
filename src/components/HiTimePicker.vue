<template>
  <div :class="[className[0]]">
    <Date-picker
      v-model="currentTime"
      type="time"
      format="hh:mm"
      :range="range"
      :placeholder="placeholder"
      :input-attr="{id, title}"
      value-type="format"
      @change="onChange"
      :editable="editable"
      :clearable="false"
      :popup-class="className[0]"
      :append-to-body="appendToBody"
      :showSecond="false"
    > 
      <!-- 2023-01-18 template 추가 -->
      <template v-slot:header v-if="range">
        <div>시작시간</div>
        <div>종료시간</div>
      </template>
    </Date-picker>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import 'vue2-datepicker/locale/ko.js';

export default {
  components: { DatePicker },
  name: 'HiTimePicker',
  props: {
    className: {type: Array, default: () => ['hi-timepicker']},
    value: {
      type: [Array, String],
      default: () => ('')
    },
    range: {type: Boolean, default: false},
    placeholder: {type: String, default: ''},
    id: {type: String, default: null},
    title: {type: String, default: null},
    editable: {type: Boolean, default: false},
    appendToBody: {type: Boolean, default: true},
    showSecond: {type: Boolean, default: false}
  },
  data() {
    return {
      currentTime: [],
    }
  },
  watch: {
    value: {
      immediate: false,
      handler(v) {
        this.setValue(v)
      }
    }
  },
  created() {
    this.setValue(this.value)
  },
  methods: {
    onChange(e) {
      if (this.range) {
        this.$emit('change', [e[0], e[1]])
      } else {
        this.$emit('change', e)
      }
    },
    setValue(v) {
      if (this.range) {
        this.currentDate = [v[0], v[1]]
      } else {
        this.currentDate = v
      }
    },    
  }
}
</script>
