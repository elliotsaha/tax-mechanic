import React from 'react'
import Button from "../Misc/Button/Button";

export function Section1() {
    return (
        <div className="S1">
            <img className="GradientS1Mobile" src="./img/Homepage/MobileTopWork.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="./img/Homepage/TopWork.jpg" width="100%" alt="Homepage"/>
            <div className="S1TextContainer">
                <div className="S1Text">
                    <span>We Fix Your Tax <br /> Problems. </span>
                    <div className="ButtonContainerS1">
                        <Button className="Button" text="Book For a Free Consultation Today"/>
                    </div>
                </div>
            </div>
        </div>      
    )
}