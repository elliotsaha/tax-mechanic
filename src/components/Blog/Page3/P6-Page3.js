import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P6Page3() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Tax Changes To Small Business Proposed By Liberals. Is This a Good Thing?</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="October 23, 2017" title="Tax Changes To Small Business Proposed By Liberals. Is This a Good Thing?" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            Well it has been an interesting week for the Liberal government and their apparent back peddling on tax reforms that have angered small business owners who have said the changes will only hurt the middle-class.
            <br/><br/>
            The Liberals said they are still sticking with their plans to restrict “income sprinkling” — the practice of transferring income from a business owner to a child or spouse who would be taxed at a lower rate. But they stressed they are not coming after family members who work for the business legitimately. Trudeau said there will be a “simple and clear” framework for families to follow. We shall see.
            <br/><br/>
            Regarding reducing small business taxes, it appears now that will happen. Bringing the rate down from 10.5% to 9% by 2019. Again, we shall see.
            <br/><br/>
            The federal government is moving to pare down its controversial tax proposal on passive income so that it will only affect three per cent of private corporations. A limit of $50,000 has been proposed but the devil is in the details. Legislation will be required to provide enforcement.
            <br/><br/>
            On passive income, the problem isn’t with individuals, but the system, since it encourages wealthy Canadians to keep their personal money inside their corporations so they can receive tax advantages not available to everyone else. These rules are long over due.
            <br/><br/>
            However, no changes have been proposed for the Voluntary Disclosure Program which will make it more difficult to qualify, particularly when you must pay all the outstanding tax as a prerequisite.
            <br/><br/>
            If you are thinking about making a disclosure, do it now.
            <br/><br/>
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
