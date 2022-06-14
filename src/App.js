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
        {/* 지정된 Route path외의 모든 페이지 */}
        <Route path="*" element={ <Error404Page></Error404Page> }></Route>
      </Routes>
    </div>
  );
}

export default App;
