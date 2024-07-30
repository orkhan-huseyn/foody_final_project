import React from 'react'
import styles from '../styles/Checked.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


function checkout() {
  return (
    <div className={styles.checkedContainer}>
    <FontAwesomeIcon icon={faCheckCircle} className={styles.icon} />
    <div className={styles.checkedTitle}>
        <h2>Your order has been received</h2>
    </div>
</div>



    
  )
}

export default checkout