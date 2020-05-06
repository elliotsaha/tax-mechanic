import React from 'react';
import "../../Sass/Homepage/HomepageSections/HomepageSections.scss";

export function Section1() {
    return (
        <div className="S1">
            <div className="ImgHolder">
                <img className="GradientS1" src="./img/Homepage/TopWork.jpg" alt="Homepage"/>
            </div>
            
            <div className="MainGridS1">
                <div className="FitGridS1">
                        <div className="SpanTagTextS1">
                            We Fix Your Tax <br /> Problems. 
                        </div>
                        <div className="ButtonS1">
                                <span className="Button">Book For a Free Consultation Today
                                </span>
                    </div>      
                </div>        
            </div>  
        </div>
    )
}


export function Section2() {
    return (
        <div className="S2">
            <div className="BodyS2">
                <span className="TitleS2">What Our Clients Say About Us.</span>
                <p>“I have had an excellent experience working with the Tax Mechanic to get my taxes under control. I had not filed for a number of years, and the guilt of not doing so was weighing me down. Fortunately after a quick call with David, one of the co-founders, everything was set up and dealt with quickly and professionally. I am so happy that they have taken care of my tax headache for me. I highly recommend their services!”
                </p>
                <hr />
                <p className="BradJS2">Brad J, Ontario</p>
                <span className="Button">Read More Testimonials</span>
            </div>  
        </div>
    )
}


export function Section3() {
    return (
        <div className="S3">
            <span>Our Services.</span>
            <p>Helping people and businesses with their accounting and tax issues is what we love to do at the Tax Mechanic.</p>
            <div className="GridS3">
                <div className="Service1S3">
                    <span className="TitleS3">
                        Consultation
                    </span>
                    <p className="ParaS3">Let’s talk! We’ll find out important information about your specific tax issues to find the best tax solution for you!</p>
                </div>
                <div className="Service2S3">
                    <span className="TitleS3">
                        Communication
                    </span>
                    <p className="ParaS3">The professional tax debt specialists in our network will speak with the CRA on your behalf. They will deal with the CRA collection calls.</p>
                </div>
                <div className="Service3S3">
                    <span className="TitleS3">
                        Compensation
                    </span>
                    <p className="ParaS3">Our experts know the ins and outs of the CRA. Through aggressive negotiations with the CRA, we’ll reach a settlement that’s within your financial means. </p>
                </div>
            </div>
            <span className="BottomHeader">No matter the issue, we can help.</span>
            <span className="Button">Read More About Our Services</span>
        </div>
    )
}


export function Section4() {
    return (
        <div>
            
        </div>
    )
}


export function Section5() {
    return (
        <div>
           
        </div>
    )
}


export function Section6() {
    return (
        <div>
            
        </div>
    )
}
