<template>
  <article class="formSys">
    <section>
      <h2>Selectbox Type</h2>
      <div>
        <HiSelectBox
          class="mr-10"
          :value="defaultSelect.selectedValue"
          @update:value="defaultSelect.selectedValue = $event"
          :items="defaultSelect.items"
          :empty-title="defaultSelect.selectedValue || 'Disabled'"
          disabled
        />
        <HiSelectBox
          class="mr-10"
          :value="defaultSelect.selectedValue"
          @update:value="defaultSelect.selectedValue = $event"
          :items="defaultSelect.items"
          :empty-title="defaultSelect.selectedValue || 'Default Type'"
        />
        <HiSelectBox class="mr-10" :items="multiSelect.items" :value="multiSelect.selectedValues" :is-list-layout="true" :empty-title="multiSelect.selectedValues.join(', ') || 'Multiple Option'">
          <template #custom-option>
            <div class="option-list">
              <ul>
                <li v-for="item in multiSelect.items" :key="item.value">
                  <input type="checkbox" :id="`check-${item.value}`" :value="item.value" v-model="multiSelect.selectedValues" />
                  <label :for="`check-${item.value}`"
                    ><span>{{ item.title }}</span></label
                  >
                </li>
              </ul>
            </div>
          </template>
        </HiSelectBox>
        <HiSelectBox
          class="mr-10"
          :items="editSelect.items"
          :value="editSelect.selectedValue"
          :is-list-layout="true"
          @update:value="editSelect.selectedValue = $event"
          @delete-item="handleDeleteItem"
          @add-item="handleAddItem"
          :empty-title="editSelect.selectedValue || 'Edit Option'"
        >
          <template #custom-option="{ value, selectItem }">
            <div class="option-list type01">
              <ul class="custom-scr">
                <li v-for="item in editSelect.items" :key="item.value">
                  <HiButton color="link" class="item" :class="{ 'is-selected': item.value === value }" @click="selectItem(item)">
                    {{ item.title }}
                  </HiButton>
                  <HiButton color="link" class="append" @click="handleDeleteItem(item)">
                    <HiIcon name="ico-delete" color="disabled" size="20"></HiIcon>
                  </HiButton>
                </li>
              </ul>
              <HiButton color="link" class="add" @click="handleAddItem">
                <HiIcon name="ico-plus" color="orange" size="20"></HiIcon>
                <span>추가</span>
              </HiButton>
            </div>
          </template>
        </HiSelectBox>
      </div>
    </section>
    <section>
      <h2>Usage</h2>
      <div>
        <HiSelectBox
          class="mr-10"
          :items="editSelect.items"
          :value="editSelect.selectedValue"
          :is-list-layout="true"
          @update:value="editSelect.selectedValue = $event"
          @delete-item="handleDeleteItem"
          @add-item="handleAddItem"
          :empty-title="editSelect.selectedValue || '자리배치도 옵션'"
        >
          <template #custom-option="{ value, selectItem }">
            <div class="option-list type01">
              <ul class="custom-scr">
                <li v-for="item in editSelect.items" :key="item.value">
                  <HiButton color="link" class="item" :class="{ 'is-selected': item.value === value }" @click="selectItem(item)">
                    {{ item.title }}
                  </HiButton>
                  <HiButton color="link" class="append" @click="handleDeleteItem(item)">
                    <HiIcon name="ico-delete" color="disabled" size="20"></HiIcon>
                  </HiButton>
                </li>
              </ul>
              <HiButton color="link" class="add" @click="handleAddItem">
                <HiIcon name="ico-plus" color="orange" size="20"></HiIcon>
                <span>추가</span>
              </HiButton>
            </div>
          </template>
        </HiSelectBox>
        <HiSelectBox
          class="mr-10"
          :items="editSelect.items"
          :value="editSelect.selectedValue"
          :is-list-layout="true"
          @update:value="editSelect.selectedValue = $event"
          @delete-item="handleDeleteItem"
          @add-item="handleAddItem"
          :empty-title="editSelect.selectedValue || '그룹 불러오기'"
        >
          <template #custom-option="{ value, selectItem }">
            <div class="option-list type01">
              <ul class="custom-scr">
                <li v-for="item in editSelect.items" :key="item.value" class="pl-30">
                  <HiButton color="link" class="prepend" @click="handleDeleteItem(item)">
                    <HiIcon name="ico-minus3" color="white" bgColor="info" size="10" rounded="rounded"></HiIcon>
                  </HiButton>
                  <HiButton color="link" class="item" :class="{ 'is-selected': item.value === value }" @click="selectItem(item)">
                    {{ item.title }}
                  </HiButton>
                  <HiButton color="link" class="append" @click="handleDeleteItem(item)">
                    <HiIcon name="ico-delete" color="disabled" size="20"></HiIcon>
                  </HiButton>
                </li>
              </ul>
            </div>
          </template>
        </HiSelectBox>
        <HiSelectBox
          class="mr-10"
          :items="usage01.item"
          :value="formattedSelectedValues"
          :is-list-layout="true"
          @delete-item="handleDeleteItem"
          @add-item="handleAddItem"
          :empty-title="formattedSelectedValues || '게시판 리스트 옵션'"
        >
          <template #custom-option>
            <div class="board-list">
              <div class="board" v-for="item of usage01.item" :key="`board-list-${item.boardId}`">
                <p
                  class="board-name"
                  :class="{
                    on: usage01.chkMoveObj.boardId.includes(item.boardId),
                  }"
                >
                  <span class="title" v-if="item.folderCount > 0">{{ item.boardName }}</span>
                  <span class="title" v-else>
                    <input type="checkbox" name="move-board-chk" :id="`chk-board-${item.boardId}`" :value="item.boardId" v-model="usage01.chkMoveObj.boardId" />
                    <label :for="`chk-board-${item.boardId}`">
                      <span class="chk-title">{{ item.boardName }}</span>
                    </label>
                  </span>
                  <span class="auth">읽기({{ getAuth(item) }})</span>
                </p>
                <ul v-if="item.folderCount > 0">
                  <li
                    v-for="folderItem of item.folderList"
                    :key="`folder-list-${folderItem.folderId}`"
                    :class="{
                      on: usage01.chkMoveObj.folderId.includes(folderItem.folderId),
                    }"
                  >
                    <span class="check">
                      <input type="checkbox" name="move-board-chk" :id="`chk-folder-${folderItem.folderId}`" :value="folderItem.folderId" v-model="usage01.chkMoveObj.folderId" />
                      <label :for="`chk-folder-${folderItem.folderId}`">
                        <span class="chk-title"><i :style="`background: ${folderItem.color};`"></i>{{ folderItem.folderName }}</span>
                      </label>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </HiSelectBox>
      </div>
    </section>
  </article>
</template>

<script>
import HiButton from "@/components/Button/HiButton.vue";
import HiSelectBox from "@/components/Form/HiSelectBox.vue";
import HiIcon from "@/components/Icon/HiIcon.vue";
import board from "@/assets/js/board.js";

export default {
  name: "FormSys",
  components: { HiButton, HiSelectBox, HiIcon },
  data() {
    return {
      //기본 선택박스 데이터
      defaultSelect: {
        selectedValue: "",
        items: [
          { value: "기본옵션1", title: "기본옵션1" },
          { value: "기본옵션2", title: "기본옵션2" },
          { value: "기본옵션3", title: "기본옵션3" },
          { value: "기본옵션4", title: "기본옵션4" },
        ],
      },
      //다중 옵션 데이터
      multiSelect: {
        selectedValues: [],
        items: [
          { value: "다중옵션1", title: "다중옵션1" },
          { value: "다중옵션2", title: "다중옵션2" },
          { value: "다중옵션3", title: "다중옵션3" },
          { value: "다중옵션4", title: "다중옵션4" },
        ],
      },
      //옵션 편집 데이터
      editSelect: {
        selectedValue: "",
        items: [
          { value: "옵션1", title: "옵션1" },
          { value: "옵션2", title: "옵션2" },
          { value: "옵션3", title: "옵션3" },
          { value: "옵션4", title: "옵션4" },
        ],
      },
      usage01: {
        chkMoveObj: {
          boardId: [], // 체크박스 선택된 항목을 저장하기 위한 배열
          folderId: [], // 폴더 항목을 저장하기 위한 배열
        },
        item: board.list,
      },
    };
  },
  methods: {
    //옵션 삭제
    handleDeleteItem(item) {
      this.editSelect.items = this.editSelect.items.filter((i) => i.value !== item.value);
    },

    //옵션 추가
    handleAddItem() {
      const newValue = this.editSelect.items.length * 5 + 10; // 새로운 값을 계산하여 추가
      const newItem = { value: newValue, title: `${newValue}시` };
      this.editSelect.items.push(newItem);
      console.log(`추가된 아이템: ${newItem.title}`);
    },

    getAuth(item) {
      if (!item.isReadParents && !item.isReadStudent) {
        return "권한없음";
      } else if (item.isReadParents && item.isReadStudent) {
        return "학부모, 학생";
      } else if (item.isReadParents) {
        return "학부모";
      } else if (item.isReadStudent) {
        return "학생";
      }
    },
  },
  computed: {
    formattedSelectedValues() {
      const selectedBoards = this.usage01.item.filter((board) => this.usage01.chkMoveObj.boardId.includes(board.boardId)).map((board) => board.boardName);
      const selectedFolders = this.usage01.item.flatMap((board) =>
        board.folderList.filter((folder) => this.usage01.chkMoveObj.folderId.includes(folder.folderId)).map((folder) => `${board.boardName} > ${folder.folderName}`)
      );
      const combinedValues = [...selectedBoards, ...selectedFolders].join(", ");
      return combinedValues;
    },
  },
};
</script>
<style lang="scss" scoped>
.formSys {
  .hi-selectbox {
    width: 24%;
  }
}
</style>
