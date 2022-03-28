import React, { useEffect } from "react";
import { useState, useRef, useContext} from "react";
import "../SignUp.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap-buttons";
import axios from "axios";
import { Snackbar, useForkRef } from "@material-ui/core";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
import MuiAlert from "@material-ui/lab/Alert";
import { Formik } from "formik";
import * as Yup from "yup";
import { FormHelperText, TextField } from "@material-ui/core";
import AuthContext from "../../context/AuthProvider";
import userEvent from "@testing-library/user-event";
import {useNavigate} from 'react-router-dom';

export const Login = ({ onLogin }) => {
  const {setAuth}=useContext(AuthContext);
  const userRef=useRef();
  const navigate = useNavigate();
  const formRef = useRef();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [errMsg,setErrMsg]=useState('');
  const [success,setSuccess]=useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // useEffect(()=>{
  //   userRef.current.focus();
  // // },[])
  useEffect(()=>{
    setErrMsg('');
  },[email,password]);


  const [messageItem, setMessageItem] =
    useState({
        message: "",
        category: "",
      });
    
  const handleSubmitForm = async (data) => {
   
    try {
      console.log("FORM DATA", data);
      const url = `${process.env.REACT_APP_API_ORIGIN}/login`;
     const res= await axios
        .post(url, {
          email:data.email,
          password:data.password,
        });
        console.log(res.data);
    
        
        const accessToken = res?.data?.token;
        console.log(accessToken);
        localStorage.setItem("testJSON", accessToken);
        const roles=res?.data?.roles;
        const setAuth=({email,password,roles,accessToken})=>{};
        setEmail('');
        setPassword('');
        setSuccess(true);

        
        navigate('/home');
       
        //01 save res.data in local storage
        //02
        //option 1 refresh page
        // option 2 cotext hook update user token and info
        //03 
        //go to authenticated page 
        // => dashboard inside page

       
      formRef.current.resetForm();
      setSnackbarOpen(true);
      // console.log("User signed successful!!");
      onLogin();
    } catch (err) {
      console.log(err);
    }
  };

  // function Login() {
  return (
   
    success?(<>
    <div className="headerStyle">
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
      User signed successful!!
    </MuiAlert>
  </Snackbar>
    </div><a href="/home"></a></>):(
    <div className="container">

      <div className="row">
        <div className="col-sm-6">
          <img src="images/logo2.jpg" className="phone" alt="..." />
        </div>
        <div className="col-sm-6">
          <div className="right-column text-center">
            <img src="images/logo1.jpg" className="signup-logo" alt="..." />
            <p className="info">
              Sign up to see photos and videos from your friends.
            </p>
            {/* <button type="submit" className="btn btn-primary btn-block">
                        <img src={Google} alt="..."/>Log in with Google
                        </button> */}
            <p className="or">OR123</p>

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
                      Login
                    </button>
                 
                </div>
              )}
            </Formik>

            <div className="right-column-login text-center">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Login;
