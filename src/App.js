import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import Error404Page from './pages/Error404Page';
import EventPage from './pages/EventPage';
import Cart from './pages/Cart';

function App() {

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

        <Route path="/cart" element={<Cart></Cart>}></Route>

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