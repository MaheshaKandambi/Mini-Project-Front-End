import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../welcome/Welcome.css";
import { Link  } from "react-router-dom";


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


      return (
       
        // <div className="container">
         <div>
           <h3 className="main-head2">More Resources You'll Love</h3>
          <Slider {...settings}>
                  
          <div>
          
            <Link to="/symptoms"><h className='symp'>Symptoms</h>
            <img src='images/slick/slick1.jpg' alt="logo" width="200" height="200"/>
            </Link>
          </div>

          <div>
          
            <Link to="/baby"><h className='baby'>Baby</h>
            <img src='images/slick/slick2.jpg' alt="logo" width="200" height="200"/>
            </Link>
          </div>

          <div>
         
            <Link to="/body"> <h className='body'>Body</h>
            <img src='images/slick/slick3.jpg' alt="logo" width="200" height="200"/>
            </Link>
          </div>

          <div>
         
            <Link to="/labor&delivery"> <h className='labor'>Labor & Delivery</h>
            <img src='images/slick/slick4.jpg' alt="logo" width="200" height="200"/>
            </Link>
          </div>

          <div>
        
            <Link to="/nutrition">  <h className='nutri'>Nutrition</h>
            <img src='images/slick/slick5.jpg' alt="logo" width="200" height="200"/>
            </Link>
          </div>
          
          <div>
         
            <Link to="/exercise"> <h className='exer'>Exercise</h>
            <img src='images/slick/slick6.jpg' alt="logo" width="200" height="200"/>
            </Link>
          </div>
          </Slider>
          <div class="center">
          <button className="see-more btn btn-outline-success" type="submit">View All</button>
          </div>
          </div>
         
      );
    }
  }

  