import React from 'react'
import {Outlet,useNavigate} from 'react-router-dom'

function Private() {
    const navigate = useNavigate();
          const tokan = sessionStorage.getItem("tokan")
          if(tokan){
          return  <Outlet/>
          }
          else{
            return  navigate("/PortfolioRD")
          }
}

export default Private