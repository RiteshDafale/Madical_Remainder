import React,{useEffect} from 'react'
import './Ragistration.css';
import '../Login/Login.css';
import { useNavigate } from 'react-router-dom';


export default function Ragistration() {    
    const navigate = useNavigate();
    return (
        <div className='main startdiv '>
            <div className="container  d-flex flex-column justify-content-center align-items-center w-100 ">
                <h4>Ragister Yourself</h4>
                <form className='bg-secondary mt-2 p-4'>
                    <div class="row mb-3">
                        <div class="col">
                            <input type="text" class="form-control w-100" placeholder="First name" aria-label="First name"/>
                        </div>
                        <div class="col">
                            <input type="text" class="form-control w-100 " placeholder="Last name" aria-label="Last name"/>
                        </div>
                    </div>
                    <div class="mb-3">
                        {/* <label for="exampleFormControlInput1" class="form-label"></label> */}
                        <input type="text" class="form-control " id="email" placeholder="Email address" />
                    </div>
                    <div class="mb-3">
                        {/* <label for="exampleFormControlInput1" class="form-label"></label> */}
                        <input type="text" class="form-control " id="contact" placeholder="Enter Contact no." />
                    </div>
                    <div class="mb-3">
                        {/* <label for="exampleFormControlInput1" class="form-label"></label> */}
                        <input type="text" class="form-control " id="password" placeholder="Enter Password" />
                    </div>
                    <div class="mb-3">
                        {/* <label for="exampleFormControlInput1" class="form-label"></label> */}
                        <input type="text" class="form-control " id="confPass" placeholder="Enter Password again" />
                    </div>
                    {/* <div class="form-check form-check-inline">
                        <input class="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label class="form-check-label" for="inlineRadio1">Patient</label>
                    </div> */}
                    {/* <div class="form-check form-check-inline">
                        <input class="form-check-input " type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label class="form-check-label" for="inlineRadio2">Admin</label>
                    </div> */}
                    <div className="mb-4">
                        <button className='btn btn-primary'>Submit</button>
                        <p className='mt-2'>Already Ragister  <a  type='button' class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-white"
                onClick={(e)=>{
                  console.log("button clicked");
                  navigate("/")                  
                }}                
                >Login here</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}
