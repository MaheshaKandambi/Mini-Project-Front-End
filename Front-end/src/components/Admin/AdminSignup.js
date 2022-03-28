import React from "react";
import "../SignUp.css";
import { Link  } from "react-router-dom";



function Signup() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                <img src="images/Admin/logo3.jpg" className="login-logo" alt="..."/>
                </div>
                <div className="col-sm-6">
                    <div className="right-column text-center">
                    <img src="images/Admin/men1.png" className="signup-logo" alt="..."/>
                        <p className="info">Sign up to track your pregnancy and more infomation.</p>
                        <button type="submit" className="btn btn-primary btn-block">
                        <img src="images/google.png" alt="..."/>Log in with Google
                        </button>
                        <p className="or">OR</p>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Mobile Number or Email"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Full Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <Link to="/admin-login"><button type="submit" className="signup btn-primary btn-block">Sign up</button></Link>
                        </form>
                        <p className="terms">By signing up, you agree to our <b>Terms, Data Policy</b> and <b>Cookies Policy</b></p>
                    </div>
                    <div className="right-column-login text-center">
                        <p>Have an account? <a href="/admin-login">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;