import React, { useState, useEffect } from 'react'
import './Medicine.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';



function Medicine() {
  const location = useLocation();
  const [userdetails, setuserdetails] = useState([]);
  const { username, userid } = location.state || {}
  const [id , setid] = useState()
  
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted : ",userdetails);
    console.log("data from homepage id = ", userid); // not working
    const payload = {
      ...userdetails, 
      id, 
      userid,       
    };

    sendData(payload); // Pass the data object to sendData
    // navigate("/private/homepage");
  };

  const sendData = async (data) => {
    console.log("Data being sent: ", data);

    // axios.post("http://localhost:1000/medicine",userid, data, (response) => {
    //   if (response) {
    //     toast.success("Remainder Booked")
    //   }
    //   toast.error("some issue ")
    // })
  }

  function handleduration(value) {
    setuserdetails({
      ...userdetails,
      duration: value,
    })
  }

  useEffect(() => {
    console.log("userid changed ");
    console.log("id from home = ", userid); //working
    setid(userid)
  }, [userid])

  const navigate = useNavigate();

  return (
    <div className=''>
      <div class="container border d-flex justify-content-center align-item-center mt-5  " >
        <form className=' border border-danger w-50 maindiv p-2' onSubmit={handlesubmit} >
          <h5>Add Medicine</h5>
          <div className="m-3 " >
            <input type="text" class="form-control" id="medicine" placeholder='Medicine Name'
              ia-describedby="emailHelp"
              onChange={(e) => {
                setuserdetails({
                  ...userdetails,
                  medicine: e.target.value,
                })
              }}
            />
            <input type="text" class="form-control my-2" id="unit" placeholder='unit ex. 500 mg,650 mg'
              ia-describedby="emailHelp"
              onChange={(e) => {
                setuserdetails({
                  ...userdetails,
                  unit: e.target.value,
                })
              }}
            />
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Duration of Dose
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#"
                  onClick={(e) => {
                    handleduration("Once Daily")
                  }}
                >Once Daily - once per day</a></li>
                <li><a class="dropdown-item" href="#"
                  onClick={(e) => {
                    handleduration("Twice Daily")
                  }}
                >Twice Daily - two time a Day</a></li>
                <li><a class="dropdown-item" href="#"
                  onClick={(e) => {
                    handleduration("Three Times Daily")
                  }}
                >Three Times Daily - three times a day</a></li>
              </ul>
            </div>
            <div className="date  mt-3 text-start d-flex flex-column">
              <label className='text-start'>Time</label>
              <input type="time" class="form-control  my-2" id="time" ia-describedby="emailHelp"
                onChange={(e) => {
                  setuserdetails({
                    ...userdetails,
                    time: e.target.value.toString(),
                  })
                }}
              />
            </div>
          </div>
          <button type="submit" class="btn btn-custome"
        
          
          >Submit</button>
          <button type="button" class="btn btn-custome mx-2"
            onClick={(e) => {
              e.preventDefault();
              navigate("/private/homepage")
            }}

          >cancel</button>
        </form>
      </div>
    </div>
  )
}

export default Medicine
