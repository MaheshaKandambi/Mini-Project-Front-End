import React, { Component } from 'react';
import { Link  } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-date-picker";
import '../welcome/CountDown.css';



export default class Count extends React.Component {
    state = {
      endDate: new Date(),
      weeks: 0,
      days: 0,
      errorMsg: ''
    };
  
    componentWillUnmount() {
      clearTimeout(this.timer);
    }
  
    onEndDateChange = endDate => {
      this.setState({ endDate });
    }
  
    getTwoDigitValue = value => {
      if (value < 10) {
        return '0' + value;
      }
      return '' + value;
    }
    
    calculateCountdown = () => {
      const startDate = new Date();
      const { endDate } = this.state;
      
      this.setState({ errorMsg: '' });
      
      const timeRemaining = endDate.getTime() - startDate.getTime();
  
      if(timeRemaining > 0) {
        const start_date = new Date(startDate);
        const end_date = new Date(endDate);
        const start_millis = start_date.getTime(); // Get timestamp of start date
        const end_millis = end_date.getTime(); // Get timestamp of end date
  
        // Convert to seconds, 1 second = 1000 milli seconds
        const old_sec = start_millis / 1000;
        const current_sec = end_millis / 1000;
  
        // Get remaining seconds
        let seconds = current_sec - old_sec;
  
        let weeks = Math.floor(seconds / (24 * 60 * 60 * 7)); // 1 day is equal to 24 hours, each hour has 60 mins and 60 seconds
        seconds -= weeks * 24 * 60 * 60 * 7; // Get remaining seconds
  
        let days = Math.floor(seconds / (24 * 60 * 60)); // 1 day is equal to 24 hours, each hour has 60 mins and 60 seconds
        seconds -= days * 24 * 60 * 60; // Get remaining seconds
  
        let hours = Math.floor(seconds / (60 * 60)); // 1 hour has 60 mins and 60 seconds
        seconds -= hours * 60 * 60; // Get remaining seconds
  
        let minutes = Math.floor(seconds / 60); // 1 minute is equal to 60 seconds
        seconds -= minutes * 60; // Get remaining seconds
        
        weeks   = Math.abs(weeks)
        days    = Math.abs(days);

     
        this.setState(() => ({
          weeks, days, 
        }), () => {
          this.timer = setTimeout(this.calculateCountdown, 1000);
        });
      } else {
        this.setState({ errorMsg: 'Times up!'});
        clearTimeout(this.timer);
      }
    };
  
    render() {
      const { weeks, days, errorMsg } = this.state;
      const convertedWeeks = this.getTwoDigitValue(weeks);
      const convertedDays = this.getTwoDigitValue(days);
  









    return (
         <section className='container'>
             <div className='site-content'>
                 <div className='posts'>
                     <div className='post-images'>
                         <div>
                             <img src= 'images/SubBanner/sub-banner.jpg' className='subbanner' alt=''></img>
                             
                         </div>
                     </div>
                 </div>

                 <aside class="sidebar">
                    <div class="popular-post">
                 
                        <h2 className='sub'>Countdown to Cute</h2>
                        <div className="counter">
        <div className="time">
              <div className="time-value">{convertedWeeks}</div>
              <div className="time-label">Weeks</div>
          </div>
          <div className="time">
              <div className="time-value">{convertedDays}</div>
              <div className="time-label">Days</div>
          </div>
      </div>

      <div className="date-time-form">
         
         {errorMsg && <p className="error-msg">{errorMsg}</p>}
         <Form>
           {/* <Form.Group controlId="end_date">
             <Form.Label>Due Date</Form.Label>
             <DatePicker ClassName='datepicker'
               format="dd/MM/y"
               onChange={this.onEndDateChange}
               value={this.state.endDate}
             />
           </Form.Group> */}
           <Button
             variant="primary"
             type="button"
             onClick={this.calculateCountdown}
           >
             Change Due Date
           </Button>
         </Form>
       </div> 
                    </div>
                
                    </aside>
             </div>
         </section>
    );
    }
}

