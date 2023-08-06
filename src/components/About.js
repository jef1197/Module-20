import React from 'react';
import profile from '../assets/profile/me1.JPG'

function About() {
  
  
  return (
    <section className='about-content'>
      <div className='about-text'>
        <p>Hello! Im Jef Ogues and I'm currently 25 years old and an inpiring Full Stack Developer</p>
      </div>
      <div className='about-img'><img src={profile} alt='selfie of me'/></div>
    </section>
    );
  }

  export default About;
