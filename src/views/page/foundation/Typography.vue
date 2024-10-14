<template>
  <HiModal class="export" type="type01" size="lg" @close="$set(modalType, 0, false)">
      <template v-slot:heading
        >게시글 내보내기
        <p class="smr">내보내기 할 클래스와 게시판을 선택해주세요.</p>
      </template>
      <template v-slot:content>
        <div class="hi-row no-gutters">
          <div class="col-sm-6 txt-left">
            <HiSelectBox
              :items="group.items"
              :value="group.selectedValue"
              :is-list-layout="true"
              @update:value="group.selectedValue = $event"
              @delete-item="handleDeleteItem"
              @add-item="handleAddItem"
              :empty-title="group.selectedValue || '그룹불러오기'"
            >
              <template #custom-option="{ value, selectItem }">
                <div class="option-list type01">
                  <ul class="custom-scr">
                    <li class="pl-30 pr-30" v-for="item in group.items" :key="item.value">
                      <HiButton color="link" class="prepend" @click="handleDeleteItem(item)">
                        <HiIcon name="ico-minus3" color="white" bgColor="info" size="10" rounded="rounded"></HiIcon>
                      </HiButton>
                      <HiButton color="link" class="item" :class="{ 'is-selected': item.value === value }" @click="selectItem(item)">
                        {{ item.title }}
                      </HiButton>
                      <HiButton color="link" class="append" @click="handleEditItem(item)">
                        <HiIcon name="ico-delete" color="disabled" size="20"></HiIcon>
                      </HiButton>
                    </li>
                  </ul>
                </div>
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
                  :items="exportBoard.item"
                  :value="formattedSelectedValues"
                  :is-list-layout="true"
                  :empty-title="formattedSelectedValues || '게시판 리스트 옵션'"
                >
                  <template #custom-option>
                    <div class="board-list">
                      <div class="board" v-for="item of exportBoard.item" :key="`board-list-${item.boardId}`">
                        <div
                          class="board-name"
                          :class="{
                            on: exportBoard.chkMoveObj.boardId.includes(item.boardId),
                          }"
                        >
                          <div class="title" v-if="item.folderCount > 0">{{ item.boardName }}</div>
                          <div class="title" v-else>
                            <input type="checkbox" name="move-board-chk" :id="`chk-board-${item.boardId}`" :value="item.boardId" v-model="exportBoard.chkMoveObj.boardId" />
                            <label :for="`chk-board-${item.boardId}`">
                              <span class="chk-title">{{ item.boardName }}</span>
                            </label>
                          </div>
                          <div class="auth">읽기({{ getAuth(item) }})</div>
                        </div>
                        <ul v-if="item.folderCount > 0">
                          <li
                            v-for="folderItem of item.folderList"
                            :key="`folder-list-${folderItem.folderId}`"
                            :class="{
                              on: exportBoard.chkMoveObj.folderId.includes(folderItem.folderId),
                            }"
                          >
                            <span class="check">
                              <input type="checkbox" name="move-board-chk" :id="`chk-folder-${folderItem.folderId}`" :value="folderItem.folderId" v-model="exportBoard.chkMoveObj.folderId" />
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
</template>

<script>
import HiModal from "@/components/Modal/HiModal.vue";
import HiButton from "@/components/Button/HiButton.vue";
import HiSelectBox from "@/components/Form/HiSelectBox.vue";
import HiIcon from "@/components/Icon/HiIcon.vue";
export default {
  name: 'ComponentsModal',
  components: { HiModal, HiButton, HiSelectBox, HiIcon },
  data() {
    return {
      group: {
        selectedValue: '',
        items: [
          { value: '1학년 수학게시판', title: '1학년 수학게시판' },
          { value: '1학년 알람장', title: '1학년 알림장' },
          { value: '1학년 과제게시판', title: '1학년 과제게시판' },
          { value: '2학년 수학게시판', title: '2학년 수학게시판' },
        ],
      },      
      exportBoard: {
        chkMoveObj: {
          boardId: [], // 체크박스 선택된 항목을 저장하기 위한 배열
          folderId: [], // 폴더 항목을 저장하기 위한 배열
        },
        item:  [
        {
          boardId: '1',
          boardName: '알림장',
          folderCount: 3,
          folderList: [
            {
              folderId: '11',
              folderName: '퇴근 알림',
              color: '#FE7143',
            },
            {
              folderId: '12',
              folderName: '휴무 알림',
              color: '#FFBF09',
            },
          ],
        },
        {
          boardId: '2',
          boardName: '앨범',
          folderCount: 0,
          folderList: [],
        },
        {
          boardId: '3',
          boardName: '자유게시판',
          folderCount: 0,
          folderList: [],
        },
        {
          boardId: '4',
          boardName: '과제',
          folderCount: 5,
          folderList: [
            {
              folderId: '41',
              folderName: '내일과제',
              color: '#555555',
            },
            {
              folderId: '42',
              folderName: '과제없음',
              color: '#f85c8e',
            }
          ],
        }
      ],
      },
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

    //옵션 삭제
    handleDeleteItem(item) {
      this.group.items = this.group.items.filter((i) => i.value !== item.value);
    },

    //옵션 수정
    handleEditItem(item) {
      console.log("아이템 수정");
    },

    //옵션 추가
    handleAddItem() {
      console.log("추가된 아이템");
    },
  },
  computed: {
    formattedSelectedValues() {
      const selectedBoards = this.exportBoard.item.filter((board) => this.exportBoard.chkMoveObj.boardId.includes(board.boardId)).map((board) => board.boardName);
      const selectedFolders = this.exportBoard.item.flatMap((board) =>
        board.folderList.filter((folder) => this.exportBoard.chkMoveObj.folderId.includes(folder.folderId)).map((folder) => `${board.boardName} > ${folder.folderName}`)
      );
      const combinedValues = [...selectedBoards, ...selectedFolders].join(", ");
      return combinedValues;
    },
  },
};
</script>
<style lang="scss" scoped>
.export {
  ::v-deep .modal__layer {
    height: 860px;
  }
  .hi-selectbox {
    width: 300px;
  }
  .export-list{
    border: 1px solid var(--gray-05);
    border-radius: 10px;
    padding: 5px 0;
    > li{
      > label{
        display: flex;
        align-items: center;
        padding: 5px 15px;
        > span{
        }
      }
    }
  }
}
</style>
