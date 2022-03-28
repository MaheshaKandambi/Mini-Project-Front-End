import React from 'react';
import { Link  } from "react-router-dom";


function Modal({ setOpenModal }){
    return(
        <div className='modelBackground'>
            <div className='modelContainer'>
                <div className='titleCloseBtn'>
                <button
            onClick={() => {
              setOpenModal(false);
            }}
            >
            x
          </button>
                </div>
                <div className='model-title'>
                <h5>Are You Sure You Want To Continue?</h5>
                </div>
                <div className="modelBody">
                    <p> Click 'Continue' to make an appointment! <br/> Be safe & Be Healthy!!!</p>
                </div>
                <div className='modelFooter'>
                <button
                    onClick={() => {
                      setOpenModal(false);
                    }}
                    id="cancelBtn"
                    >
                    Cancel
                  </button>
                  {/* <Link to="/continue"> */}
                    <button id='continue'>Continue</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
}

export default Modal;