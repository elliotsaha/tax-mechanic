import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P1() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Artificial Intelligence and the CRA</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="January 29, 2019" title="Artificial Intelligence and the CRA" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>The Justice Department has quietly launched an artificial intelligence experiment as the Trudeau government prepares to use such sophisticated software to help make decisions in cases involving immigration, pension benefits and taxes.</p>
            <p>The 18-month pilot project, which involves the Canada Revenue Agency, was started even though the government has yet to establish clear ethical guidelines on its use of artificial intelligence, or AI.</p>
            <p>The pilot project uses the software program Tax Foresight, developed last year by Toronto-based tech start-up Blue J Legal Inc.</p>
            <p>The Canada Revenue Agency (CRA) is stepping up its use of “big data” as part of its broader efforts to combat offshore tax evasion, Diane Lebouthillier, minister of national revenue, said in a statement published in February 2018.</p>
            <p>In response, the CRA says it is developing predictive analytics using machine learning “to identify potential areas of non-compliance by discovering unseen patterns in data.”</p>
            <p>The agency also says it is developing new data models to identify high-risk taxpayers, and using social network analysis to automate the identification of links between individuals and businesses. Last year, the CRA began using data about households in wealthy neighbourhoods “in a more systematic way to conduct in-depth risk assessments and initiate audits,” the agency says.</p>
            <p>Bottom line is if you are behind on your taxes and Revenue Canada has not tried contacting you, they will, it is only a matter of time.</p> <br/><br/>
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
