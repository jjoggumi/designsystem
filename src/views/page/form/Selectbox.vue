<template>
  <article class="formSys">
    <section>
      <h2>Selectbox Default</h2>
      <div>
        <HiSelectBox :value="select.selectedValue" @update:value="select.selectedValue = $event" :items="select.items" :empty-title="select.selectedValue"  class="mr-10" />
      </div>
    </section>
    <section>
      <h2>Edit Option</h2>
      <div>
        <HiSelectBox
        class="type01"
        :items="select.items"
        :value="select.selectedValue"
        :is-list-layout="true"
        @update:value="select.selectedValue = $event"
        @delete-item="handleDeleteItem"
        @add-item="handleAddItem"
        :empty-title="select.selectedValue"
      >
        <template #custom-option="{value, selectItem }">
          <ul>
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
          <span>추가</span></button>
        </template>
      </HiSelectBox>
      </div>
    </section>
    <section>
      <h2>Multiple Option</h2>
      <div>
       <HiSelectBox
          class="type01"
          :items="select.items"
          :value="select.selectedValues" 
          :is-list-layout="true"
          @update:value="multiSelectedValues"
          @delete-item="handleDeleteItem"
          @add-item="handleAddItem"
          :empty-title="select.selectedValues.join(', ') || '선택하세요'"
        >
          <template #custom-option>
            <ul>
              <li v-for="item in select.items" :key="item.value">
                <input 
                  type="checkbox" 
                  :id="`check-${item.value}`" 
                  :value="item.value" 
                  v-model="select.selectedValues" 
                >
                <label :for="`check-${item.value}`"><span>{{ item.title }}</span></label>
              </li>
            </ul>
          </template>
        </HiSelectBox>
      </div>
    </section>
    <section>
      <h2>Multiple Option</h2>
      <div>
       <HiSelectBox
          class="type01"
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
                <p class="board-name"
                  :class="{
                    'on': chkMoveObj.boardId === item.boardId
                  }"
                >
                  <span class="title" v-if="item.folderCount > 0">{{ item.boardName }}</span>
                  <span class="title" v-else>                      
                    <input type="radio" name="move-board-chk" :id="`chk-board-${item.boardId}`" 
                      :value="item"
                      v-model="chkMoveObj"
                    />
                    <label :for="`chk-board-${item.boardId}`">
                      <span class="chk-title">{{ item.boardName }}</span>
                    </label>
                  </span>
                  <span class="auth">읽기({{ getAuth(item) }})</span>
                </p>
                <ul v-if="item.folderCount > 0">
                  <li v-for="folderItem of item.folderList" :key="`folder-list-${folderItem.folderId}`"                      
                    :class="{
                      'on': chkMoveObj.folderId === folderItem.folderId
                    }"
                  >
                    <span class="check">
                      <input type="radio" name="move-board-chk" :id="`chk-board-${folderItem.folderId}`"                   
                        :value="folderItem"
                        v-model="chkMoveObj"
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
      </div>
    </section>
  </article>
</template>
  
<script>
import HiSelectBox from "@/components/HiSelectBox.vue";
import HiIcon from "@/components/HiIcon.vue";

export default {
  name : 'FormSys',
  components: { HiSelectBox, HiIcon},
  data(){
    return{
      select:{
        selectedValue: "선택하세요",
        selectedValues: [], // 다중 선택된 옵션 배열
        items: [
          { value: "10", title: "10시" },
          { value: "20", title: "20시" },
          { value: "30", title: "30시" },
          { value: "40", title: "40시" },
        ],
       
      },
      
      chkMoveObj: {},
      moveObj: {},
      list: [
    {
        "boardId": "9b0357e8-5ec2-497c-88fc-4af32569a4cb",
        "parentId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
        "boardName": "알림장",
        "boardStatus": "ACTIVATE",
        "sortNo": 1,
        "isUsedFolder": true,
        "postType": "NOTE",
        "isDefault": true,
        "isWriteParents": false,
        "isWriteStudent": false,
        "isReadParents": true,
        "isReadStudent": true,
        "isUsedComment": false,
        "isCommentParents": false,
        "isCommentStudent": false,
        "isUsedLike": true,
        "folderCount": 3,
        "folderList": [
            {
                "folderId": "724e9016-5073-479c-918d-8b40c31b617e",
                "classId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
                "folderName": "새 폴더",
                "sortNo": 1,
                "color": "#555555",
                "isDefault": true,
                "postCount": 0
            },
            {
                "folderId": "1723d135-6ccf-45d3-98ed-dd8fb7434bfc",
                "classId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
                "folderName": "22",
                "sortNo": 2,
                "color": "#FE7143",
                "isDefault": false,
                "postCount": 0
            },
            {
                "folderId": "2e77afa9-8eb7-45f9-a0d7-51f8c91acc96",
                "classId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
                "folderName": "33",
                "sortNo": 3,
                "color": "#FFBF09",
                "isDefault": false,
                "postCount": 0
            }
        ]
    },
    {
        "boardId": "417f494a-6307-43b0-8def-b45329f92a63",
        "parentId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
        "boardName": "앨범",
        "boardStatus": "ACTIVATE",
        "sortNo": 2,
        "isUsedFolder": false,
        "postType": "ALBUM",
        "isDefault": true,
        "isWriteParents": false,
        "isWriteStudent": false,
        "isReadParents": true,
        "isReadStudent": true,
        "isUsedComment": true,
        "isCommentParents": true,
        "isCommentStudent": true,
        "isUsedLike": true,
        "folderCount": 0,
        "folderList": []
    },
    {
        "boardId": "0122a704-e56e-4a9b-b208-0ea800aa9d1a",
        "parentId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
        "boardName": "자유게시판",
        "boardStatus": "ACTIVATE",
        "sortNo": 3,
        "isUsedFolder": false,
        "postType": "BOARD",
        "isDefault": true,
        "isWriteParents": true,
        "isWriteStudent": false,
        "isReadParents": true,
        "isReadStudent": true,
        "isUsedComment": true,
        "isCommentParents": true,
        "isCommentStudent": true,
        "isUsedLike": true,
        "folderCount": 0,
        "folderList": []
    },
    {
        "boardId": "f76687d8-3f4d-4e83-9232-db18028845dd",
        "parentId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
        "boardName": "과제",
        "boardStatus": "ACTIVATE",
        "sortNo": 4,
        "isUsedFolder": true,
        "postType": "HOMEWORK",
        "isDefault": true,
        "isWriteParents": true,
        "isWriteStudent": true,
        "isReadParents": true,
        "isReadStudent": true,
        "isUsedComment": false,
        "isCommentParents": false,
        "isCommentStudent": false,
        "isUsedLike": false,
        "folderCount": 5,
        "folderList": [
            {
                "folderId": "c1ca5da4-85cb-4b13-b0f2-098cd8e5235c",
                "classId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
                "folderName": "새 폴더",
                "sortNo": 1,
                "color": "#555555",
                "isDefault": true,
                "postCount": 0
            },
            {
                "folderId": "169db17a-5e65-4904-9d44-6a12d7533d45",
                "classId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
                "folderName": "추가",
                "sortNo": 2,
                "color": "#f85c8e",
                "isDefault": false,
                "postCount": 0
            },
            {
                "folderId": "93474ed8-cc47-4db3-8bf2-2c8ac8033ffb",
                "classId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
                "folderName": "3",
                "sortNo": 3,
                "color": "#555555",
                "isDefault": false,
                "postCount": 0
            },
            {
                "folderId": "27d7e737-1acf-4a3c-8523-e4ed61f54807",
                "classId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
                "folderName": "123",
                "sortNo": 4,
                "color": "#555555",
                "isDefault": false,
                "postCount": 0
            },
            {
                "folderId": "1ce62aea-2ba2-45c5-8733-0ec4cb145e35",
                "classId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
                "folderName": "234",
                "sortNo": 5,
                "color": "#555555",
                "isDefault": false,
                "postCount": 0
            }
        ]
    },
    {
        "boardId": "cc6df3bb-f1a0-48db-8a69-31794076a7cb",
        "parentId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
        "boardName": "폴더O 댓글X",
        "boardStatus": "ACTIVATE",
        "sortNo": 5,
        "isUsedFolder": true,
        "postType": "BOARD",
        "isDefault": false,
        "isWriteParents": false,
        "isWriteStudent": false,
        "isReadParents": true,
        "isReadStudent": true,
        "isUsedComment": false,
        "isCommentParents": false,
        "isCommentStudent": false,
        "isUsedLike": false,
        "folderCount": 2,
        "folderList": [
            {
                "folderId": "13568128-6046-4130-aecc-9a95e9d039fe",
                "classId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
                "folderName": "1111",
                "sortNo": 1,
                "color": "#F85C8E",
                "isDefault": false,
                "postCount": 0
            },
            {
                "folderId": "d7149801-ef5a-476d-9bfd-b46d63ee4c5f",
                "classId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
                "folderName": "2222",
                "sortNo": 2,
                "color": "#FE7143",
                "isDefault": false,
                "postCount": 0
            }
        ]
    },
    {
        "boardId": "1c05d661-c758-470d-a228-961637f2189e",
        "parentId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
        "boardName": "댓글 학생만",
        "boardStatus": "ACTIVATE",
        "sortNo": 6,
        "isUsedFolder": true,
        "postType": "BOARD",
        "isDefault": false,
        "isWriteParents": false,
        "isWriteStudent": false,
        "isReadParents": true,
        "isReadStudent": true,
        "isUsedComment": true,
        "isCommentParents": false,
        "isCommentStudent": true,
        "isUsedLike": false,
        "folderCount": 1,
        "folderList": [
            {
                "folderId": "d8bbcad6-eb74-4d14-9fff-eb0ef341a91b",
                "classId": "42ff2771-8670-4c7e-ad95-4a47e3b38bf0",
                "folderName": "추가",
                "sortNo": 1,
                "color": "#555555",
                "isDefault": true,
                "postCount": 0
            }
        ]
    }
]
    }
  },
  methods: {
    
    getAuth(item) {
      if(!item.isReadParents && !item.isReadStudent) {
        return "권한없음"
      } else if(item.isReadParents && item.isReadStudent) {
        return "학부모, 학생"
      } else if(item.isReadParents) {
        return "학부모"
      } else if(item.isReadStudent) {
        return "학생"
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