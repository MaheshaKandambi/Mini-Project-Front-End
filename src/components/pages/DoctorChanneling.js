import React, { useState } from "react";
import '../DoctorChanneling/DoctorChanel.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import AppointmentForm from '../DoctorChanneling/AppointmentForm';
import PersonItem from '../DoctorChanneling/PersonItem';


const DoctorChanneling = () => {
  
   const data = [
       {
           id:1,
           image: 'images/Doctors/team1.png',
           first_name: "John",
           last_name: "Doe",
           description: 'Obstetrics and Gynecologist',
           status: 'AVAILABLE',
           date: "2022-02-17"
       },
       {
           id:2,
           image: 'images/Doctors/team2.png',
           first_name: "Nathali",
           last_name: "caroline",
           description: 'Clinical nutritionist',
           status: 'AVAILABLE',
           date: "2022-02-24"
       },
       {
           id:3,
           image: 'images/Doctors/team3.png',
           first_name: "John",
           last_name: "Doe",
           description: 'Obstetrics and Gynecologist',
           status: 'AVAILABLE',
           date: "2022-02-17",
       },
       {
           id:4,
           image: 'images/Doctors/team4.png',
           first_name: "Malan",
           last_name: "Brandi",
           description: 'Dietician and nutritionist',
           status: 'AVAILABLE',
           date: "2022-02-25",
       },
       {
           id:5,
           image: 'images/Doctors/team5.png',
           first_name: "Rizva",
           last_name: "Nichola",
           description: 'Clinical nutritionist',
           status: 'AVAILABLE',
           date: "2022-03-01",
       },
       {
          id:6,
          image: 'images/Doctors/team6.jpg',
          first_name: "Jeffrey",
          last_name: "NG",
          description: 'Obstetrics and Gynecologist',
          status: 'AVAILABLE',
          date: "2022-02-16",
       },
       {
          id:7,
          image: 'images/Doctors/team7.jpg',
          first_name: "Daftar",
          last_name: "Dokter",
          description: 'Obstetrics and Gynecologist',
          status: 'AVAILABLE',
          date: "2022-02-15",
       },
       {
       id:8,
       image: 'images/Doctors/team8.jpg',
       first_name: "Kelli",
       last_name: "Morrell",
       description: 'Dietician and nutritionist',
       status: 'AVAILABLE',
       date: "2022-03-01",
       },
   ];

   const [allData, setData] = useState(data);

   const generateDescriptionDataForDropdown = () => {
      return [...new Set(data.map((item) => item.description))];
   };

  const handleFilterName = (name) => {
    const filteredData = data.filter((item) => {
      const fullName = `${item.first_name} ${item.last_name}`;
      if(fullName.toLowerCase().includes(name.toLowerCase())){
         return item;
      }
    });
       setData(filteredData);
  };


    return (
      <>

      <Navbar/><br/><br/>
      
<div id="carouselExampleCaptions" className="my-carousel carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <img src='images/MainBanner/slider3.jpg' className="d-block w-100" height="100%" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Channel the Doctor</h5>
              <h3>We make your dreams come true</h3><br/>
              <p>We are providing best and affordable health care for your baby.</p>
            </div>
          </div>
        </div>
      </div>


      <div class="service-section">
      <h3 className="main-head center">Our Services</h3>
    <div class="inner-service-section">
        <div class="service-box">
            <i class="far fa-clock"></i>
        <h2>Consultation</h2>
        <p>Mon/Wed/Thu - 8.00am - 12.00pm</p>
        <p>Wednesday - 4.00pm - 9.00pm</p>
        <p>Sunday - 4.00pm - 9.00pm</p>
        </div>
        <div class="service-box">
            <i class="fas fa-clinic-medical"></i>
        <h2>Best Treatment</h2>
        <p>Our staff is always available at your service 
          whenever you need us. In case of an emergency, 
          our doctors are always at your service/ and we 
          are reliable.</p>
        </div>
        <div class="service-box">
            <i class="fas fa-stethoscope"></i>
        <h2>Appointments</h2>
        <p>It is advisable to make the appointment one 
          month early to avoid disappointment. If you 
          are not attending on the due day please cancel 
          the appointment.</p>
        </div>
        <div class="service-box">
            <i class="fas fa-medkit"></i>
        <h2>Emergency Cases</h2>
        <p>0115 747 777</p>
        <p>In case of an emergency, contact us.</p>
        </div>
    </div>
</div>

    <section className="sub-banner-product">
    <div class="sub-banner-image">
      <div class="sub-banner-text">
        <h1>“Our vision is to bestow the country a healthy future generation”</h1>
      </div>
    </div>
    </section>

      <div className="appointment center"> <AppointmentForm 
      descriptions={generateDescriptionDataForDropdown()}
      onNameFilter={handleFilterName}
      /></div>
        <div class="cards">
            {allData.map((item)=>(
              <PersonItem item={item} key={item.id} />
            ))}
        </div>

      <Footer/>

      </>
    );
   };

export default DoctorChanneling;