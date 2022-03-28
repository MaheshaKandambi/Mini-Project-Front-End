import React from "react";
import "../welcome/Welcome.css";
import { Link  } from "react-router-dom";
import Count from "../welcome/Count";

function Welcome() {
    return (
        <div>
        
 <section className="section">
     <div className="container">
         <div className="row">
             <div className="col-md-12 text-center">
             <img src='images/logo1.jpg' alt="logo" width="150" height="100"/>
                 <h3 className="main-heading">Welcome to Our Website</h3>
                 <h5 className="sub">Supporting Your Pregnancy Journey</h5>
                 <p className="para">From conception through birth and all the 
                 wonderful in-betweens, <br/>our nurses and pregnancy educators are 
                 here to provide the resources and information <br/>you need for the 
                 healthiest possible <br/>pregnancy.</p>
                 <div className="underline mx-auto">   
                 </div>

                 <Count/>
            


                 <h3 className="main-head">How can we help?</h3>
                 <div class="row">
                 <div class="flip-box column">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                 <Link to="/babynamefinder" className="how-can">
                  <img src='images/Tools/baby-name-finder.png' alt="logo" width="200" height="200"/>
                 </Link>
                 </div>

                 <div class="flip-box-back column">
                 <Link to="/babynamefinder" className="how-can">
                  <img src='images/Tools/baby-name-finder.png' alt="logo" width="200" height="200"/>
                 </Link>
                 </div>
                 </div>
                 <Link to="/babynamefinder" className="tool-des"><p className="tool-des">Baby Name Finder</p></Link>
                 </div>
              
                
                 <div class="flip-box column">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                 <Link to="/ovulationcalculator" className="how-can">
                  <img src='images/Tools/ovulation-calcutor.png' alt="logo" width="200" height="200"/>
                 </Link>
                 </div>

                 <div class="flip-box-back column">
                 <Link to="/ovulationcalculator" className="how-can">
                  <img src='images/Tools/ovulation-calcutor.png' alt="logo" width="200" height="200"/>
                 </Link>
                 </div>
                 </div>
                 <Link to="/ovulationcalculator" className="tool-des"><p className="tool-des">Ovulation Calculator</p></Link>
                 </div>
                 

                 <div class="flip-box column">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                 <Link to="/growthtracker" className="how-can">
                  <img src='images/Tools/Height-and-weight-chart.png' alt="logo" width="200" height="200"/>
                 </Link>
                 </div>

                 <div class="flip-box-back column">
                 <Link to="/growthtracker" className="how-can">
                  <img src='images/Tools/Height-and-weight-chart.png' alt="logo" width="200" height="200"/>
                 </Link>
                 </div>
                 </div>
                 <Link to="/growthtracker" className="tool-des"><p className="tool-des">Growth Tracker</p></Link>
                 </div>
                 
                 <div class="flip-box column">
                <div class="flip-box-inner">
                    <div class="flip-box-front">
                        
                 <Link to="/duedatecalculator"className="how-can">
                  <img src='images/Tools/duedate.png' alt="logo" width="200" height="200"/>
                 </Link>
                 </div>

                 <div class="flip-box-back column">
                 <Link to="/duedatecalculator" className="how-can">
                  <img src='images/Tools/duedate.png' alt="logo" width="200" height="200"/>
                 </Link>
                 </div>
                 </div>
                 <Link to="/duedatecalculator" className="tool-des"><p className="tool-des">Due Date Calculator</p></Link>
                 </div>
             
             </div>
         </div>
     </div>
     </div>
     
 </section>
 </div>
    );
}

export default Welcome;
