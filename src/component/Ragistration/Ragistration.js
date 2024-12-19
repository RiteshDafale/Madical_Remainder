import React, { useEffect, useState } from 'react'
import './Ragistration.css';
import '../Login/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

export default function Ragistration() {
    const [userdata, setuserdata] = useState({});
    const [password, setpassword] = useState("");
    const [errormsg, seterrormsg] = useState("");
    const navigate = useNavigate();

    const sentData = (data)=>{
       axios.post("http://localhost:1000/ragister",data).then
       ((Response)=>{     
        toast.success(`🎉 Hi ${userdata.firstname}, you’re all set! Welcome aboard!`, {
            position: "top-center",
            autoClose:2500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            theme: "colored",
            className: "toast-message",
           
        });
        navigate("/Madical_Remainder")     
       })
       .catch((error)=>{
        toast.error("Some issue")
        console.log("Some issue with error = ",error);        
       })        
    }
    function handledata(e) {
        e.preventDefault();
        sentData(userdata)
        console.log(userdata);
    }
    function handleCheckbox(e) {
        // e.preventDefault()
        setuserdata({
            ...userdata,
            role: e.target.value
        })
        console.log("selected value = ",e.target.value);       
    }

      useEffect(() => {
       document.title="Ragistration  Section "
      }, [])
    return (
        <div className='main startdiv '>

            <div className="container  d-flex flex-column justify-content-center align-items-center w-100 ">
                <h4>Register Yourself</h4>
                <form className='bg-customcolor mt-2 p-4' onSubmit={handledata}>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control w-100" placeholder="First name" aria-label="First name" id="firstname"
                                onChange={(e) => {
                                    setuserdata({
                                        ...userdata,
                                        firstname: e.target.value
                                    })
                                }}
                            />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control w-100 " placeholder="Last name" aria-label="Last name" id="lastname"
                                onChange={(e) => {
                                    setuserdata({
                                        ...userdata,
                                        lastname: e.target.value
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control " id="email" placeholder="Email address"
                            onChange={(e) => {
                                setuserdata({
                                    ...userdata,
                                    email: e.target.value
                                })
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control  minLength={10}  " id="contact" placeholder="Enter Contact no."
                            onChange={(e) => {
                                setuserdata({
                                    ...userdata,
                                    contact: e.target.value
                                })
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control " id="password" placeholder="Enter Password"
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control " id="password" placeholder="Enter Password again"
                            onBlur={(e) => {
                                console.log("onBlur triggered");
                                if (password === e.target.value) {
                                    seterrormsg("")
                                    setuserdata({
                                        ...userdata,
                                        password: e.target.value,
                                    });
                                } else {
                                    seterrormsg("Password did not match! Enter password again")
                                }
                            }}
                        />
                        <div className='text-danger fs-6  ' id='errormsg'>{errormsg}</div>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Patient"
                          onChange={(e) => {
                            handleCheckbox(e)
                        }}   
                        />
                        <label className="form-check-label text-white" for="inlineRadio1"

                        >Patient</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Admin"
                         onChange={(e) => {
                            handleCheckbox(e)
                        }}                     
                        />
                <label className="form-check-label text-white" for="inlineRadio2" >Admin</label>
                    </div>
                    <div className="mb-4 mt-3">
                        <button className='btn btn-primary' type="submit">Submit</button>
                        <p className='mt-2 text-white'>Already Ragister  <a type='button' className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                            onClick={(e) => {
                                console.log("button clicked");
                                navigate("/Madical_Remainder")
                            }}
                        >Login here</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
