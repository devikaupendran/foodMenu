import React from 'react'
import heroImage from '../images/heroImg.jpg'
function Hero() {
    return (
        <div className='hero'>
             <img id = "hero-image" src= { heroImage } alt="hero_image" />
             <h2> Savor the Flavor, Crafted by Chefs </h2>
        </div>
    )
}

export default Hero
