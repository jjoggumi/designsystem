<template>
  <div class="hi-searchbox">
    <div class="searchbox__select">
      <button class="selected" @click="toggleSelecbox = !toggleSelecbox">전체</button>
      <div class="option__layer" v-show="toggleSelecbox" @click="toggleSelecbox = !toggleSelecbox" style="display: block">
        <button class="option">전체</button>
        <button class="option" @click="toggleLayer = !toggleLayer">작성자</button>
        <button class="option" @click="toggleCalendar = !toggleCalendar">작성일</button>
      </div>
    </div>

    <div class="searchbox__input">
      <input type="text" placeholder="게시글 검색" @input="searchChangeFunc" id="input">
      <button class="btn-delete" v-show="toggleDeleteBtn" @click="deleteText()" style="display: none"></button>
      <i class="icon-calendar" v-show="toggleCalendar" @click="toggleCalendar = !toggleCalendar" style="display: block;"></i>
      <button class="btn-search"></button>
    </div>

    <div class="calendar__layer" v-show="toggleCalendar" @click="toggleCalendar = !toggleCalendar" style="display: block">
      <div class="calendar__top">
        <div class="heading">2022년 06월</div>
        <button class="btn-prev"></button>
        <button class="btn-next"></button>
        <button class="btn-today">오늘</button>
      </div>
      <div class="calendar__table">
        <table>
          <thead>
            <tr>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="empty"></td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
            <tr>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
            </tr>
            <tr>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td class="today is-selected">18</td>
              <td>19</td>
              <td>20</td>
            </tr>
            <tr>
              <td>21</td>
              <td>22</td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td>26</td>
              <td>27</td>
            </tr>
            <tr>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td class="empty"></td>
              <td class="empty"></td>
              <td class="empty"></td>
              <td class="empty"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="searchbox__layer" v-show="toggleLayer" style="display: block;">
      <div class="nodata">
        <p>구성원 목록이 없습니다.</p>
      </div>
      <button @click="toggleLayer = !toggleLayer">
        <div class="image"><img src="https://download.hiclass.net/7e60/8260/8a60/c760/b2fbe1c4-cae9-4988-be60-43a956dac5df.jpg" alt=""></div>
        <div class="text"><strong class="highlight">이하영</strong> vietnamés Chữ nho Вьетнамски=نامية vietnamés Chữ nho Вьетнамски=نامية</div>
      </button>
      <button @click="toggleLayer = !toggleLayer">
        <div class="image"></div>
        <div class="text"><strong class="highlight">이하영</strong> 선생님</div>
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HiSearchBox',
  data() {
    return {
      toggleSelecbox: false,
      toggleLayer: false,
      toggleCalendar: false,
      toggleDeleteBtn: false,
    }
  },
  methods: {
    searchChangeFunc(e) {
      const value = e.target.value;

      if(value) {
        this.toggleDeleteBtn = true 
      } else {
        this.toggleDeleteBtn = false
      }
    },
    deleteText() {
      this.toggleDeleteBtn = false;
      document.getElementById('input').value = '';
    }
  }
}
</script>
