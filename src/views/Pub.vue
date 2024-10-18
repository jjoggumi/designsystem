<!--
@File(Method): -
@Author: -
@Date Created: -
@Description: 게시판 내보내기 모달
-->
<template>
  <div>
    <HiModal class="post-export" type="type01" size="lg" @close="$set(modalType, 0, false)">
      <template v-slot:heading>
        게시글 내보내기
        <div class="smr">내보내기 할 클래스와 게시판을 선택해주세요.</div>
      </template>
      <template v-slot:content>
        <div class="hi-row no-gutters mb-10">
          <div class="col-sm-6 txt-left">
            <HiButton color="light-primary" size="sm" bitrounded @click="handleFetchGroups">
              <HiIcon name="ico-star-fill" size="18"></HiIcon>
              그룹불러오기
            </HiButton>
            <div class="option-list type01" v-if="fetchGroups" v-click-outside="closeFetchGroups">
              <ul class="custom-scr">
                <li v-if="groups.length === 0" class="no-data">
                  <HiIcon name="ico-warning-circle-fill" color="disabled" size="50"></HiIcon>
                  등록된 그룹이 없습니다.
                </li>
                <li v-else v-for="group in groups" :key="group.value">
                  <HiButton color="link" class="item" :class="{ 'is-selected': group.value === selectedGroup }" @click="handleSelectedGroup(group)">
                    {{ group.title }}
                  </HiButton>
                  <div class="append">
                    <HiButton color="link" @click="handleEditGroup(group)">
                      <HiIcon name="ico-pen" color="white" size="20" rounded="rounded"></HiIcon>
                    </HiButton>
                    <HiButton color="link" @click="handleDeleteGroup(group)">
                      <HiIcon name="ico-delete" size="20"></HiIcon>
                    </HiButton>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 txt-right">
            <HiButton color="line-default" size="sm" bitrounded @click="">
              <HiIcon name="ico-plus2" size="18"></HiIcon>
              그룹저장
            </HiButton>
          </div>
        </div>
        <ul class="export-list custom-scr">
          <li v-for="(classItem, index) in classInfo" :key="index">
            <input type="checkbox" name="export-board-chk" :id="`chk-class-${classItem.classId}`" />
            <label :for="`chk-class-${classItem.classId}`">
              <span>
                <div class="class-name">{{ classItem.className }}</div>
                <HiSelectBox :items="classItem.classBoard" :value="formattedSelectedValues[index]" :is-list-layout="true" :empty-title="formattedSelectedValues[index] || '게시판을 선택해주세요.'">
                  <template #custom-option>
                    <div class="board-list">
                      <div class="board" v-for="item of classItem.classBoard" :key="`board-list-${item.boardId}`">
                        <div
                          class="board-name"
                          :class="{
                            on: classItem.chkMoveObj.boardId.includes(item.boardId),
                          }"
                        >
                          <div class="title" v-if="item.folderCount > 0">{{ item.boardName }}</div>
                          <div class="title" v-else>
                            <input type="checkbox" name="move-board-chk" :id="`chk-board-${item.boardId}`" :value="item.boardId" v-model="classItem.chkMoveObj.boardId" />
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
                              on: classItem.chkMoveObj.folderId.includes(folderItem.folderId),
                            }"
                          >
                            <span class="check">
                              <input type="checkbox" name="move-board-chk" :id="`chk-folder-${folderItem.folderId}`" :value="folderItem.folderId" v-model="classItem.chkMoveObj.folderId" />
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
        <HiButton color="secondary" @click="openModal('modal6')">모달 열기</HiButton>
      </template>
    </HiModal>

    <HiModal type="type01" size="xs" v-if="modals.modal1" closeSkip @close="closeModal('modal1')">
      <template v-slot:heading>이미 선택된 게시판이 있습니다.</template>
      <template v-slot:content>선택 해제하고 그룹을 불러오시겠습니까.</template>
      <template v-slot:footer>
        <HiButton color="line-primary" size="lg" @click="closeModal('modal1')">취소</HiButton>
        <HiButton color="primary" size="lg">확인</HiButton>
      </template>
    </HiModal>

    <HiModal type="type01" size="xs" v-if="modals.modal2" closeSkip @close="closeModal('modal2')">
      <template v-slot:heading>내보내기 그룹을 삭제하시겠습니까.</template>
      <template v-slot:content>삭제된 그룹은 복구되지 않습니다.</template>
      <template v-slot:footer>
        <HiButton color="line-primary" size="lg" @click="closeModal('modal2')">취소</HiButton>
        <HiButton color="info" size="lg">삭제</HiButton>
      </template>
    </HiModal>

    <HiModal type="type01" size="xs" v-if="modals.modal3" closeSkip @close="closeModal('modal3')">
      <template v-slot:heading>내보내기 중입니다.</template>
      <template v-slot:content>
        <div class="w100">
          <p>6/77</p>
          <div class="progressbar">
            <span class="bar" style="width: calc(6 / 77 * 100%)"></span>
          </div>
        </div>
      </template>
    </HiModal>

    <HiModal type="type01" size="sm" v-if="modals.modal4" closeSkip @close="closeModal('modal4')">
      <template v-slot:heading>그룹 저장하기</template>
      <template v-slot:content
        >선택된 클래스와 게시판을 그룹으로 저장합니다.
        <div class="input-box-wrap mt-30">
          <input type="text" id="userName" maxlength="20" placeholder="그룹명을 입력해주세요." />
        </div>
      </template>
      <template v-slot:footer>
        <HiButton color="line-primary" size="lg" @click="closeModal('modal4')">취소</HiButton>
        <HiButton color="primary" size="lg">저장</HiButton>
      </template>
    </HiModal>

    <HiModal type="type01" size="sm" v-if="modals.modal5" closeSkip @close="closeModal('modal5')">
      <template v-slot:heading>그룹명 수정하기</template>
      <template v-slot:content>
        <div class="input-box-wrap">
          <input type="text" id="userName" maxlength="20" value="1학년 전체 알림장" />
        </div>
      </template>
      <template v-slot:footer>
        <HiButton color="line-primary" size="lg" @click="closeModal('modal5')">취소</HiButton>
        <HiButton color="primary" size="lg">수정</HiButton>
      </template>
    </HiModal>

    <HiModal class="export-noti" type="type01" size="sm" v-if="modals.modal6" closeSkip @close="closeModal('modal6')">
      <template v-slot:content>
        <p><strong>내보내기가 완료되지 않은 클래스/게시판이 있습니다.</strong></p>
        <p>다시 시도 하시겠습니까?</p>
        <div class="textbox custom-scr">
          <ul class="txt-left">
            <li>서울시공초등학교 1학년 하늘반 알림장</li>
            <li>서울시공초등학교 1학년 하늘반 알림장</li>
            <li>서울시공초등학교 1학년 하늘반 알림장</li>
            <li>서울시공초등학교 1학년 하늘반 알림장</li>
            <li>서울시공초등학교 1학년 하늘반 알림장</li>
            <li>서울시공초등학교 1학년 하늘반 알림장</li>
          </ul>
        </div>
      </template>
      <template v-slot:footer>
        <HiButton color="line-primary" size="lg" @click="closeModal('modal6')">취소</HiButton>
        <HiButton color="primary" size="lg">저장</HiButton>
      </template>
    </HiModal>
  </div>
</template>

<script>
import HiModal from "@/components/Modal/HiModal.vue";
import HiButton from "@/components/Button/HiButton.vue";
import HiSelectBox from "@/components/Form/HiSelectBox.vue";
import HiIcon from "@/components/Icon/HiIcon.vue";
import board from "@/assets/js/board.js";
export default {
  name: "ComponentsModal",
  components: { HiModal, HiButton, HiSelectBox, HiIcon },
  data() {
    return {
      modals: {},
      fetchGroups: false,
      selectedGroup: "",
      groups: [
        { value: "1학년 수학게시판", title: "1학년 수학게시판" },
        { value: "2학년 알람장", title: "2학년 알림장" },
        { value: "3학년 과제게시판", title: "3학년 과제게시판" },
        { value: "4학년 수학게시판", title: "4학년 수학게시판" },
      ],
      classInfo: board.classInfo,
    };
  },
  methods: {
    openModal(modalName) {
      // 동적으로 모달 상태 설정
      this.$set(this.modals, modalName, true);
    },
    closeModal(modalName) {
      // 동적으로 모달 상태 해제
      this.$set(this.modals, modalName, false);
    },

    //그룹 열기
    handleFetchGroups() {
      this.fetchGroups = !this.fetchGroups;
    },
    closeFetchGroups() {
      this.fetchGroups = false;
    },

    //선택 그룹
    handleSelectedGroup(group) {
      this.selectedGroup = this.groups.filter((i) => i.value === group.value);
    },

    //그룹 삭제
    handleDeleteGroup(group) {
      this.groups = this.groups.filter((i) => i.value !== group.value);
    },

    //그룹명 수정
    handleEditGroup(group) {
      console.log(group + "아이템 수정");
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
      return this.classInfo.map((classItem) => {
        const selectedBoards = classItem.classBoard.filter((board) => classItem.chkMoveObj.boardId.includes(board.boardId)).map((board) => board.boardName);

        const selectedFolders = classItem.classBoard.flatMap((board) =>
          board.folderList.filter((folder) => classItem.chkMoveObj.folderId.includes(folder.folderId)).map((folder) => `${board.boardName} > ${folder.folderName}`)
        );

        const combinedValues = [...selectedBoards, ...selectedFolders].join();
        return combinedValues;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.post-export {
  ::v-deep .modal__layer {
    height: 860px;
    .modal__content {
      height: calc(100% - 172px);
    }
  }
  .option-list {
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    overflow: hidden;
    width: 260px;
    max-height: 223px;
    position: absolute;
    top: 35px;
    background: #fff;
    z-index: 1;

    > ul {
      max-height: 100%;
      > li {
        .append > button {
          width: 40px;
          height: 40px;

          i:after {
            background-color: #bdbdbd;
          }
          &:hover {
            > i:after {
              background-color: #616161;
            }
          }
        }
        &:hover {
          padding-right: 70px;
        }
      }
    }
  }
  .export-list {
    border: 1px solid var(--gray-05);
    border-radius: 6px;
    padding: 12px 0;
    height: calc(100% - 35px);
    overflow-y: scroll;

    > li {
      > label {
        display: flex;
        align-items: center;
        padding: 8px 20px;
        > span {
          display: flex;
          align-items: center;
          .class-name {
            width: 220px;
            text-align: left;
          }
          .hi-selectbox {
            width: 340px;
            margin: 0 10px;
          }
        }
      }
    }
  }

  .export-noti::v-deep {
    border: 10px solid #c00000;
    .textbox {
      ul > li {
        font-size: 14px;
      }
    }
  }
}
</style>
