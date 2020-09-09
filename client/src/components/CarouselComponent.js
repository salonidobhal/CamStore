import React, { Component } from 'react'
import { items }from '../data/items';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

class CarouselComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            activeIndex: 0,
            setActiveIndex: 0,
            animating: false,
            setAnimating: false,
        }

        this.next= this.next.bind(this);
        this.previous= this.previous.bind(this);
        this.goToIndex= this.goToIndex.bind(this);
        
    }

    next(){
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        
      }

    
      
      previous(){
        if (this.state.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({
            setActiveIndex: nextIndex
        })
      }
    
      goToIndex(newIndex){
        if (this.state.animating) return;
        this.setState({
            setActiveIndex: newIndex
        })}
    
      
    render() {
      const slides= items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => this.state.setAnimating(true)}
            onExited={() => this.state.setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      });

        return (
            <Carousel
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={this.state.activeIndex} onClickHandler={this.goToIndex} />
        {this.slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
        )
    }
}
  export default CarouselComponent;