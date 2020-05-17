import React from 'react'
import Button from "../Misc/Button/Button";

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

export function Section2() {

}

export function Section3() {
    
}