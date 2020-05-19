import React, { useState, useEffect, Component } from 'react'
import Button from "../Misc/Button/Button";
import "../../Sass/OurTeam/OurTeam.scss";
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
//Firebase Backend 
import firebase from "../../firebase/index";


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

export class Section2 extends Component{
  componentDidMount(){
    this.swiper=new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
    //add necessary parameters required by checking the offical docs of swiper
    }
    render(){
        return(
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"></div>
                    <div className="swiper-slide"></div>
                    <div className="swiper-slide"></div>
                    <div className="swiper-slide"></div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>)
    }
}


export class Section3 extends React.Component {
  
}