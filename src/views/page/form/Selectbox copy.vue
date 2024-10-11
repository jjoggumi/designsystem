<template>
  <article class="formSys">
    <section>
      <h2>Selectbox</h2>
      <div>
        <hi-select-box :value="propsVal.selectbox" @update:value="propsVal.selectbox = $event" :items="propsOpt.selectbox" :empty-title="propsVal.selectbox"  class="mr-10" />
        <hi-select-box :value="propsVal.selectbox" @update:value="propsVal.selectbox = $event" :items="propsOpt.selectbox" :empty-title="propsVal.selectbox"  disabled />
        <hi-select-box
        :items="items"
        :value="selectedValue"
        :default-value="defaultValue"
        :is-list-layout="true"
        @update:value="handleUpdateValue"
        @delete-item="handleDeleteItem"
        @add-item="handleAddItem"
        :empty-title="selectedValue"
      >
        <template #custom-option="{ items, value, selectItem }">
          <ul>
            <li v-for="item in items" :key="item.value">
              <button type="button" class="option" :class="{ 'is-selected': item.value === value }" @click="selectItem(item)">
                {{ item.title }}
              </button>
              <button type="button" class="del" @click="handleDeleteItem(item)"><i class="bh-icon-delete-20"></i>삭제</button>
            </li>
          </ul>
          <button type="button" class="add" @click="handleAddItem"><i class="bh-icon-plus-20"></i><span>자리배치도 추가</span></button>
        </template>
      </hi-select-box>
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


      selectedValue: "선택하세요", // 선택된 값을 위한 초기화
      defaultValue: 15, // 기본 값 설정
      items: [
        { value: 10, title: "10시" },
      ],



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


    handleUpdateValue(value) {
      this.selectedValue = value; // 선택된 값 업데이트
      console.log(`선택된 값: ${value}`);
    },
    handleDeleteItem(item) {
      this.items = this.items.filter((i) => i.value !== item.value);
      console.log(`삭제된 아이템: ${item.title}`);
    },
    handleAddItem() {
      const newValue = this.items.length * 5 + 10; // 새로운 값을 계산하여 추가
      const newItem = { value: newValue, title: `${newValue}시` };
      this.items.push(newItem);
      console.log(`추가된 아이템: ${newItem.title}`);
    },
  }
}
</script>