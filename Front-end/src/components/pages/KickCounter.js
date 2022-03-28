import React, { useState } from 'react';
import '../TimerCounter/Counter.css';
import Navbar from '../Navbar';
import Footer from '../Footer';

  function Kick() {  

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();


  return (
    <>
    <Navbar/><br/><br/>
    <div className='kickCounter-head'>
      <h3 className="main-head2">Kick Counter </h3>
    </div>
    <p className="head-count">Time how long it takes to get to 10 kicks/movements when your baby is most active.</p>
    <div className="col-md-12 text-center">
    <img src='images/Icons/feet.jpg' alt="logo" width="170" height="96"/>
    </div>
    <div className='kickCounter'>
      <div className='clock-holder'>
        <div className='stopwatch'>
        <Display time={time} />
        <Btn status={status} resume={resume} reset={reset} stop={stop} start={start}/>
        <Counter />
        </div>
      </div>
    </div>

    <Footer/>
    </>
  );
}

const Display =(props) =>{
  const h = () => {
    if(props.time.h === 0){
      return '';
    }else {
      return <span>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</span>;
    }
 }
  return(
    <>
 <div>
 {h()}&nbsp;&nbsp;
       <span>{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</span>&nbsp;:&nbsp;
       <span>{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</span>&nbsp;:&nbsp;
       <span>{(props.time.ms >= 10)? props.time.ms : "0"+ props.time.ms}</span>
 </div>
 </>
  )
};

const Btn = (props) => {
  return(
    <div>
      {(props.status === 0)? 
        <button className="stopwatch-btn stopwatch-btn-gre"
        onClick={props.start}>Start</button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-red"
                  onClick={props.stop}>Stop</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-gre"
                  onClick={props.resume}>Resume</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      } 
    </div>
  );
}

const Counter = (props) => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1)
  }

  return(
    <div>
        <span className='countNum'>Kicks : {num} </span>
        <div>
        <p className="subhead-count">TAP TO KEEP COUNT</p>
        <button className="stopwatch-btn stopwatch-btn-foot"
        onClick={incNum}><i className="fas fa-shoe-prints fa-rotate-270"></i></button><br/>
         <button className="stopwatch-btn stopwatch-btn-gre"
        onClick={() => setNum(0)}>Done</button>
        </div>
    </div>
    );
  }




export default Kick;  