import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P9Page3() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Lower your Tax Debt</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="September 11, 2017" title="New Rules About Leveling The Playing: Liberal Taking Aim At Voluntary Disclosures" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            Over the past 15 years, we have seen big changes in our economy. The number of Canadian-controlled private corporations (CCPCs) has increased by 50 per cent and makes up a much bigger part of our economy than they did in the early 2000s. For professionals, the number of corporations has tripled over that same period.
            <br/><br/>
            The average income in Canada is estimated to be about $49,000 this year. An incorporated professional earning $300,000 with a spouse and two adult children can save about $48,000 in taxes by using just one of these loopholes. What that means is an incorporated professional could be taxed at a lower rate than a salaried nurse practitioner or police officer making much less a year.
            <br/><br/>
            At the heart of these proposals is the Liberals promise to the middle class, and a belief that every Canadian should feel confident that they have the same opportunity to succeed and benefit from a growing economy. That confidence starts with knowing everyone is treated fairly.
            <br/>
            <p>Circumstances Under Which VDP Relief May be Granted Will Change;</p>
            <p>Currently relief from penalty and prosecution, as provided for under the VDP, may be considered if a taxpayer:</p>
            <ul>
            <li>failed to fulfill their obligations under the applicable act,</li>
                <li>failed to report any taxable income they received,</li>
                <li>claimed ineligible expenses on a tax return,</li>
                <li>failed to remit source deductions of their employees,</li>
                <li>failed to report an amount of GST/HST, (which may include undisclosed liabilities or improperly claimed refunds or rebates, </li>
                <li>unpaid tax or net tax from a previous reporting period),</li>
                <li>failed to file information returns, and</li>
                <li>failed to report foreign sourced income that is taxable in Canada.</li>
            </ul>
            <p>This list will certainly shrink come January 2018</p>
            <p>If you are considering filing an application under the Voluntary Disclosure Program, do it now BEFORE the rules change.</p>
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
