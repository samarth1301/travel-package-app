
import React from "react";
import img1 from "../img/cardimg-1.jpg";
import img2 from "../img/cardimg-2.jpg";
import img3 from "../img/cardimg-3.jpg";

function Desc() {
  return (
    <div className="land-page-img">
      <div className="land-hover">
        <h1>Welcome to our Travel Booking App</h1>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card border-light text-bg-dark">
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Experience Nature's Wonders</h5>
                <p className="card-text">
                  Witness the awe-inspiring beauty of nature's wonders. From
                  majestic waterfalls to breathtaking national parks, let
                  nature captivate your senses.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card border-light text-bg-dark">
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Explore Exotic Destinations</h5>
                <p className="card-text">
                  Discover breathtaking landscapes, vibrant cultures, and
                  unforgettable adventures around the world. Start your journey
                  today!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card border-light text-bg-dark">
              <img src={img3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Family-Friendly Fun</h5>
                <p className="card-text">
                  Create cherished moments with your loved ones on our
                  family-friendly vacations. From amusement parks to wildlife
                  encounters, we have something for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desc;
