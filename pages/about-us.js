import React from 'react'
import styles from '../styles/Aboutus.module.css'
import burger from '../assets/images/burger/burger.svg'


function About() {
  return (
   <div className={styles.aboutContainer}>
    <div className={styles.aboutText}>
      <h1 className={styles.aboutTitle}>About Us</h1>
      <p className={styles.aboutDescription}>
      Lorem ipsum is placeholder text commonly used in the   <br />
       graphic, print, and publishing industries for previewing layouts   <br />
       and visual mockups.Lorem ipsum is placeholder text   <br />
       commonly used in the graphic, print, and publishing industries   <br />
       for previewing layouts and visual mockups.Lorem ipsum is   <br />
       placeholder text commonly used in the graphic, print, and   <br />
       publishing industries for previewing layouts and visual  <br />
       mockups.
      </p>
    </div>
    <div className={styles.abutImage}>
      <img src={burger.src} alt="burger svg" />
    </div>
   </div>
  )
}

export default About