import React from "react";
import Navbar from "../Navbar";


function Slider() {
    return (
      <>
         <Navbar />
        <div id="carouselExampleCaptions" className="my-carousel carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='images/MainBanner/slider1.jpg' className="d-block w-100" height="100%" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Pregnancy Week By Week</h5>
              <p>Get Updates on baby's development, decode your pregnancy Symptoms and see your weekly to-dos.</p>
              <div className="slider-btn">
                  <button className="btn btn-1">Read More</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src='images/MainBanner/slider2.jpg' className="d-block w-100" height="100%" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Find The Perfect Baby Name</h5>
              <p>Whether you are looking for a baby girl name, or a baby boy name, or both, we help you to explore baby names.</p>
              <div className="slider-btn">
                  <button className="btn btn-1">Read More</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src='images/MainBanner/slider3.jpg' className="d-block w-100" height="100%" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Channel the Doctor</h5>
              <p>We are providing best and affordable health care for your baby.</p>
              <div className="slider-btn">
                  <button className="btn btn-1">Make Appointment</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src='images/MainBanner/slider4.jpg' className="d-block w-100" height="100%" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Explore Our Baby Products</h5>
              <p>Preparing for a Newborn Hospital Bag.</p>
              <div className="slider-btn">
                  <button className="btn btn-1">Shop Now</button>
              </div>
            </div>
          </div>
         
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </>
      
    );
}

export default Slider;