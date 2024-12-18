import logo from './logo.svg';
import './App.css';
import Login from './component/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ragistration from './component/Ragistration/Ragistration';
import Home from './component/Home/Home';
import Private from './component/Private/Private';

function App() {
  return (
    // git remote add origin https://github.com/RiteshDafale/Madical_Remainder.git

    <div className="App ">
     <Routes>
        <Route path='/PortfolioRD' element={<Login />} />
        <Route path='/ragister' element={<Ragistration />} />
        
        <Route path="/private" element={<Private/>}>
        <Route path='homepage' element={<Home />} />        
        </Route>

      </Routes>
    </div>
  );
}

export default App;
