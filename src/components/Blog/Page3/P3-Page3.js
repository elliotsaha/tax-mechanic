import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P3Page3() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Voluntary Disclosure Filing Rules Change! Revised Date March 1st</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="December 21, 2017" title="Lower your Tax Debt" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>So here we go taxpayers!!  Last chance to take advantage of the Voluntary Disclosure Program (VDP) as we know it. As it stands now the VDP can still be filed under the old rules. Simply, we can ensure that if after you speak with us prior to February 28th we will determine if you are eligible, and if you are we will start the process of filling your VDP so you can take advantage of the old rules. <br/>NOTE: VDP WILL NOT CHANGE NOW UNTIL MARCH 1st 2018 NOT JANUARY 1st.</p>
            <p>So what does that mean to you?</p>
            <p>Avoid paying interest and penalties that could be in the thousands of dollars. Have the tax professionals at Tax Mechanic represent you.</p>

            <p>Peace of mind. In the New Year even if you get a Notice of Assessment or call from the CRA you are protected.</p>

            <p>Get your life back. We understand how stressful this can be and we are here to help.</p>
            <p>Conditions required to qualify for VDP relief will change;</p> <br/>
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
            <p>The above list will certainly shrink come MARCH 2018 so don’t wait any longer.</p>
            <br/>
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
