import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Home.css';

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const { username, role } = location.state || {}
    const [serverData, setserverData] = useState([]);

    const getData = () => {
        axios.get("http://localhost:1000/medicineDetails").then((response) => {
            console.log("data from server");
            console.log(response.data);
            setserverData(response.data)
        })
            .catch((error) => {
                console.log("data not fetch from server ", error);

            })
    }

    useEffect(() => {
        document.title = "Madicine Remainder - Homepage"
        // alert("page reloded")
        getData()
    }, [])

    return (
        <div>
            <div className="container-fluid  mt-5">
                <div className="row  ">
                <div className=" container-fluid col-lg-6 col-sm-6 d-flex firstcol justify-content-center">
                        <div className="leftbtn  d-flex ">
                            <button className='btn btn-primary' data-bs-toggle="collapse" href="#collapseExample" role="button"
                                onClick={() => {
                                    navigate("/private/medicine")
                                }}
                            >Add New Patient</button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-6 d-flex secondcol justify-content-center ">
                        <button className='btn btn-primary mx-2'
                            onClick={(e) => {
                                // if (role == "Admin") {
                                    navigate("/admin")
                                // }
                                // else {
                                //     alert("Admins are only allowed to access Patient Data")
                                // }
                            }}

                        >Patient Details (Admin)</button>
                        <button className='btn btn-outline-primary'>{username}</button>
                    </div>
                </div>
                <div className='d-flex detailsdiv flex-wrap mt-5 '>
                    {serverData.length > 0 ? (
                        serverData.map((item, index) => (
                            <div className="card remainderDetails m-2  "  key={index}>
                                <div className="card-body">
                                    <p>Medicine Name: {item.medicineName}</p>
                                    <p>Medicine ID: {item.Medicine_id}</p>
                                    <p>Medicine Unit: {item.Medicine_unit}</p>
                                    <p>Medicine Duration: {item.Medicine_duration}</p>
                                    {item.user_id ? <p>User ID: {item.user_id}</p> : <p>User ID: Not Available</p>}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Home