import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingBasket, faList, faCreditCard, faSignOutAlt, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/UserProfile.module.css';

const UserProfile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.sidebar}>
        <a className={`${styles.menuItem} ${styles.active}`}><FontAwesomeIcon icon={faUser} /> Profile</a>
        <a className={styles.menuItem}><FontAwesomeIcon icon={faShoppingBasket} /> Your Basket</a>
        <a className={styles.menuItem}><FontAwesomeIcon icon={faList} /> Your Orders</a>
        <a className={styles.menuItem}><FontAwesomeIcon icon={faCreditCard} /> Checkout</a>
        <a className={styles.menuItem}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
      </div>
      <div className={styles.profileContent}>
        <h2>Profile</h2>
        <div className={styles.uploadContainer}>
          <FontAwesomeIcon icon={faCloudUploadAlt} className={styles.uploadIcon} />
          <p>upload</p>
        </div>
        <form className={styles.profileForm}>
          <div className={styles.formGroup}>
            <label>Contact</label>
            <input type="text" value="+994" readOnly />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" value="ibrahim.ekberov.2001@gmail.com" readOnly />
          </div>
          <div className={styles.formGroup}>
            <label>Username</label>
            <input type="text" value="Akberov" readOnly />
          </div>
          <div className={styles.formGroup}>
            <label>Address</label>
            <input type="text" value="babek pr. Sumgayit" readOnly />
          </div>
          <div className={styles.formGroup}>
            <label>Full Name</label>
            <input type="text" value="Ibrahim Akberov" readOnly />
          </div>
          <button type="button" className={styles.saveButton}>Save</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
