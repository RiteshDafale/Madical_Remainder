import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AdminPage.css';

function Admin() {
  const [patientdata, setpatientdata] = useState([])
  const fetchData = () => {
    console.log("getfetch function called successfully");
    axios.get("http://localhost:1000/Patientdetails").then((result) => {
      console.log("Patient data from server");
      setpatientdata(result.data);
      console.log(result.data);
    })
      .catch((error) => {
        console.log("there is some issue : ", error);
      })
  }

  const deletItem = ()=>{
    axios.delete("localhost:1000/deleteItem",)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      <div className='container-fluid '>
        <h4 className='my-2'>Patient Details </h4>
        <div className="container-fluid ">
          <table class="table">
            <thead>
              <tr className=''>
                <th scope="col bg-primary">id</th>
                <th scope="col th">firstname</th>
                <th scope="col th">lastname</th>
                <th scope="col th">email</th>
                <th scope="col th">contact</th>
                <th scope="col th">role</th>
                <th scope="col th">Button</th>
              </tr>
            </thead>
            <tbody>
              {
                patientdata.map((item, index) => (
                  <tr key={index}>
                    <td scope="col">{item.id}</td>
                    <td scope="col">{item.firstname}</td>
                    <td scope="col">{item.lastname}</td>
                    <td scope="col">{item.email}</td>
                    <td scope="col">{item.contact}</td>
                    <td scope="col">{item.role}</td>
                   
                    <td scope="col" className='btnrow'>
                      <button className='btn btn-edit mx-2 '>Edit</button>
                      <button className='btn btn-delete'
                      onClick={(e)=>{
                          console.log("id = ",item.id)                           
                          console.log("firstname = ",item.firstname)                             
                      }}                   
                      >delete</button>
                    </td>
              
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admin

