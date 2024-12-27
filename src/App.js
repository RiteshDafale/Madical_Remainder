import logo from './logo.svg';
import './App.css';
import Login from './component/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ragistration from './component/Ragistration/Ragistration';
import Home from './component/Home/Home';
import Private from './component/Private/Private';
import Admin from './component/AdminPanel/Admin';
import Medicine from './component/Medicine/Medicine';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    // git remote add origin https://github.com/RiteshDafale/Madical_Remainder.git

    <div className="App ">
        <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
     <Routes>
        {/* <Route path='/PortfolioRD' element={<Login />} /> */}
        <Route path='/Madical_Remainder' element={<Login />} />
        <Route path='/ragister' element={<Ragistration />} />
        <Route path= "/admin" element ={<Admin/>}/>  

        <Route path="/private" element={<Private/>}>
        <Route path='/private/homepage' element={<Home/>} />  
        <Route path="medicine" element={<Medicine/>}  />      
        </Route>

      </Routes>
    </div>
  );
}

export default App;
