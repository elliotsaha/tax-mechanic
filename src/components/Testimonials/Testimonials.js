import React from 'react'
import Button from "../Misc/Button/Button";
import "../../Sass/Testimonials/Testimonials.scss";
import { Link } from "react-router-dom";
export default function Testimonials() {
    return (
        <div>
             <div className="TestimonialsS1">
            <img className="GradientS1Mobile" src="/img/Testimonials/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Testimonials/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span>Testimonials.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className="TestimonialsS2">
                    <p>“You guys have saved me and family. It’s no joke. You guys have brought so much peace to me. I will never go anywhere else now that I have had the pleasure of working with you. I STRONGLY recommend these fantastic people to handle all your accounting needs. Thank you thank you thank you!!”</p>
                    <hr />
                    <span>Michelle O. – Ontario</span>
                    <p>“I have had an excellent experience working with the Tax Mechanic to get my taxes under control. I had not filed for a number of years, and the guilt of not doing so was weighing me down. Fortunately after a quick call with David, one of the co-founders, everything was set up and dealt with quickly and professionally. I am so happy that they have taken care of my tax headache for me. I highly recommend their services!”</p>
                    <hr />
                    <span>Brad J. – Ontario</span>
                    <p>“I have used Tax Mechanic for 3 years now and they are fantastic. the process is easy, and I had an unusual situation that resulted in a late filing. they worked with me, and delivered as promised. When CRA assessed at a different result, they stood behind the filing and the final assessment was as they claimed. I will definitely continue to use them for tax purposes.”</p>
                    <hr />
                    <span>Mike B. – Ontario</span>
                    <p>“I had a tax problem that caused considerable stress. To deal with this, I contacted many tax accountants and other professionals. I found them unhelpful, not understanding to my situation and in some cases deceitful. Thankfully, I found Mr. David Harris and Mr. Fraser Simpson at the Tax Mechanic and they were the opposite of what the others provided. They provided an affordable pricing plan and were very professional and above all honest. All of my concerns were addressed and they fixed my problem. If you have tax issues, please look no further than the Tax Mechanic.”</p>
                    <hr />
                    <span>Tim R. – Alberta</span>
                    <p>“Tax Mechanic is the REAL DEAL!
                        I cannot thank Fraser Simpson, David Harris, Moneeba Tanweer & ALL the staff at Tax Mechanic for the outstanding, stress free, professional job they have done filing many tax returns of mine!
                        Got myself in a bit of a bind with the CRA & through fast responsive meetings, phone calls & texts my CRA situation was addressed & handled quick with an unbelievable outcome satisfactory to all.
                        I would highly recommend TAX MECHANIC to everyone!
                        Thank you once again!!"</p>
                    <hr />
                    <span>Mark M. – Ontario</span>
                </div>
        </div>
    )
}
