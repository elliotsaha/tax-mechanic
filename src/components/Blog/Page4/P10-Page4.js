import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
export default function P10Page4() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>If You Think The CRA Wouldn't Come After You, Think Again.</span>
                        <div className="ButtonContainerS1">
                        <Button className="Button" text="Book For a Free Consultation Today"/>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="May 4, 2017" title="If You Think The CRA Wouldn't Come After You, Think Again." subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            At the Tax Mechanic, we have listened to countless stories about individuals thinking that because the CRA hasn’t tracked them down yet, maybe they never will, or they are not claiming a few items that they didn’t report, so why bother now….and on and on. The fact is, maybe you avoided paying taxes up until now, but chances are as situations change in your life these items have a way to become a problem.
            <br/><br/>
            On April 11th the Minister of National Revenue, Diane Lebouthillier announced that the Government of Canada will invest over $444 million to enhance the Canada Revenue Agency’s (CRA) ability to detect, audit and prosecute tax evasion – both at home and abroad.
            <br/><br/>
            A quote from Minister Lebouthiller….
            <br/><br/>
            “Our government has promised Canadians a tax system that is fair and responsive to their needs. The unprecedented investment made in the CRA’s activates through Budget 2016 will fundamentally change our ability to identify and pursue both domestic and offshore tax evasion and avoidance. That means a tax system that is applied fairly to all and delivers real results.”
            <br/><br/>
            “Our government is working hard to give Canadians greater confidence that the tax system is fair to everyone. Those who hide income and assets offshore or try to evade or avoid paying the tax they owe will be identified and will face consequences.”
            <br/><br/>
            Some of the areas that will be improved:
            <ul>
                <li>Hiring additional auditors and specialists with a focus on the underground economy</li>
                <li>Developing a robust business intelligence infrastructure and risk international tax and abusive tax avoidance cases</li>
                <li>Improve the quality of investigative work that targets tax evaders.</li>
            </ul>
            <p>Whatever your circumstances we are here to help by providing you with professional representation, negotiation, tax filing and accounting services.</p>
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
