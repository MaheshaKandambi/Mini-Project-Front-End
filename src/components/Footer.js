import React from "react";
import './Footer.css';import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fab, faFacebook, faInstagram, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';

library.add(

  faFacebook,
  faTwitter
);

function Footer() {
    return (
     <footer className="footer">
         <div className="container">
             <div className="row">
                 <div className="footer-col">
                 <h4>Cute's Development</h4>
  	 			<ul>
  	 				<li><a href="#">Pregnancy by week</a></li>
  	 				<li><a href="#">In the womb</a></li>
  	 				<li><a href="#">Kick Counter</a></li>
  	 				<li><a href="#">Contraction Timer</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Education & Support</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Articles & Videos</a></li>
  	 				<li><a href="#">Insights</a></li>
  	 				<li><a href="#">Doctor Channeling</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
				   <li><a href="#">Baby Girls's Fashion</a></li>
				   <li><a href="#">Baby Boy's Fashion</a></li>
  	 				<li><a href="#">Diapering</a></li>
					   <li><a href="#">Bath & Skin Care</a></li>
  	 				<li><a href="#">Toys</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
                       {/* <FontAwesomeIcon icon = {faBaby}/> */}
  	 				<a href="#"><FontAwesomeIcon icon = {faFacebook}/></a>
  	 				<a href="#"><FontAwesomeIcon icon = {faTwitter}/></a>
  	 				<a href="#"><FontAwesomeIcon icon = {faInstagram}/></a>
  	 				<a href="#"><FontAwesomeIcon icon = {faLinkedinIn}/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    );

    }
    export default Footer;