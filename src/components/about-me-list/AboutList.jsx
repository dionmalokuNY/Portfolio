import React from 'react';
import About from '../about-me/About';
import {websites} from '../../data';
import './aboutList.css';

const AboutList = () => {
  return (
      <div className='aboutList-container'>
          <div className="row justify-content-center">
            <div className="col">
                <h1 className="about-title">
                    Create &amp; inspire
                </h1>
                <h5 className='about-description mb-4'>
                    Click to view any of the projects below
                </h5>
            </div>
            <div className="row">
            <div className="col">
                <div className="about-list mt-3">
                    {websites.map(item =>{
                        return <About key={item.id} img={item.image} link={item.linku}/>
                    })}
                </div>
            </div>
            </div>
        </div>
      </div>
  )
};

export default AboutList;
