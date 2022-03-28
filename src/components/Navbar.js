import React, { Component, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faBaby , faCheckCircle, faFileAlt , faPlusSquare, faUserMd, faCalendar, faCalendarAlt, faAd, faUserCog, faChevronDown, faCaretDown, faUserAlt, faMapMarker, faCog, faSignOutAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Link  } from "react-router-dom";
import classnames from "classnames";
import $ from 'jquery';
import '../components/Navbar.css';
import { NavLink } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import "../components/Navbar.css";

export default class Navbar extends Component {
  constructor (props) {
    super(props);

    this.state={
      prevScrollpos:window.pageYOffset,
      VISIBLE: true
    };
  }
   
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render(){
    return (

<div>




<nav className={classnames("navbar-second navbar-expand-lg navbar-light fixed-top w-100", {"navbar--hidden": !this.state.visible})}>
  <div className="container-fluid">
  <nav className="navbar-one flex">
  <div className="left flex">
    <div className="email">
      <i className="fa fa-envelope"></i>
      <span>lorem123@gmail.com</span>
    </div>
    <div className="call">
      <i className="fa fa-phone-alt"></i>
      <span>+94 713274509</span>
    </div>
  </div>

  <div className="right flex">

    <div className="cart">
      <i className="fas fa-cart-plus"></i>
      <Link to="/cart" className="navone-icon">
      <span className="nav-des">Cart</span></Link>
      <span>|</span>
    </div>

    <div className="faq">
      <i className="far fa-question-circle"></i>
      <Link to="/FAQ" className="navone-icon">
      <span className="nav-des">FAQ</span></Link>
      <span>|</span>
    </div>

    <div className="tools">
      <i className="fas fa-tools"></i> 
      <Link to="/tools" className="navone-icon">
      <span className="nav-des">Tools</span></Link>
      <span>|</span>
    </div>
    
    <div className="user">
      <i className="far fa-user"></i>
      <Link to="/admin-signup" className="navone-icon">
      <span className="nav-des">Login</span></Link>
    </div>
  </div>
</nav>
    
    <img src='images/logo1.jpg' alt="logo" width="50" height="50" className="main-logo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <Nav variant="pills" defaultActiveKey="/home">
      &nbsp;  &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
      <li className="nav-item"><Nav.Item>
      <Nav.Link href="/home" className="nav-link">
            <FontAwesomeIcon icon = {faHome}/> &nbsp;  
              Home
              </Nav.Link>  </Nav.Item>
        </li> &nbsp;   &nbsp;   &nbsp; 
      
         
        <Nav.Item>
        <li className="nav-item dropdown">
        <Nav.Link eventKey="link-1" href="/cute'sdevelopment" className="nav-link dropdown-toggle nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon = {faBaby}/> &nbsp;
            Cute's Development
            </Nav.Link>
         
          <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-black" href="/pregnancybyweek">Pregnancy by week</a></li>
            <li><a className="dropdown-item text-black" href="/inthewomb">In the womb</a></li>
            <li><hr className="dropdown-divider text-black"/></li>
            <li><a className="dropdown-item text-black" href="/kickcounter">Kick Counter</a></li>
            <li><a className="dropdown-item text-black" href="/contractiontimer">Contraction Timer</a></li>
            <li><a className="dropdown-item text-black" href="/growthtracker">Growth Tracker</a></li>
          </ul>
        </li>   </Nav.Item> &nbsp;   &nbsp;   &nbsp;  

        <Nav.Item>
        <li className="nav-item dropdown">
        <Nav.Link eventKey="link-2" href="/planning" className="nav-link dropdown-toggle nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon = {faCheckCircle}/>&nbsp;  
            Planning
        </Nav.Link>
          <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-black" href="/hospitalbagchecklist">Hospital bag checklist</a></li>
            <li><a className="dropdown-item text-black" href="/mybabyname">My baby name</a></li>
          </ul>
        </li></Nav.Item>  &nbsp;&nbsp;&nbsp;

        <Nav.Item>
        <li className="nav-item dropdown">
        <Nav.Link eventKey="link-4" href="/education&support" className="nav-link dropdown-toggle nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon = {faFileAlt}/>&nbsp; 
            Education & Support
        </Nav.Link>

          <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-black" href="/dailyselfcarechecklist">Daily self-care checklist</a></li>
            <li><a className="dropdown-item text-black" href="/articles&videos">Articles & Videos</a></li>
            <li><a className="dropdown-item text-black" href="/insights">Insights</a></li>
          </ul>
        </li></Nav.Item> &nbsp;&nbsp;&nbsp; 

        <Nav.Item>
        <li className="nav-item dropdown">
        <Nav.Link eventKey="link-5" href="/product&safety" className="nav-link dropdown-toggle nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FontAwesomeIcon icon = {faAd}/>&nbsp;
            Product & Safety
          </Nav.Link>

          <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-black" href="/category">Baby products</a></li>
            <li><a className="dropdown-item text-black" href="/doctorchanneling">Doctor channeling</a></li>
          </ul>
        </li> </Nav.Item> &nbsp;&nbsp;&nbsp; 

        
        <li className="nav-item"><Nav.Item>
        <Nav.Link eventKey="link-6" href="/calendar" className="nav-link">
          <FontAwesomeIcon icon = {faCalendarAlt}/>&nbsp;
              Calendar
        </Nav.Link>  </Nav.Item>
        </li> &nbsp;&nbsp;&nbsp; 

        <li className="nav-item"><Nav.Item>
        <Nav.Link eventKey="link-6" href="/health&medical" className="nav-link">
          <FontAwesomeIcon icon = {faUserMd}/>&nbsp;
              Health & Medical
              </Nav.Link>  </Nav.Item>
        </li> &nbsp;&nbsp;&nbsp; 

        {/* <Link to="/signup" class="btn btn-success">Sign Up</Link> */}
        </Nav>
      </ul>
     
      <div className="search">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>

      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
        <Link to="/" className="profilenav dropdown-toggle profilenav active" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img src='images/profile.png' alt="logo" width="40" height="40" className="pro-img"/>&nbsp;
            Mahesha
          </Link>
          <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item text-black" href="/myaccount">
            <FontAwesomeIcon icon = {faUserAlt}/>&nbsp;
              My account</a></li>
            <li><a className="dropdown-item text-black" href="/settings">
            <FontAwesomeIcon icon = {faCog}/>&nbsp;
              Settings</a></li>
              <li><a className="dropdown-item text-black" href="/logout">
            <FontAwesomeIcon icon = {faSignOutAlt}/>&nbsp;
              Logout</a></li>
          </ul>
        </li>
       </ul>
    </div>

  </div>
</nav>
</div>
    );
}
}


// export default Navbar;