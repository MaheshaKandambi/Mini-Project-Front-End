import React from 'react';
import './Contact.css';

function Contact() {
    return(
      <section className='contactUs'>
        <div class="contact">
        <div class="contactInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className='info'>
              <li>
                <span><img src='images/Contact/location.png'/></span>
                <span>No. 12, <br/>xyz, Company <br/> ZYoiry Street, <br/>Sri Lanka.</span>
              </li>
              <li>
                <span><img src='images/Contact/mail.png'/></span>
                <span>lorem123@gmail.com</span>
              </li>
              <li>
                <span><img src='images/Contact/call.png'/></span>
                <span>+94 713274509</span>
              </li>
            </ul>
          </div>
          </div>
       
          <div class="contactForm">
            <h2>Send a message</h2>
            <div className='formBox'>
              <div className='inputBox w50'>
                <input type="text" name="" required/>
                  <span>First Name</span>
              </div>
                   
        
              <div className='inputBox w50'>
                <input type="text" required/>
                  <span>Last Name</span>
              </div>
            
              <div className='inputBox w50'>
                <input type="email" required/>
                  <span>Email Address</span>
              </div>
           
              <div className='inputBox w50'>
                <input type="text" required/>
                  <span>Mobile Number</span>
              </div>

            <div className='inputBox w100'>
              <textarea required></textarea>
              <span>Write Your message here... </span>
            </div>

            <div className='inputBox w100'>
            <input type="submit" value="Send"/>
            </div>
        </div>
        </div>
       </div>
 
      </section>
    );
}

export default Contact;