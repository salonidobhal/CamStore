import React, { useState } from 'react';
import './carousel.css'

import Products from '../Products/Products'

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';
  
  const items = [
    {
      src: 'images/cc1.jpg',
      altText: 'FHD Hgh Definition'
      
    },
    {
      src: 'images/cc2.jpg',
      altText: 'Video Lens',
      
    },
    {
      src: 'images/c3.jpg',
      altText: 'Pentax KP',
      
    },
    {
      src: 'images/c4.jpg',
      altText: 'EOS 1D X MARK III',
      
    }
  ];
  
  const CarouselComponent = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} width="100%" height="450vw" />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <React.Fragment>
      <Carousel className="px0"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <Products/>
      </React.Fragment>
    );
  }

  
  export default CarouselComponent;

  