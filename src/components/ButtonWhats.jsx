import styles from './Button.module.css'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';

function ButtonWhats() {
    const handleWhatsAppClick = () => {
        window.open(`https://api.whatsapp.com/send?phone=55${51993302829}`, '_blank');
      };
    

    return (
        <button className={styles.btn} onClick={handleWhatsAppClick}>
          <FaWhatsapp size={40}/>
        </button>
      );
    };
    
export default ButtonWhats;