import React from "react";
import { Link } from "react-router-dom";
import Cards from "../components/Cards";

function LandingPage() {
  return (
    <>
      <div className="land-page-img">
        <div className="land-hover">
          <Cards />
          <h3>Book Your Dream Vacation & Plan your perfect trip with us.</h3>
          <Link to="/home">
            <button>Get Started</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default LandingPage;
