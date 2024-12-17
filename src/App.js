import logo from './logo.svg';
import './App.css';
import Login from './component/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ragistration from './component/Ragistration/Ragistration';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App ">
     <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/ragister' element={<Ragistration />} />
        <Route path='/homepage' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
