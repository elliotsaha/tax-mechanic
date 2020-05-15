import React from 'react';
import "../../Sass/Homepage/HomepageSections/HomepageSections.scss";
import Button from "../Misc/Button/Button";
import Service from "../Misc/Service/Service";

// Section 1
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

// Section 2
export function Section2() {
    return (
        <div className="S2">
            <div className="BodyS2">
                <span className="TitleS2">What Our Clients Say About Us.</span>
                <p className="S2Para">“I have had an excellent experience working with the Tax Mechanic to get my taxes under control. I had not filed for a number of years, and the guilt of not doing so was weighing me down. Fortunately after a quick call with David, one of the co-founders, everything was set up and dealt with quickly and professionally. I am so happy that they have taken care of my tax headache for me. I highly recommend their services!”
                </p>
                <hr />
                <p className="BradJS2">Brad J, Ontario</p>
                <div className="ButtonContainerS2">
                    
                        <Button text="Read More Testimonials"/>
                    
                </div>
                
            </div>  
        </div>
    )
}

// Section 3
export function Section3() {
    return (
        <div className="S3">
                <div className="S3TopText">
                    <span className="TopTagSpanS3">Our Services.</span>
                    <p className="TopTagPS3">Helping people and businesses with their accounting and tax issues<br/>is what we love to do at the Tax Mechanic.</p>
                    <p className="TopTagPS3Mobile">Helping people and businesses with their accounting and tax issues is what we love to do at the Tax Mechanic.</p>     
                </div>
                     <div className="Service1">
                    <Service title="Consultation" text="Let’s talk! We’ll find out important information about your specific tax issues to find the best tax solution for you!"/>
                    </div>
                    <div className="Service2">
                     <Service title="Communication" text="The professional tax debt specialists in our network will speak with the CRA on your behalf. They will deal with the CRA collection calls." />
                    </div>
                    <div className="Service3">
                    <Service title="Compensation" text="Our experts know the ins and outs of the CRA. Through aggressive negotiations with the CRA, we’ll reach a settlement that’s within your financial means. " />
                    </div>  
               
            <span className="BottomHeader">No matter the issue, we can help.</span>
            <div className="ButtonContainer">
                <Button className="Button" text="Read More About Our Services"/>
            </div>
            <img src="./img/Homepage/BlueWork.jpg" className="DesktopViewImg" alt="Work"/>
            <img src="./img/Homepage/Notepad.png" className="MobileViewImg" alt="Work"/>
        </div>
    )
}

// Section 4
export function Section4() {
    return (
        <div className="S4">
            <div className="S4Container">
                <span className="TitleS4">Our Team.</span>

            <div className="Img1S4Container">
                <img className="Img1S4" src="./img/Homepage/Fraser.png" alt="Fraser -- Team"/>
            </div>
            
            <div className="Img2S4Container">
                <img className="Img2S4" src="./img/Homepage/David.png" alt="David -- Team" />
            </div>
            
            <div className="FraserText">
                <span className="FraserTitle">Fraser Simpson</span>
                <div className="FraserParaContainer">
                    <p className="FraserPara">Founder of Tax Mechanic, Simpson has been active in income tax consulting, residential and commercial real estate development since 1985.</p>
                </div>  
            </div>
            
            <div className="DavidText">
                <span className="DavidTitle">David Harris</span>
                <div className="DavidParaContainer">
                    <p className="DavidPara">Parter at the Tax Mechanic, Harris’s extensive background in sales, marketing and construction operations management are an asset at The Tax Mechanic.</p>
                </div>
                
            </div>
            
            <div className="ButtonContainerS4">
                <Button className="Button" text="Read More About Our Team"/>
            </div>
            </div>
            

            
        </div>
    )
}

// Section 5
export function Section5() {
    return (
        <div className="S5">
            <div className="SpanContainerS5">
                <span>Who We Are.</span>
            </div>
                <div className="VideoS5" align="middle">
                    <iframe title="Who We Are." src="https://www.youtube.com/embed/qDBXEAvlItE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>
            </div>
            <img className="MobileImgViewS5" src="./img/Homepage/MobileVideoSection.png" alt="Plants"/>
            <img className="PCImgViewS5" src="./img/Homepage/City.jpg" alt="City"/>
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
                <img src="./img/TaxMechanicLogo.png" alt="Logo"/>
            </div>
           
        </div>
        <div className="ButtonContainer">
            <span
            >&copy;
            2020 Tax Filing Services Toronto – Taxmechanic.ca. All Rights Reserved.</span>
        </div>
        
        </div>
    )
}
