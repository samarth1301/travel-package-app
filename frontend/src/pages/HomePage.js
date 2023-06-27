import React from "react";
import Carousel from "./CCarousel";


function HomePage() {
  return (
    <main>
      <header className="header">
        <div className="header-img">
          <Carousel />
        </div>

        <div className="header-content">
          <div className="header-detail">
            <h1 className="content-title">
              Unlock Your Wanderlust <br /> Find and Reserve Your Ideal Tour
            </h1>

            <p className="mx-auto content-description">
              Immerse yourself in captivating destinations and embark on
              extraordinary adventures.
              <br />
              Discover a curated selection of handpicked tours tailored to
              satisfy your wanderlust.
              <br />
              Reserve your dream tour effortlessly and prepare for unforgettable
              memories that will last a lifetime.
              <br />
            </p>
          </div>
        </div>
      </header>
    </main>
  );
}
export default HomePage;
