import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Home.css';

function Home() {
    const location = useLocation();
    const navigate = useNavigate();
    const { username, id } = location.state || {}
    const [UserId, setUserid] = useState();
    const [userName, setuserName] = useState(" ");
    const [serverData, setserverData] = useState([]);

    const getData = () => {
        axios.get("http://localhost:1000/medicineDetails").then((response) => {
            console.log("data from server");
            console.log(response.data);
            // console.log(response.data.id);
            setserverData(response.data)
        })
            .catch((error) => {
                console.log("data not fetch from server ", error);

            })
    }

    const removeMadicine = (id) => {
        console.log("function called");
        axios.delete(`http://localhost:1000/deleteMedicine/${id}`).then((response) => {
            console.log(response);
            getData()
        })
            .catch((error) => {
                console.log("error = ", error);
            })
    }
    useEffect(() => {
        document.title = "Madicine Remainder - Homepage"
        getData()
        // setUserid(id);
        console.log("id = ", id);

        console.log("username receive from previous first = ", username);
        sessionStorage.setItem("username", username)
        if (sessionStorage.getItem("username")) {
            setuserName(sessionStorage.getItem("username"))
        }
        else {
            setuserName("no User Found!")
        }
        // setuserName(localStorage.getItem("userName"))
        // console.log("UserId = ",UserId);

    }, [])
    useEffect(() => {
        // console.log("username receive from previous = ", username);
        // console.log("userName useState value = ", userName);
    }, [userName])


    return (
        <div>
            <div className="container-fluid  mt-5">
                <div className="row  ">
                    <div className=" container-fluid col-lg-6 col-sm-6 d-flex firstcol justify-content-center ">
                        <div className="leftbtn  d-flex ">
                            <button className='btn btn-primary' data-bs-toggle="collapse" href="#collapseExample" role="button"
                                onClick={(e) => {
                                    // console.log("id to sent = ",id);
                                    e.preventDefault()
                                    console.log("id = ", id);
                                    navigate("/private/medicine", {
                                        state: {
                                            userid: id,
                                        }
                                    })
                                }}
                            >Add Medicine</button>
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
                        <button className='btn btn-outline-primary'>{userName}</button>
                    </div>
                </div>
                <div className='d-flex bg-secondary detailsdiv flex-wrap mt-5 '>
                    {serverData.length > 0 ? (
                        serverData.map((item, index) => (
                            <div className="card border remainderDetails m-2  " key={index}>
                                <div className="card-body">
                                    <p> Name: {item.medicineName}</p>
                                    <p> Time: {item.Medicine_time}</p>
                                    <p> Unit: {item.Medicine_unit}</p>
                                    <p> Duration: {item.Medicine_duration}</p>
                                    <div className='border d-flex justify-content-evenly'>
                                        <button className='btn btn-primary'>Edit</button>
                                        <button className='btn btn-danger'
                                            onClick={(e) => {
                                                // console.log("btn clicked");
                                                removeMadicine(item.Medicine_id)
                                            }}


                                        >delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className='text-light'>No data available</p>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Home