<template>
  <article class="formSys">
    <section>
      <h2>Checkbox</h2>
      <div>        
        <!-- <hi-check-box v-for="(day, index) in checkArray" :key="index"
          :model.sync="checkArraySelected"
          :item="{ title: day.title, value: day.value }"
          :disabled="false"
        />
        <br>
        <hi-check-box
          :model.sync="checkBoolean1"
          :item="{ title: '체크박스 선택', value: checkBoolean1 }"
        />
        <br>
        <hi-check-box
          :model.sync="checkBoolean2"
          :item="{ title: '체크박스', value: checkBoolean2}"
        />
        <br>
        <hi-check-box
          :model.sync="checkBoolean3"
          :item="{ title: '체크박스 선택 비활성화', value: checkBoolean3 }"
          disabled
        />
        <br>
        <hi-check-box
          :model.sync="checkBoolean4"
          :item="{ title: '체크박스 비활성화', value: checkBoolean4 }"
          disabled
        />

        <input type="checkbox" id="check" v-model="checkBoolean4">
        <label for="check"><span>체크박스</span></label>
        <br> -->
        <div v-for="(day, index) in checkArray" :key="index">
          <input 
            type="checkbox" 
            :id="'check' + index" 
            :value="day.value" 
            :checked="checkArraySelected.includes(day.value)"
          >
          <label :for="'check' + index"><span>{{day.title}}</span></label>
        </div>
        <br><br>
        <input type="checkbox" id="check">
        <label for="check"><span>체크박스</span></label>
        <br><br>
        <input type="checkbox" id="checked" checked >
        <label for="checked"><span>체크박스 선택</span></label>
        <br><br>
        <input type="checkbox" id="check-disabled" disabled>
        <label for="check-disabled"><span>체크박스 비활성화</span></label>
        <br><br>
        <input type="checkbox" id="checked-disabled" checked disabled>
        <label for="checked-disabled"><span>체크박스 선택 비활성화</span></label>
      </div>
    </section>
    <section>
      <h2>Radio</h2>
      <div>         
          <input type="radio" id="radio">
          <label for="radio"><span>라디오</span></label>
          <br><br>
          <input type="radio" id="radio-checked" checked>
          <label for="radio-checked"><span>라디오 선택</span></label>
          <br><br>
          <input type="radio" id="radio-disabled" disabled>
          <label for="radio-disabled"><span>라디오 비활성화</span></label>
          <br><br>
          <input type="radio" id="radio-checked-disabled" checked disabled>
          <label for="radio-checked-disabled"><span>라디오 선택 비활성화</span></label>
      </div>
    </section>
    <section>
      <h2>Switch</h2>
      <div>
        <!-- <hi-switch v-model="switchValue" @update:model="switchValue = $event" invert/> -->
        <hi-switch v-model="switchValue" invert/>
        <hi-switch v-model="switchValue" />
        <hi-switch v-model="switchValue" disabled/>
      </div>
    </section>    
  </article>
</template>
  
<script>
import HiSwitch from "@/components/Form/HiSwitch.vue";

export default {
  name : 'CheckRadioSwitch',
  components: { HiSwitch },
  data(){
    return{
      switchValue: false,

      checkArraySelected: [1, 3], // 기본 선택된 체크박스
      checkArray: [
        { title: "월요일", value: 1 },
        { title: "화요일", value: 2 },
        { title: "수요일", value: 3 },
        { title: "목요일", value: 4 },
        { title: "금요일", value: 5 }
      ],
      checkBoolean1: true,  
      checkBoolean2: false,
      checkBoolean3: true, 
      checkBoolean4: false,
    }
  }
}
</script>