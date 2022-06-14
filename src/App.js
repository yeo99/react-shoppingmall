import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import Error404Page from './pages/Error404Page';

function App() {

  let navigate = useNavigate(); // 페이지 이동을 도와주는 함수(Hook)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <MainPage/>} />
        <Route path="/detail" element={ <DetailPage/> }></Route>

        {/* Nested Routes 
            - 장점1. 좀 더 단순하게 작성 가능
            - 장점2. nested route 접속시엔 element가 중첩되어서 보임
            - 언제쓰나? 여러 유사한 페이지 필요할 때(글자 하나만 살짝살짝,,,)
        */}
        <Route path="/about" element={ <About/> }>
          <Route path="member" element={ <div>Member page</div> }></Route>
          <Route path="location" element={ <div>location page</div> }></Route>
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
