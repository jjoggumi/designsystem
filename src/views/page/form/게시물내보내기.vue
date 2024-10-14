<template> 
  <article class="modalSys">
    <HiModal addClassName="send modal-message modal-lg" @close="$set(modalType, 0, false)">
      <template v-slot:heading
        >게시글 내보내기
        <p class="smr">내보내기 할 클래스와 게시판을 선택해주세요.</p>
      </template>
      <template v-slot:content>
        <div class="hi-row">
          <div class="col-sm-6">
            <HiSelectBox
              :items="select.items"
              :value="select.selectedValue"
              :is-list-layout="true"
              @update:value="select.selectedValue = $event"
              @delete-item="handleDeleteItem"
              @add-item="handleAddItem"
              :empty-title="select.selectedValue"
            >
              <template #custom-option="{ value, selectItem }">
                <ul class="list-type01">
                  <li v-for="item in select.items" :key="item.value">
                    <button type="button" class="option" :class="{ 'is-selected': item.value === value }" @click="selectItem(item)">
                      {{ item.title }}
                    </button>
                    <button type="button" class="del" @click="handleDeleteItem(item)">
                      <HiIcon name="ico-delete" color="default" size="20"></HiIcon>
                    </button>
                  </li>
                </ul>
                <button type="button" class="add" @click="handleAddItem">
                  <HiIcon name="ico-plus" color="orange" size="20"></HiIcon>
                  <span>추가</span>
                </button>
              </template>
            </HiSelectBox>
          </div>
          <div class="col-sm-6 txt-right">
            <HiButton color="line-default" size="lg" @click="">
              <HiIcon name="ico-chart" size="20"></HiIcon>
              그룹저장
            </HiButton>
          </div>
        </div>

        <ul class="export-list">
          <li>
            <input type="checkbox" name="move-board-chk" :id="1" />
            <label :for="1">
              <span
                >경기 시공초등학교 1학년 1반
                <HiSelectBox
                  :items="select.items"
                  :value="select.selectedValues"
                  :is-list-layout="true"
                  @update:value="chkMoveObj.boardId"
                  @delete-item="handleDeleteItem"
                  @add-item="handleAddItem"
                  :empty-title="select.selectedValues.join(', ') || '선택하세요'"
                >
                  <template #custom-option>
                    <div class="board-list">
                      <div class="board" v-for="item of list" :key="`board-list-${item.boardId}`">
                        <p
                          class="board-name"
                          :class="{
                            on: chkMoveObj.boardId.includes(item.boardId),
                          }"
                        >
                          <span class="title" v-if="item.folderCount > 0">{{ item.boardName }}</span>
                          <span class="title" v-else>
                            <input
                              type="checkbox"
                              name="move-board-chk"
                              :id="`chk-board-${item.boardId}`"
                              :value="item.boardId"
                              v-model="chkMoveObj.boardId"
                            />
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
                              on: chkMoveObj.folderId.includes(folderItem.folderId),
                            }"
                          >
                            <span class="check">
                              <input
                                type="checkbox"
                                name="move-board-chk"
                                :id="`chk-board-${folderItem.folderId}`"
                                :value="folderItem.folderId"
                                v-model="chkMoveObj.folderId"
                              />
                              <label :for="`chk-board-${folderItem.folderId}`">
                                <span class="chk-title"><i :style="`background: ${folderItem.color};`"></i>{{ folderItem.folderName }}</span>
                              </label>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </template>
                </HiSelectBox>
                게시판으로 보냅니다
              </span>
            </label>
          </li>
        </ul>
      </template>
      <template v-slot:footer>
        <HiButton color="line-default" size="lg" @click="$set(modalType, 0, false)">취소</HiButton>
        <HiButton color="primary" size="lg" @click="$set(modalType, 0, false)">확인</HiButton>
      </template>
    </HiModal>
  </article>
</template>

<script>
import HiModal from '@/components/Modal/HiModal.vue';
import HiButton from '@/components/Button/HiButton.vue';
import HiSelectBox from '@/components/Form/HiSelectBox.vue';
import HiIcon from '@/components/Icon/HiIcon.vue';
import board from '@/assets/js/board.js';
export default {
  name: 'ComponentsModal',
  components: { HiModal, HiButton, HiSelectBox, HiIcon },
  data() {
    return {
      select: {
        selectedValue: '그룹 불러오기',
        selectedValues: [], // 다중 선택된 옵션 배열
        items: [
          { value: '1학년 수학게시판', title: '1학년 수학게시판' },
          { value: '1학년 알람장', title: '1학년 알림장' },
          { value: '1학년 과제게시판', title: '1학년 과제게시판' },
          { value: '2학년 수학게시판', title: '2학년 수학게시판' },
        ],
      },

      chkMoveObj: {
        boardId: [], // 체크박스 선택된 항목을 저장하기 위한 배열
        folderId: [], // 폴더 항목을 저장하기 위한 배열
      },
      list: board.list,
    };
  },
  methods: {
    getAuth(item) {
      if (!item.isReadParents && !item.isReadStudent) {
        return '권한없음';
      } else if (item.isReadParents && item.isReadStudent) {
        return '학부모, 학생';
      } else if (item.isReadParents) {
        return '학부모';
      } else if (item.isReadStudent) {
        return '학생';
      }
    },

    // 옵션 다중선택
    multiSelectedValues(value) {
      const index = this.select.selectedValues.indexOf(value);
      if (index === -1) {
        this.select.selectedValues.push(value);
      } else {
        this.select.selectedValues.splice(index, 1);
      }
    },

    //옵션 삭제
    handleDeleteItem(item) {
      this.select.items = this.select.items.filter((i) => i.value !== item.value);
    },

    //옵션 추가
    handleAddItem() {
      const newValue = this.select.items.length * 5 + 10; // 새로운 값을 계산하여 추가
      const newItem = { value: newValue, title: `${newValue}시` };
      this.select.items.push(newItem);
      console.log(`추가된 아이템: ${newItem.title}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.send {
  ::v-deep .modal__layer {
    height: 860px;
  }
}
.hi-selectbox {
  width: 300px;
}
.export-list {
  border: 1px solid #eee;
  border-radius: 20px;
  height: 620px;
}
.modalSys {
  section > button {
    margin: 0.3rem;
  }
  .ctrArea {
    flex-wrap: wrap;
    .elArea {
      position: relative;
      min-height: 270px;
      .hi-modal-common {
        position: absolute;
        z-index: 999;
      }
    }
    .codeArea {
      width: 100%;
    }
  }
}
</style>
