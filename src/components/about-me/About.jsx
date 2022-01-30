import React from 'react';
import './about.css';
import '../../data';


const About = ({img,link}) => {
  return (
    <div className='about-container'>
        <div className="about-browser">
          <div className="about-circle"></div>
          <div className="about-circle"></div>
          <div className="about-circle"></div>
        </div>
        <a href={link} target="_blank" rel='noreferrer'>
          <img className='about-img' src={img} alt="Website" />
        </a>
    </div>
  )
};

export default About;
