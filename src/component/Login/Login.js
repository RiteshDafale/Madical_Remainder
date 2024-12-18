import React, { useEffect, useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";



export default function Home() {

  const [logindata, setlogindata] = useState({});
  const [tokan, settokan] = useState("");

  const handledata = (data) => {
    axios.post("http://localhost:1000/login", data).then((response) => {
      sessionStorage.setItem("tokan",response.data.token)
      navigate("/private/homepage", {
        state: {
          username: response.data.user.firstname
        }
      })
    })
      .catch((error) => {
        console.log("error = ", error);
      })

  }

  const navigate = useNavigate();
  const handleform = (e) => {
    e.preventDefault();
    handledata(logindata);
  }
  return (
    <div className='main'>
      <div className="container  ">
        <div className="row">
          <div className="formcol col-lg-6 col-sm-12 col-md-6 border p-5">
            <div className="container-fluid  h-100 formcontent ">
              <form className='container h-100' onSubmit={handleform}>
                <h5>Login User</h5>
                <div className="m-3 " >
                  <input type="email" class="form-control" id="email" placeholder='Enter Email'
                    ia-describedby="emailHelp"
                    onChange={(e) => {
                      setlogindata({
                        ...logindata,
                        email: e.target.value
                      })
                    }}

                  />
                </div>
                <div className=" m-3 ">
                  <input type="password" class="form-control" placeholder='Enter Password ...' id="password"
                    onChange={(e) => {
                      setlogindata({
                        ...logindata,
                        password: e.target.value,
                      })
                    }}

                  />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
                <p className='mt-2'>New User <a type='button' class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  onClick={(e) => {
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
