import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Inthewomb from './components/pages/Inthewomb';
import Pregnancybyweek from './components/pages/Pregnancybyweek';
import KickCounter from './components/pages/KickCounter';
import ContractionTimer from './components/pages/ContractionTimer';
import GrowthTracker from './components/pages/GrowthTracker';
import HospitalBagChecklist from './components/pages/HospitalBagChecklist';
import MyBabyName from './components/pages/MyBabyName';
import DailySelfcareChecklist from './components/pages/DailySelfcareChecklist';
import ArticleandVideo from './components/pages/ArticleandVideos';
import Insights from './components/pages/Insights';
import Category from './components/pages/Category';
import DoctorChanneling from './components/pages/DoctorChanneling';
import Calendar from './components/pages/Calendar';
import HealthandMedical from './components/pages/HealthandMedical';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Duedate from './components/pages/Duedate';
import AdminSignup from './components/Admin/AdminSignup';
import AdminDashboard from './components/Admin/AdminDashboard';
import PrivateRoute from './components/HOC/PrivateRoute';
import AdminLogin from './components/Admin/AdminLogin';
import BabyGirl from './components/babyProducts/BabyGirl';
import BabyBoy from './components/babyProducts/BabyBoy';
import Diapering from './components/babyProducts/Diapering';
import Toys from './components/babyProducts/Toys';
import BathAndSkinCare from './components/babyProducts/BathAndSkinCare';
import ProductDetails from './components/babyProducts/ProductDetails/ProductDetails';
import Faq from './components/FAQ/Faq';
import Modal from './components/DoctorChanneling/Modal';
import Profile from './components/Profile/Profile';

function App() {
  return (
    
    <Router>
      {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element = {<Signup />} />
          <Route exact path="/home" element = {<Home />} />
          <Route exact path="/pregnancybyweek" element = {<Pregnancybyweek />} />
          <Route exact path="/inthewomb" element = {<Inthewomb />} />
          <Route exact path="/kickcounter" element = {<KickCounter />} />
          <Route exact path="/contractiontimer" element = {<ContractionTimer />} />
          <Route exact path="/growthtracker" element = {<GrowthTracker />} />
          <Route exact path="/hospitalbagchecklist" element = {<HospitalBagChecklist />} />
          <Route exact path="/mybabyname" element = {<MyBabyName />} />
          <Route exact path="/articles&videos" element = {<ArticleandVideo />} />
          <Route exact path="/insights" element = {<Insights />} />
          <Route exact path="/dailyselfcarechecklist" element = {<DailySelfcareChecklist />} />
          <Route exact path="/category" element = {<Category />} />
          <Route exact path="/doctorchanneling" element = {<DoctorChanneling />} />
          <Route exact path="/calendar" element = {<Calendar />} />
          <Route exact path="/health&medical" element = {<HealthandMedical />} />
          <Route exact path="/duedatecalculator" element = {<Duedate />} />
          {/* <Route exact path="/signup" element = {<Signup />} /> */}
          <Route exact path="/login" element = {<Login />} />
          <Route exact path="/admin-signup" element = {<AdminSignup/>} />
          {/* <Route exact path="/admin-signup" element = {<PrivateRoute><AdminSignup/></PrivateRoute>} /> */}
          <Route exact path="/admin-login" element = {<AdminLogin/>} />
          <Route exact path="/adminDashboard" element = {<AdminDashboard/>} />
          <Route exact path="/baby_girl" element = {<BabyGirl/>} />
          <Route exact path="/baby_boy" element = {<BabyBoy/>} />
          <Route exact path="/diapering" element = {<Diapering/>} />
          <Route exact path="/toys" element = {<Toys/>} />
          <Route exact path="/bath-And-SkinCares" element = {<BathAndSkinCare/>} />
          <Route exact path="/product-details" element = {<ProductDetails/>} />
          <Route exact path="/FAQ" element = {<Faq/>} />
          <Route exact path="/book" element = {<Modal/>} />
          <Route exact path="/myaccount" element = {<Profile/>} />
          

          
        </Routes>

      
    
       
    </Router>
  );
}
  
export default App;
