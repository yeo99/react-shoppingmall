import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <MainPage></MainPage>} />
        {/* <Route path="/detail" element={}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
