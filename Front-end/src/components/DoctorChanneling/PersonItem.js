import { useState } from 'react';
import '../DoctorChanneling/DoctorChanel.css';
import dayjs from 'dayjs';
import Modal from './Modal';


const PersonItem = ({ item }) => {

    const [modalOpen, setModalOpen] = useState(false);


    return (

        <div className="profile-container">
             <div className="profile-card">
             <img src={item?.image} className="profile-icon" alt=''/>
             <div className="profile-name">{item?.first_name} {item?.last_name}</div>
             <div className="profile-position">{item?.description}</div>
             <div className="status">{item?.status}</div>
             <p className='profile-text center'>
                        {dayjs(item?.date).format('DD MMMM YYYY')}
             </p>
             <button className="see-more btn btn-outline-success" type="submit" onClick={() => {
          setModalOpen(true);
        }}>Book Now</button>
           {modalOpen && <Modal setOpenModal={setModalOpen} />}
             </div>
        </div>  

    )
};

export default PersonItem;