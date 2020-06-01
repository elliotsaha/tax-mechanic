import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P6Page4() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Tax Tips For AirBNB Owners And Uber Drivers</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="July 1, 2017" title="Changes To The Voluntary Disclosure Program Coming. Time Is Now To File" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            If you have not filed your taxes in a couple of years (or more) or ever omitted some income from your tax return, you may be interested in proposed changes announced last week to the Canada Revenue Agency’s Voluntary Disclosure Program (VDP). The VDP allows taxpayers to voluntarily come forward and file previous tax returns or correct previous tax filing errors without penalty or fear of prosecution. The tax would still be owing with interest; however, penalties and interest would be waived.
            <br/><br/>
            The proposed changes to the VDP were introduced back in October 2016, when the House of Commons Standing Committee on Finance, recommended that the CRA undertake a comprehensive review of the VDP. In December 2016, the committee concluded that the VDP could be made “more effective and fairer.” Proposals included a framework for tightening the criteria to be accepted into the program.
            <br/><br/>
            The CRA is expected to announce formal changes to the VDP in the fall of 2017. Any changes would be effective Jan. 1, 2018.
            <br/><br/>
            What does this mean for you?
            <br/><br/>
            Here's why;
            </p>
            <ul>
                <li>The existing rules essentially make it easy to qualify for a penalty waiver and associated interest.</li>
                <li>As the new rules are formed in the fall, the CRA may stall applications till the new year when the new rules come into force.</li>
                <li>The new rules will make it harder to qualify.</li>
                <li>The summer is the best time to file overdue taxes as the CRA reports to the government in October  and they want to show good numbers; i.e. collected tax from overdue returns.</li>
            </ul>
            <p>Changes include: requiring the payment of the estimated taxes owing as a condition of qualifying for the program. Currently, you do not have to pay anything, just report and make a payment arrangement.</p>
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
