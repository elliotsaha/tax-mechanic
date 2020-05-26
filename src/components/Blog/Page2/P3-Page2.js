import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P3Page2() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>A tax article that could help change your life for the better</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="July 30, 2018" title="A tax article that could help change your life for the better" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            A number of months ago my business partner and tax expert, Fraser Simpson was featured in an article originally that ran in Money Sense and was picked up by Maclean’s. This article has been extremely helpful to those who have read it, so we thought it was time to share some of the highlights that could help if you have a current tax problem. Here are a couple of highlights…. 
            </p>
            <span>Why people put off filing tax returns?</span>
            <p>
            Once someone skips one year they tend to skip a second year and before you know it five years pass by. But with today’s sophisticated technology the CRA is ramping up its search and is going after tax money and taxpayers everywhere.
            </p>
            <span>Who are the most likely not to file?</span>
            <p>The self-employed who have no T4 slip, often let tax reporting slide off their pates. Either they get to busy or they won’t have the money to pay the taxes they owe. Tax debts can easily snowball. The good news is tax professionals often approach the CRA on your behalf and set up a manageable payment plan.
            <br/><br/>
            Other questions that were posed to Fraser in the article:
            </p>
            <span>So what should I do to file overdue tax returns without penalty?</span>
            <br/><br/>
            <span>Can you give us an example of what those penalties would be?</span>
            <br/><br/>
            <span>Can taxpayers do this themselves?</span>
            <br/><br/>
            <span>When does it really become a problem?</span>
            <br/><br/>
            <span>But isn’t it true that the CRA can’t go back more than three years to get tax they’re owed?</span>
            <br/><br/>
            <span>What should taxpayers know about payment plans?</span>
            <br/><br/>
            <span>What is a ‘notional assessment’ and where does it happen?</span>
            <br/><br/>
            <p>To get answers read complete article go to Maclean’s</p>
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
