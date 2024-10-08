<template>
  <article class="formSys">
    <section>
      <h2>Selectbox</h2>
      <div>
        <hi-select-box :value="propsVal.selectbox" @update:value="propsVal.selectbox = $event" :items="propsOpt.selectbox" :empty-title="propsVal.selectbox"  class="mr-10" />
        <hi-select-box :value="propsVal.selectbox" @update:value="propsVal.selectbox = $event" :items="propsOpt.selectbox" :empty-title="propsVal.selectbox"  disabled />
      </div>
    </section>
    <section>      
      <h2>Date Picker</h2>
      <HiDatePicker
        placeholder="시작일 선택"
        :format="'YYYY년 M월 D일'"
        :valueType="'YYYY-MM-DD'"
        v-model="dateStart"
        @change="onChangeDateStart"
      />
      <HiDatePicker
        placeholder="종료일 선택"
        :format="'YYYY년 M월 D일'"
        :valueType="'YYYY-MM-DD'"
        v-model="dateEnd"
        @change="onChangeDateEnd"
      />
    </section>
    <section >
      <h2>Time Picker</h2>
      <HiDatePicker
        type="time"
        placeholder="시간 선택"
        format="HH:mm"
        value-type="format"
        :class-name="['hi-timepicker']"
        :range="true"
        :minute-step="5"
        :disabled="disabled"
        v-model="time"
        @change="time = $event"
      />
    </section>
    <section>
      <strong class="guide-heading">검색</strong>
      <div class="hi-searchbox">
        <div class="searchbox__input">
          <input type="text" placeholder="게시글 검색">
          <button class="btn-delete" style="display: none;"></button>
          <button class="btn-search"></button>
        </div>
      </div>
      <br>
      <HiSearchBox />
    </section>
  </article>
</template>
  
<script>
import HiSelectBox from "@/components/HiSelectBox.vue";
import HiSwitch from "@/components/HiSwitch.vue";
import HiDatePicker from '@/components/HiDatePicker.vue';
import HiSearchBox from '@/components/HiSearchBox.vue';

export default {
  name : 'FormSys',
  components: { HiDatePicker, HiSelectBox, HiSearchBox},
  data(){
    return{
      propsVal: {
        selectbox: 'selectbox title',
      },
      propsOpt: {
        selectbox: [
          { value: "option 01 value", title: "option 01" },
          { value: "option 02 value", title: "option 02" },
        ],
      },
      time : ['13:00', '17:00'],
      dateStart: null,
      dateEnd: null,
    }
  },
  methods:{
     onChangeDateStart(value) {
      this.dateStart = value
    },
    onChangeDateEnd(value) {
      this.dateEnd = value
    },
  }
}
</script>