'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './imageCarousel2.scss'; // Create a CSS file for styling if needed

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000, // Adjust autoplay speed in milliseconds
  };

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

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="carousel-image"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;