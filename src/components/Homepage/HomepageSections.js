import React from 'react';
import "../../Sass/Homepage/HomepageSections/HomepageSections.scss";
import Button from "../Misc/Button/Button";

// Section 1
export function Section1() {
    return (
        <div className="S1">
            <img className="GradientS1" src="./img/Homepage/TopWork.jpg" width="100%" alt="Homepage"/>
            <div className="S1TextContainer">
                <div className="S1Text">
                    <span>We Fix Your Tax <br /> Problems. </span>
                    <div>
                        <Button text="Book For a Free Consultation Today"/>
                    </div>
                </div>
            </div>
        </div>      
    )
}

// Section 2
export function Section2() {
    return (
        <div className="S2">
            <div className="BodyS2">
                <span className="TitleS2">What Our Clients Say About Us.</span>
                <p>“I have had an excellent experience working with the Tax Mechanic to get my taxes under control. I had not filed for a number of years, and the guilt of not doing so was weighing me down. Fortunately after a quick call with David, one of the co-founders, everything was set up and dealt with quickly and professionally. I am so happy that they have taken care of my tax headache for me. I highly recommend their services!”
                </p>
                <hr />
                <p className="BradJS2">Brad J, Ontario</p>
                <div className="ButtonContainerS2">
                    <span className="Button">Read More Testimonials
                    &#8594;</span>
                </div>
                
            </div>  
        </div>
    )
}

// Section 3
export function Section3() {
    return (
        <div className="S3">
                <span className="TopTagSpanS3">Our Services.</span>
                <p className="TopTagPS3">Helping people and businesses with their accounting and tax issues<br/>is what we love to do at the Tax Mechanic.</p> 
                <div className="Service1S3">
                    <div className="ServiceTextS3">
                        <span className="TitleS3">
                        Consultation
                        </span>
                        <p className="MoveRight">Let’s talk! We’ll find out important information about your specific tax issues to find the best tax solution for you!</p>
                    </div>

                    
                </div>
                <div className="Service2S3">
                <div className="ServiceTextS3">
                    <span className="TitleS3">
                        Communication
                    </span>
                    <p className="ParaS3">The professional tax debt specialists in our network will speak with the CRA on your behalf. They will deal with the CRA collection calls.</p>
                </div>
                </div>
                <div className="Service3S3">
                <div className="ServiceTextS3">
                    <span className="TitleS3">
                        Compensation
                    </span>
                    <p className="MoveUp">Our experts know the ins and outs of the CRA. Through aggressive negotiations with the CRA, we’ll reach a settlement that’s within your financial means. </p>
                </div>
                </div>
            <span className="BottomHeader">No matter the issue, we can help.</span>
            <div className="ButtonContainer">
                <span className="Button">Read More About Our Services
                &#8594;</span>
            </div>
            <img src="./img/Homepage/BlueWork.jpg"/>
        </div>
    )
}

// Section 4
export function Section4() {
    return (
        <div className="S4">
            <span className="TitleS4">Our Team.</span>
            <img className="Img1S4" src="./img/Homepage/Fraser.jpg"/>
            <div className="Img2S4Container">
                <img className="Img2S4" src="./img/Homepage/David.jpg" />
            </div>
            
            
            
            <span className="FraserTitle">Fraser Simpson</span>
            <p className="FraserPara">Founder of Tax Mechanic, Simpson has been active in income tax consulting, residential and commercial real estate development since 1985. Mr. Simpson obtained his Bachelor of Arts degree.</p>
            <span className="DavidTitle">David Harris</span>
            <p className="DavidPara">Parter at the Tax Mechanic, Harris’s extensive <br />background in sales, marketing and construction <br />operations management are an asset at The Tax Mechanic.</p>
            <div className="ButtonContainerS4">
                <span className="Button">Read More About Our Team
                &#8594;</span> 
            </div>

            
        </div>
    )
}

// Section 5
export function Section5() {
    return (
        <div className="S5">
            <span>Who We Are.</span>
            <img src="./img/Homepage/City.jpg"/>
        </div>
    )
}

// Section 6
export function Section6() {
    return (
        <div className="S6">
            <div className="TopS6">
            <p className="p1S6"> 
                Location <br />
                180 John Street <br />
                Toronto, ON <br />
                M5T 1X5 <br />
            </p>

            <p className="p2S6">TEL: 647-499-5693 <br/>
            FAX: 647-494-0169</p>

            <p className="p3S6">Email: <br/>david@taxmechanic.ca
            </p>
            <div className="img4S6Container">
                <img src="./img/TaxMechanicLogo.png"/>
            </div>
           
        </div>
        <div className="ButtonContainer">
            <span className="Button">&copy;
            2020 Tax Filing Services Toronto – Taxmechanic.ca. All Rights Reserved.
            </span>
        </div>
        
        </div>
    )
}
