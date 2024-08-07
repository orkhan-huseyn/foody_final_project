import React from 'react';
import styles from '../styles/CategorySidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faUtensils, faTags, faReceipt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const CategorySidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Foody.</div>
      <ul className={styles.menu}>
        <button className={styles.menuItem}><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</button>
        <button className={styles.menuItem}><FontAwesomeIcon icon={faBox} /> Products</button>
        <button className={styles.menuItem}><FontAwesomeIcon icon={faUtensils} /> Restaurants</button>
        <button className={`${styles.menuItem} ${styles.active}`}><FontAwesomeIcon icon={faTags} /> Category</button>
        <button className={styles.menuItem}><FontAwesomeIcon icon={faReceipt} /> Orders</button>
        <button className={styles.menuItem}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</button>
      </ul>
    </div>
  );
}

export default CategorySidebar;
