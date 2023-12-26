'use client'
import React from 'react';
import './imageCarousel3.scss'; // Create a CSS file for styling if needed

const Carousel = () => {
  
  const images = [
    'mobile/mobile1.png',
    'mobile/mobile2.png',
    'mobile/mobile3.png',
    'mobile/mobile4.png',
    'mobile/mobile5.png',
    'mobile/mobile6.png',
    'mobile/mobile7.png',
    'mobile/mobile8.png',
    'mobile/mobile9.png',
    'mobile/mobile10.png',
    'mobile/mobile11.png'
  ];

  return (
    <div className='slider'>
        <div className='slider__track'>
        {images.map((image, index) => (
          <div key={index} className='slider__track-slide'>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default Carousel;