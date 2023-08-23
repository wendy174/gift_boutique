import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const ImageCarousel = ({ images }) => {
  return (
    <div style={{ width: '1000px', height: '600px' }} >
    <Carousel >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index}`} style={{ width: '60%', height: '60%', objectFit: 'cover' }} />
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default ImageCarousel;

