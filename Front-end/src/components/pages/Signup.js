import React from "react";
import "../SignUp.css";
import { Link  } from "react-router-dom";
import { Formik } from "formik";
import { TextField } from "@material-ui/core";
import * as Yup from "yup";
import { useState, useRef, useContext,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import AuthContext from "../../context/AuthProvider";
import axios from "axios";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";


function Signup({ onLogin }) {
    const navigate = useNavigate();
    const formRef = useRef();
    // const [email,setEmail]=useState('');
    // const [password,setPassword]=useState('');
    // const [firstName,setfirstName]=useState('');
    // const [lastName,setlastName]=useState('');
    // const [userName,setusername]=
    // const [errMsg,setErrMsg]=useState('');
    const [success,setSuccess]=useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    // useEffect(()=>{
    //     setErrMsg('');
    //   },[email,password]);
    
    //Used for Yup:Form validation
      const [messageItem, setMessageItem] =
        useState({
            message: "",
            category: "",
          });
        
      const handleSubmitForm = async (data) => {
       
        try {
          console.log("FORM DATA", data);
          const url = `${process.env.REACT_APP_API_ORIGIN}/signup`;
         const res= await axios
            .post(url, {
              email:data.email,
              firstName:data.firstName,
              lastName:data.lastName,
              username:data.username,
              password:data.password,
            });
            console.log(res.data);
            setSnackbarOpen(true);
            navigate('/login');
            setSuccess(true);
    
        
          // console.log("User signed successful!!");
          onLogin();
        } catch (err) {
         
        console.log(err.response);
        }
      };


    return (
        <div className="container">
            <div>
            <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => {
          setSnackbarOpen(false);
        }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() => {
            setSnackbarOpen(false);
          }}
          severity="success"
        >
          Post Created!
        </MuiAlert>
      </Snackbar>
            </div>
            <div className="row">
                <div className="col-sm-6">
                <img src='images/logo2.jpg' className="phone" alt="..."/>
                </div>
                <div className="col-sm-6">
                    <div className="right-column text-center">
                    <img src='images/logo1.jpg' className="signup-logo" alt="..."/>
                        <p className="info">Sign up to track your pregnancy and more infomation.</p>
                        <button type="submit" className="btn btn-primary btn-block">
                        <img src='images/google.png' alt="..."/>Log in with Google
                        </button>
                        <p className="or">OR</p>


                        <Formik
              initialValues={messageItem}
              validationSchema={Yup.object().shape({
                email: Yup.string().required("Email is required"),
                password: Yup.string().required("Password is required"),
              })}
              onSubmit={handleSubmitForm}
              innerRef={formRef}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                touched,
                errors,
              }) => (
                <div>
                  
                    <TextField
                      className="form-group"
                      id="email"
                      label="Email"
                      variant="outlined"
                      name="email"
                      onChange={handleChange}
                      value={values.email}
                      error={Boolean(touched.message && errors.message)}
                      helperText={touched.message && errors.message}
                      onBlur={handleBlur}
                    />
                    <TextField
                      className="form-control"
                      id="firstName"
                      label="First Name"
                      variant="outlined"
                      name="firstName"
                      onChange={handleChange}
                      value={values.firstName}
                      error={Boolean(touched.message && errors.message)}
                      helperText={touched.message && errors.message}
                      onBlur={handleBlur}
                    />
                    <TextField
                      className="form-control"
                      id="lastName"
                      label="Last Name"
                      variant="outlined"
                      name="lastName"
                      onChange={handleChange}
                      value={values.lastName}
                      error={Boolean(touched.message && errors.message)}
                      helperText={touched.message && errors.message}
                      onBlur={handleBlur}
                    />
                    <TextField
                      className="form-control"
                      id="username"
                      label="UserName"
                      variant="outlined"
                      name="username"
                      onChange={handleChange}
                      value={values.username}
                      error={Boolean(touched.message && errors.message)}
                      helperText={touched.message && errors.message}
                      onBlur={handleBlur}
                    />
                    <TextField
                      className="form-control"
                      id="password"
                      label="Password"
                      variant="outlined"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      error={Boolean(touched.message && errors.message)}
                      helperText={touched.message && errors.message}
                      onBlur={handleBlur}
                    />
                    {/* <div className="form-group">
                                <input type="text" value={data.email} className="form-control" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div> */}
                    <button
                      type="submit"
                      className="signup btn-primary btn-block"
                      onClick={() => handleSubmit()}
                    >
                      Sign Up
                    </button>
                 
                </div>
              )}
            </Formik>

                        {/* <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Mobile Number or Email"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="First Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Last Name"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Username"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email"/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <Link to="/login"><button type="submit" className="signup btn-primary btn-block">Sign up</button></Link>
                        </form> */}
                        <p className="terms">By signing up, you agree to our <b>Terms, Data Policy</b> and <b>Cookies Policy</b></p>
                    </div>
                    <div className="right-column-login text-center">
                        <p>Have an account? <a href="/login">Login</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;