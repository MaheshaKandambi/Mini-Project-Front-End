import React, { Component } from "react";
import Navbar from "../Navbar";
import '../Inthewomb/Pregnancybyweek.css';
import Slick1 from '../Inthewomb/Slick1';
import Footer from '../Footer';



function Pregnancybyweek() {
    return (
        <>
<Navbar/>

<div id="carouselExampleCaptions" className="my-carousel carousel slide" data-bs-ride="carousel"> 
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src='images/Pregnancybyweek/weekbyweek-banner.png' className="d-block w-100" height="100%" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              {/* <h5>Pregnancy Week By Week</h5> */}
              {/* <p>Get Updates on baby's development, decode your pregnancy Symptoms and see your weekly to-dos.</p>
              <div className="slider-btn">
                  <button className="btn btn-1">Read More</button>
              </div> */}
            </div>
          </div>  
        </div>
      </div>

      <Slick1/>
      <Footer />
</>
    );
}

export default Pregnancybyweek;