import React from 'react'

function Home() {
    return (
        <div>
            <div className="container  mt-5">
                <div className="row ">
                    <div className="col-lg-6 col-sm-6">
                        <button className='btn btn-primary'>Add New Patient</button>
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <button className='btn btn-primary'>Username</button>
                        <button className='btn btn-primary mx-2'>Patient Details</button>
                    </div>
                </div>
                <div className="container border mt-5">
                    <div class="card w-50" >
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home