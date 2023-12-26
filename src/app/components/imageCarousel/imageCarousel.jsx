'use client'
import React, { useState, useEffect } from 'react';
import './imageCarousel.scss'; // Create a CSS file for styling

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.webp',
    'images/img4.webp',
    'images/img5.png',
    'images/img6.png',
    'images/img7.png',
    'images/img8.png',
    'images/img9.png',
    'images/img10.png',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
          const newIndex = (prevIndex + 1) % images.length;
          console.log('Current Image Index:', newIndex);
          return newIndex;
      });
  }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`carousel__image ${index === currentImageIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;