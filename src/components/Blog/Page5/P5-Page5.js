import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P5Page5() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>A Tax Horror Story With A Happy Ending.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="February 28, 2017" title="What Are My Chances Of a Tax Audit" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            That’s not something CRA discloses. But chances of an audit are far better than most lotteries, because targeting suspicious cases pulls in billions of extra dollars annually. CRA estimates 12.2 per cent of small businesses do not comply with tax law, and nearly half of those it targets for audits. Audits are almost a sure thing if a former spouse, employee, tenant, competitor, or customer calls the CRA’s informant lead centre (1-866-809-6841).
            <br/><br/>
            “People think they only have a three-year window when tax returns can be checked, but in case of fraud there is no statute-barred exemption,” says Katz. 
            </p>
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
