import React from "react";
import { Link } from 'react-router-dom';

function Locations({ locations }) {
    return (
        <div className="">
            <div className="grid-item">
                <img src={locations.limageurls[0]} alt='img.jpg'  />
                <div className="overlay">
                    <p>Reviews : {locations.lreviews}</p>
                    <p className="text">Phone Number : {locations.lphonenumber}</p>
                    <p className="text">Located In : {locations.llocated}</p>
                    <Link to={`/rooms/${locations.lname}`}>
                        <div className="loc-btn">
                            <button className="view">Book Now</button>
                        </div>
                    </Link>
                </div>
                
            </div>
            <h2 class = "imgcap">{locations.lname}</h2>
        </div>
    )
}
export default Locations;