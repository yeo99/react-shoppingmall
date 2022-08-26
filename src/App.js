import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
// const errorPage = lazy(() => import ('./pages/Error404Page');
import EventPage from './pages/EventPage';
import CartPage from './pages/CartPage';
import { useQuery } from 'react-query';
import axios from 'axios';

// lazy를 import해와서 초기 로딩시에 필요없는 404페이지가 lazy loading되도록 변경(예시)
const Error404Page = lazy(() => import('./pages/Error404Page'));

function App() {
  // Set 자료형을 이용하여 값이 중복하여 들어가지 않도록
  const watchedArr = new Set();
  useEffect(() => {

  })

  // react-query를 이용하여 ajax 요청
  let result = useQuery('이름', () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then((a) => {
      console.log('요청됨');
      return a.data
    })//,
    // refetch되는 간격 지정 가능. 아래의 경우 새로운 데이터를 가져오고 2초 안에는 다시 새로운 데이터를 가져오지 않음
    // { staleTime : 2000}
  })

  // Ajax 통신의 결과
  // result.data;

  // Ajax 요청이 로딩중 일 때 true값을 가짐
  // result.isLoading
  
  // Ajax 요청이 실패했을 때 true
  // result.error

  /**
   * ex)
   * {result.isLoading && '로딩중'}
   * {result.error && '에러남'}
   * {result.data && result.data.name}
   */

  /**
   * ajax 성공 결과를 캐싱할 수 있음.
   * ex) 12시 10분에 userdata.json GET요청
   * ex) 12시 13분에 userdata.json GET요청
   * => react-query가 12시 10분 결과를 우선 보여줌, 그 다음에 GET 요청함
   */

  /**
   * 실시간 데이터가 중요한 서비스가 아니라면 그닥..
   * redux-toolkit 설치하면 RTK Query도 자동 설치됨.
   */

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <MainPage/>} />
        <Route path="/detail/:id" element={ <DetailPage/>}></Route>
        {/* ContextAPI
            0. createContext()를 변수에 담아서 export
            1. state 전달을 원하는 컴포넌트를 감싸고
            2. state를 value로 넘겨줌
            3. 전달한 컴포넌트에서 import
        */}

        {/* Nested Routes 
            - 장점1. 좀 더 단순하게 작성 가능
            - 장점2. nested route 접속시엔 element가 중첩되어서 보임
            - 언제쓰나? 여러 유사한 페이지 필요할 때(글자 하나만 살짝살짝,,,)
        */}

        <Route path="/cart" element={<CartPage></CartPage>}></Route>

        <Route path="/about" element={ <About/> }>
          <Route path="member" element={ <div>Member page</div> }></Route>
          <Route path="location" element={ <div>location page</div> }></Route>
        </Route>

        <Route path="/event" element={ <EventPage/> }>
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
          <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
        </Route>

        {/* 지정된 Route path외의 모든 페이지 */}
        <Route path="*" element={
          // 페이지를 lazy loading할 때, 사용자가 빈 화면을 보게 될 가능성이 있는데
          // Suspense 컴포넌트를 감싸주면 로딩 중에 UI를 보여줄 수 있다.
          // 빈 화면 대신 띄워줄 화면을 작성
          // <Routes> 전체를 <Suspense></Suspense>로 감싸서 활용할수도 있다.
          <Suspense fallback={<div>로딩중임</div>}>
            <Error404Page></Error404Page>
          </Suspense>
          }>
        </Route>
      </Routes>
    </div>
  );
}

// Nested Routes
function About() {
 return (
  <div>
    <h4>회사 정보</h4>
    {/* 하위 주소들이 어디에 렌더링될지 결정 */}
    <Outlet></Outlet>
  </div>
 ); 
}

export default App;


/**
 * Local Storage
 * 1. key : value 형태로 저장 가능
 * 2. 문자 데이터만 저장 가능(숫자를 넣어도 문자로 전환됨)
 * 3. 최대 5MB까지 저장 가능
 * 4. 사이트 재접속해도 남아있음(브라우저 청소하면 삭제됨)
 * 
 * 
 *
 * Local Storage vs Session Storage
 * 로컬 스토리지의 경우 재접속해도 남아있음
 * 세션 스토리지는 브라우저 끄면 날라감
 * 
 * 로컬 스토리지 저장
 * localStorage.setItem('key', 'value')
 * 
 * 로컬 스토리지 출력
 * localStorage.getItem('age')  // '20'
 * 
 * 로컬 스토리지 삭제
 * localStorage.removeItem('age')
 * 
 * 로컬 스토리지 수정 문법은 없다. 꺼내서 수정하고 다시 넣어야함
 * 
 * 위 메서드는 세션 스토리지도 같다.
 * sessionStorage.getItem('age')
 * 
 * array, object는 원칙적으로 저장이 불가능(only 문자)하나, JSON으로 변환하면 가능
 * let obj = {name : 'kim'}
 * localStorage.setItem('data', obj)
 * - object 자료를 문자로 강제로 변환해서 깨짐 (예제는 [object Object])
 * 
 * JSON.stringify(obj)
 * - Array, Object => JSON으로 바꿔줌(따옴표를 넣어줌)
 * 
 * JSON.parse()
 * - JSON => Object, Array로 바꿔줌
 * let jsonParseLet = localStorage.getItem('data')
 * console.log(JSON.parse(jsonParseLet).name);  // kim
 * 
 * 숙제 : 상세페이지에서 봤던 상품의 번호들을 localStorage에 저장하기
 * - Key는 watched, Value는 Array(JSON stringify)
 * - 주의 1) 중복번호는 막기 => set자료형을 쓰면 중복 막기가 편하다한다
 * - 미리 Array가 있어야하니까..
 * */ 

/**
 * React-query
 * 
 * 1. ajax 성공/실패시 html 보여주려면?
 * 2. 몇초마다 자동으로 ajax 요청?
 * 3. 실패시 몇초 후 요청 재시도?
 * 4. prefetch?
 * 
 * - React-Query가 유용한 분야는 코인거래소, 실시간SNS와 같은 실시간 데이터를 계속 가져와야하는 사이트들이 쓰면 유용함.
 */

/**
 * React Developer Tools 확장프로그램을 이용
 * - 컴포넌트 구조와 props값이 어떻게 구성되어있는지 알 수 있다.
 * - Profiler를 통해 성능 측정이 가능하다.(ms단위로 걸린 시간 표시)
 * 
 * Redux DevTools를 통해 state의 흐름을 알 수 있다. store를 한눈에 볼 수 있다.
 * 
 * SPA 특징
 * - 배포하면 js파일 하나에 모든 코드가 다 들어간다.
 * - 이걸 다운로드 받느니라 SPA로 제작된 웹들은 로딩속도가 느린편인데 이런 문제를 해결하기위해 Lazy Loading을 적용시킬 수 있다.
 */