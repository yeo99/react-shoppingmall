import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import Error404Page from './pages/Error404Page';
import EventPage from './pages/EventPage';
import CartPage from './pages/CartPage';
import { useEffect } from 'react';

function App() {
  // Set 자료형을 이용하여 값이 중복하여 들어가지 않도록
  const watchedArr = new Set();
  console.log(watchedArr)
  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watchedArr))
    console.log(watchedArr)
  }, [])

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
        <Route path="*" element={ <Error404Page></Error404Page> }></Route>
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