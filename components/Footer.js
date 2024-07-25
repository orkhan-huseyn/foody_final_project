import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <h1>Foody<span className={styles.dot}>.</span></h1>
          
          <p>Lorem ipsum is placeholder text <br />  commonly used in the graphic,</p>
          <div className={styles.socialIcons}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 25C0.5 11.469 11.469 0.5 25 0.5C38.531 0.5 49.5 11.469 49.5 25C49.5 38.531 38.531 49.5 25 49.5C11.469 49.5 0.5 38.531 0.5 25Z" stroke="white"  />
            
            </svg>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25Z" fill="#FB9300" />
            </svg>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 25C0.5 11.469 11.469 0.5 25 0.5C38.531 0.5 49.5 11.469 49.5 25C49.5 38.531 38.531 49.5 25 49.5C11.469 49.5 0.5 38.531 0.5 25Z" stroke="white"/>
            </svg>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerSection}>
            <h2>Popular</h2>
            <ul>
              <li>Programming</li>
              <li>Books for children</li>
              <li>Psychology</li>
              <li>Business</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h2>Cash</h2>
            <ul>
              <li>Delivery</li>
              <li>Payment</li>
              <li>About the store</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h2>Help</h2>
            <ul>
              <li>Contacts</li>
              <li>Purchase returns</li>
              <li>Buyer help</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>All rights reserved © 2003-2022 Foody TERMS OF USE | Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;
