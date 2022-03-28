import React, {useState, useEffect, Profiler} from "react";
import './Profile.css';
import Navbar from "../Navbar";
import Footer from "../Footer";

const Profile = () => {

    


return(
    <>
  <Navbar/><br/><br/>

  <div class="profilePage container bootstrap snippets bootdey">
  <h3 className="main-head center">Edit Profile</h3>
	<div class="row">
      {/* <!-- left column --> */}
      <div class="profilephoto col-md-3">
        <div class="text-center">
          <img src="images/profile.png" alt="avatar"/>
          <h6>Upload a different photo...</h6>
          
          <input type="file" class="form-control" />
        </div>
      </div>
      
      {/* <!-- edit form column --> */}
      <div class="col-md-9 personal-info">
        {/* <div class="alert alert-info alert-dismissable">
          <a class="panel-close close" data-dismiss="alert">×</a> 
          <i class="fa fa-coffee"></i>
          This is an <strong>.alert</strong>. Use this to show important messages to the user.
        </div> */}
        <h3>Personal info</h3><br/>
        
        <form class="form-horizontal" role="form">
          <div class="form-group">
            <label class="col-lg-3 control-label">First name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value=""/>
            </div>
          </div><br/>
          <div class="form-group">
            <label class="col-lg-3 control-label">Last name:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value=""/>
            </div>
          </div><br/>
          <div class="form-group">
            <label class="col-lg-3 control-label">Company:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" value=""/>
            </div>
          </div><br/>
          <div class="form-group">
            <label class="col-lg-3 control-label">Email:</label>
            <div class="col-lg-8">
              <input class="form-control" type="text" placeholder="user@example.com" />
            </div>
          </div><br/>
          <div class="form-group">
          <div class="mb-2"><b>Change Password</b></div><br/>
            <label class="col-lg-3 control-label">New Password:</label>
            <div class="col-lg-8">
            <input class="form-control" type="password" placeholder="••••••"/>
            </div>
          </div><br/>
          <div class="form-group">
            <label class="col-lg-3 control-label">Confirm Password:</label>
            <div class="col-lg-8">
            <input class="form-control" type="password" placeholder="••••••"/>
            </div>
          </div>

          <div class="row">
            <div class="profilepage-btn col d-flex justify-content-start">
            <button class="btn btn-primary" type="submit">Save Changes</button>
            </div>
          </div>    
        </form>
      </div>
  </div>
</div>
<Footer />


  </>

);
}


export default Profile;

