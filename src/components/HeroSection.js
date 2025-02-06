import React from 'react';
import './HeroSection.css';
import Button from './Button';
import '../App.css';

function HeroSection () {
  return (
    <div className='hero-container'> 
         <video autoPlay loop muted>
            <source src={require('../videos/video-4.mp4')} type="video/mp4"/> Your browser does not support the video tag
        </video>
        <h1>THE FUTURE OF BEAUTY</h1>
        <p>Unveil Your Best Self Today</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i class="fa-solid fa-circle-play"></i></Button>
        </div>
    </div>
  )
}

export default HeroSection