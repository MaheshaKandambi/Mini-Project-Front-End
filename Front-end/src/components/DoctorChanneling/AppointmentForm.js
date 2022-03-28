import { event } from 'jquery';
import { useState } from 'react';
import '../DoctorChanneling/DoctorChanel.css';

const AppointmentForm = ({ descriptions, onNameFilter }) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
    onNameFilter(value);
  };


    return(
        <>
        <section className='contactUs'>
        <div class="emergencyContact">
        <div class="emergencyContactInfo">
          <div>
            <h2>Contact Info</h2>
            <ul className='info'>
              {/* <li>
                <span><img src='images/Contact/location.png'/></span>
                <span>No. 12, <br/>xyz, Company <br/> ZYoiry Street, <br/>Sri Lanka.</span>
              </li> */}
              <li>
                <span><img src='images/Contact/mail.png'/></span>
                <span>Contact with our email :<br/>echanellprt2@gmail.com</span>
              </li>
              <li>
                <span><img src='images/Contact/call.png'/></span>
                <span>Emergency Cases :<br/>0115 747 777</span>
              </li>
            </ul>
          </div>
          </div>
       
          <div class="contactForm">
            <h2>Appointment</h2>
            <div className='formBox'>
              <div className='inputBox w50'>
              <label htmlFor="name">Doctor Name</label>
                <input type="text" id="name" value={name} onChange={handleNameChange}/>
               
              </div>
                   
        
              <div className='inputBox w50 custom-select'>
              <label htmlFor="specialty">Specialty-Description</label>
                {/* <input type="text" required/> */}
                <select className="form-select" id="specialty">
                    <option value="">select</option>
                    {descriptions.map((description) => (
                      <option value={description} key={description}>
                        {description}
                      </option>
                    ))}
                    </select>





                    {/* <option value="nutrition-physician">Nutrition Physician</option>
                    <option value="nutritionist">Nutritionist</option>
                    <option value="obstetrician-and-gynecologist">Obstetrician And Gynecologist</option>
                    <option value="pain-management">Pain Management</option>
                    </select> */}
              </div>

              <div className='inputBox w50'>
              <label htmlFor="specialty">Available Date</label>
                <input type="date" required/>
              </div>
            

            <div className='inputBox w100'>
            <input type="submit" value="Search"/>
            </div>
        </div>
        </div>
       </div>
 
      </section>
</>
    );
}

export default AppointmentForm;