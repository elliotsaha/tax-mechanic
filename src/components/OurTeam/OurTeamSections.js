import React from 'react'
import Button from "../Misc/Button/Button";
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import "../../Sass/OurTeam/OurTeam.scss";

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

export const Section2 = () => {
    const params = {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }
    return (
        <div className="S2">
        <Swiper {...params}>
            <div className="Slide">Slide #1</div>
            <div className="Slide">Slide #2</div>
            <div className="Slide">Slide #3</div>
            <div className="Slide">Slide #4</div>
            <div className="Slide">Slide #5</div>
        </Swiper>
        </div>
      
    )
  };

export function Section3() {
    
}