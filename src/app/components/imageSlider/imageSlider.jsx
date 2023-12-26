'use client'
import React, { useState, useEffect } from 'react';
import './imageSlider.scss'; // Create a CSS file for styling

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  const images = [
    'desk/desk1.png',
    'desk/desk12.png',
    'desk/desk4.png',
    'desk/desk5.png',
    'desk/desk6.png',
    'desk/desk7.png',
    'desk/desk8.png',
    'desk/desk9.png',
    'desk/desk10.png',
    'desk/desk13.png'
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current image index, and loop back to 0 if it exceeds the number of desk
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      // Cleanup the interval when the component unmounts
      clearInterval(intervalId);
    };
  }, [currentImageIndex, images.length]);

  return (
    <div className="image__slider">
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ width: '90vw', height: '90vh' }} />
    </div>
  );
}

export default ImageSlider