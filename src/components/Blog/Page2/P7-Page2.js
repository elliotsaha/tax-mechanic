import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P7Page2() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Summer Is Here! But Your Bank Account Might Still Be Frozen</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="May 28, 2018" title="Summer Is Here! But Your Bank Account Might Still Be Frozen" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            Last month we were contacted by Jason and Carol from Alberta. They own a business that has 25 employees, and over the years the company had done very well. A few years ago some health and personal issues changed things significantly. Tax and GST returns were not filed and before they new it the CRA had frozen their bank accounts. The business, their livelihood and their employee’s jobs were in serious jeopardy.
            <br/><br/>
            Every week we speak to individuals like Jason and Carol who have had their bank accounts frozen by Revenue Canada. Many know how they got to that point, and usually it is a series of phone calls and letters from the CRA. There are basically four key stages.
            </p>
            <span>Stage One</span>
            <p>you will be notified in writing that an amount is owing. At this point it is a good time to call us. This initial escalation it is not yet reached the “FROZEN BANK ACCOUNT” stage and this letter in many cases might just be ignored… we strongly recommend to not ignore it and talk to us. Remember even if you disagree with the amount interest and penalties will continue to rise.</p>
            <span>Stage Two</span>
            <p>
            you will be sent another letter that will be much more demanding that you pay the amount owning. Again many ignore this letter too, thinking maybe this will just go away. Trust us, they will not go away.
            </p>
            <span>Stage Three</span>
            <p>
            you might receive a phone call from a CRA agent usually at this stage it is now in collections….NOT GOOD!! …and if you continue to ignore it, comes to the final stage.
            </p>
            <span>Stage Four</span>
            <p>a requirement to pay letter is sent to your bank, requiring the bank to freeze your bank account. If you are employed your employer might receive a requirement to garnish your wages. This no doubt will be a red flag with your employer. The bank institution you have been dealing with perhaps for years could be severely damaged.</p>
            <p>
            <span>Contact</span>
            <br/>
            I have successfully filed hundreds of VDP applications with a 100% success rate!
            <br/>
            If you have any questions about the process you can contact;
            <br/><br/>
            Tax Mechanic<br/>
            180 John St<br/>
            Toronto, ON<br/>
            M5T 1X5<br/>
            taxmechanic.ca<br/>
            647-499-5693<br/>
            david@taxmechanic.ca<br/>
            </p>
            </div>
            }/>
        </div>
    )
}
