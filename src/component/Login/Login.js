import React from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='main'>
      <div className="container  ">
        <div className="row">
        <div className="formcol col-lg-6 col-sm-12 col-md-6 border p-5">
            <div className="container-fluid  h-100 formcontent ">             
              <form className='container h-100'>
                  <h5>Login User</h5>
                <div className="m-3 " >
                  <input type="email" class="form-control" id="email" placeholder='Enter Email'
                  ia-describedby="emailHelp" />
                </div>
                <div className=" m-3 ">
                  <input type="password" class="form-control" placeholder='Enter Password ...' id="password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p className='mt-2'>New User <a  type='button' class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                onClick={(e)=>{
                  console.log("button clicked ");
                  navigate("/ragister")                  
                }}                
                >Ragister here</a></p>
              </form>

            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6 border p-5">
            <div className="content  m-2">
              <h5>Welcome to the Medical Reminder App</h5>
              <p className='text-start mt-2'>Stay on top of your health with our Medical Reminder App. Built using React.js, Node.js, and MySQL, it ensures a smooth, secure, and user-friendly experience. Set medication reminders, track appointments, and manage health records effortlessly. Our app helps you stay organized and never miss a dose. Designed for all age groups, it simplifies health management with ease and reliability.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
