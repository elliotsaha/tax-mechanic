import React from 'react'
import Button from "../Misc/Button/Button";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

export function Section1() {
    return (
        <div className="S1">
            <img className="GradientS1Mobile" src="./img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="./img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
            <div className="S1TextContainer">
                <div className="S1Text">
                    <span>Our Team.</span>
                    <div className="ButtonContainerS1">
                        <Button className="Button" text="Book For a Free Consultation Today"/>
                    </div>
                </div>
            </div>
        </div>      
    )
}

export class Section2 extends React.Component {
    constructor(props) {
      super(props)
      this.breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 1200, itemsToShow: 3, itemsToScroll: 3}
      ]
    }
    render() {
      return (
        <Carousel breakPoints={this.breakPoints} className="CarouselContainer">
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
        </Carousel>
      )
    }
  }

export function Section3() {
    
}