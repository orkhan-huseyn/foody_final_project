import React from 'react'
import './aboutus.css'
import burger from '../assets/images/burger/burger.svg'


function About() {
  return (
   <div className='about-container'>
    <div className="about-text">
      <h1 className='abut-title'>About Us</h1>
      <p className='about-description'>
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
    <div className="about-image">
      <img src={burger} alt="burger svg" />
    </div>
   </div>
  )
}

export default About