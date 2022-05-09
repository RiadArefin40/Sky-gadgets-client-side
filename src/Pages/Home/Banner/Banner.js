import React from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://i.ibb.co/0jzyDGg/4774634-2.png'
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>Get Latest SmartWatches collection For you</h2>
      <p> Get With exciting prices and offers</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='https://i.ibb.co/Rgz0YTm/4774634-3.png'
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 >Get Latest headphones collection For you</h3>
      <p>Get With exciting prices and offers</p>
    </Carousel.Caption>
  </Carousel.Item>
 
</Carousel>
        </div>
    );
};

export default Banner;