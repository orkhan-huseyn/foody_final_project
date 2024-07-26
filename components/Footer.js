import React from 'react';
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialMedia}>
          <h2>Foody<span className={styles.dot}>.</span></h2>
           <p>  Lorem ipsum is placeholder   <br /> text commonly used in the graphic,</p>
          <div className={styles.icons}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </div>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </div>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </div>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.column}>
            <h3>Popular</h3>
            <ul>
              <li><a href="/">Programming
              </a></li>
              <li><a href="/"> Books for children</a></li>
              <li><a href="/">Psychology
              </a></li>
              <li><a href="/">Business </a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Cash</h3>
            <ul>
              <li><a href="/">Delivery
              </a></li>
              <li><a href="/"> Payment
              </a></li>
              <li><a href="/">About the store</a></li>
             
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Help</h3>
            <ul>
              <li><a href="/">Contacts
              </a></li>
              <li><a href="/">Purchase returns
              </a></li>
              <li><a href="/">Buyer help
              </a></li>
            </ul>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>All rights reserved © 2003-2022 Foody TERMS OF USE | Privacy Policy <span>Foody</span></p>
    </footer>
  );
};

export default Footer;
