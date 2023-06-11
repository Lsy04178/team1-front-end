import Main from '../../pages/Main';
import PostModal from '../Modal/PostModal';
import SearchModal from '../Modal/SearchModal';
import './Nav.css';
import { exchangeModal } from '../utils/exchangeModal';

/**
 * TODO:
 * 1. 홈 버튼: 클릭 시 fetch 후, window의 스크롤을 최상단으로 이동
 * 2. 검색 버튼: 클릭 시 검색하는 창 띄우기 sidebar 옆으로
 * 3. 만들기 버튼: 클릭 시 `사진과 동영상을 끌어다 놓으세요` 컴포넌트 작성
 * 4. 더 보기 버튼
 *  - 설정 버튼: 클릭 시 설정 페이지로 이동
 *  - 내 활동 버튼: 클릭 시 내 활동 페이지로 이동
 *  - 모드 전환: 클릭 시 dropdown 메뉴로 `라이트 모드`와 `어두운 모드` 표시하는 컴포넌트 띄우기
 *  - 로그아웃: 클릭시 로그아웃
 */

class Nav extends HTMLDivElement {
  constructor() {
    super();

    this.classList.add('nav-full');

    this.innerHTML = `
      <div class="nav-header-logo">
        <div class="header-logo">
          <div>
            <object data="/assets/image/insta-logo.svg"></object>
          </div>
        </div>
      </div>
      <div class="nav-list-contain flex-fill">
        <ul class="nav-list">
          <li class="nav-home">
            <div>
              <object data="/assets/image/icons/home.svg"></object>
              <span class="item-name">홈</span>
            </div>
          </li>
          <li class="nav-search">
            <div>
              <object data="/assets/image/icons/search.svg"></object>
              <span class="item-name">검색</span>
            </div>
          </li>
          <li class="nav-add">
            <div>
              <object data="/assets/image/icons/add.svg"></object>
              <span class="item-name">만들기</span>
            </div>
          </li>
        </ul>
        <div class="dropup">
          <div class="nav-other dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <object data="/assets/image/icons/other.svg"></object>
            <span class="item-name">더 보기</span>
          </div>
          <div class="other-menu dropdown-menu">  
            <div class="d-flex flex-column p-10">
              <a class="other-settings othermenu-item">
                <div class="d-flex p-16">
                  <object data="/assets/image/icons/settings.svg"></object>
                  <span class="item-name">설정</span>
                </div>
              </a>
              <a class="other-activities othermenu-item">
                <div class="d-flex p-16">
                  <object data="/assets/image/icons/activities.svg"></object>
                  <span class="item-name">내 활동</span>
                </div>
              </a>
              <a class="other-logout othermenu-item">
                <div class="d-flex p-16">
                  <span class="item-name">로그아웃</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
    this.navHome = this.querySelector('.nav-home');
    this.navSearch = this.querySelector('.nav-search');
    this.navAdd = this.querySelector('.nav-add');
    this.otherSettings = this.querySelector('.other-settings');
    this.otherActivities = this.querySelector('.other-activities');

    // 1. 홈 버튼: 클릭 시 fetch 후 (`root` 모든 것을 재 렌더링), window의 스크롤을 최상단으로 이동
    this.navHome.addEventListener('click', this.homeEvent);

    // 2. 검색 버튼: 클릭 시 검색하는 창 띄우기 sidebar 옆으로
    this.navSearch.addEventListener('click', this.searchEvent);

    // 3. 만들기 버튼: 클릭 시 `사진과 동영상을 끌어다 놓으세요` 컴포넌트 작성
    this.navAdd.addEventListener('click', this.addEvent);

    /**
     * TODO: faze 2
     * 4. 더 보기 버튼
     *  - 설정 버튼: 클릭 시 설정 페이지로 이동
     *  - 내 활동 버튼: 클릭 시 내 활동 페이지로 이동
     *  - 로그아웃: 클릭시 로그아웃
     */
    this.otherSettings.addEventListener('click', () => {});
    this.otherActivities.addEventListener('click', () => {});
  }

  // root 재 렌더링
  homeEvent() {
    const root = document.querySelector('#root');
    root.innerHTML = new Main().getHtml();
  }

  // 만들기 버튼 클릭 시, PostModal 띄우기
  addEvent() {
    exchangeModal(new PostModal());
  }

  // 검색 버튼 클릭 시, SearchModal 띄우기
  searchEvent() {
    exchangeModal(new SearchModal());
  }
}

window.customElements.define('nav-component', Nav, { extends: 'div' });
