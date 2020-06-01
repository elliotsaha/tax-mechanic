import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P8Page2() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>If you have not filed your taxes in over 5 years – read this!</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="May 19, 2020" title="If you have not filed your taxes in over 5 years – read this!" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <ul>
                <li>Same Day Action.  Your Quick Solution & Result.</li>
                <li>Expert help to Minimise Your Tax Risks</li>
                <li>Eliminate Late Filing Penalty & Interest</li>
                <li>Simple & Affordable Flat Fees</li>
                <li>Get Help Anytime 24/7 – Free consultation</li>
            </ul> <br/>
            <span>Voluntary Disclosure – New Rules</span>
            <p style={{fontWeight: "600"}}>Payment of taxes past due</p>
            <p>The taxpayer must include payment of the estimated tax owing with their VDP application.
            <br/><br/>
            When the taxpayer does not have the ability to make payment of the estimated tax owing at the time of the VDP application, they may request to be considered for a payment arrangement subject to approval from CRA Collections officials. The taxpayer will have to make full disclosure and provide evidence of income, expenses, assets, and liabilities supporting the inability to make payment in full. In some cases, the payment arrangement will need to be supported by adequate security. If you need to make a payment arrangement you should strongly consider professional help.</p>
            <p>
            <p style={{fontWeight: "600"}}>Limited Period</p>
            <p>The Minister’s ability to grant penalty relief is limited to any penalty that could apply to any taxation year that ended within the previous 10 years before the calendar year in which the application is filed.
            <br /><br/>
            The Minister’s ability to grant interest relief is limited to the interest that accrued during the 10 previous calendar years before the calendar year in which the application is filed. This is the case regardless of the taxation year (or fiscal period) in which the tax debt arose.</p>
            <p style={{fontWeight: "600"}}>Circumstances Where Relief May be Considered</p>
            <p>Relief under the VDP may be considered if a taxpayer:</p>
            <li>failed to fulfill their obligations under the ITA,</li>
            <li>failed to report any taxable income they received,</li>
            <li>claimed ineligible expenses on a tax return,</li>
            <li>failed to remit source deductions of their employees,</li>
            <li>failed to file information returns, or</li>
            <li>failed to report foreign sourced income that is taxable in Canada.</li>
            <br/><br/>
            <p style={{fontWeight: "600"}}>Pre-Disclosure Discussion</p>
            <ul>
                <li>Taxpayers who are unsure if they want to proceed with an application are given an opportunity to participate in preliminary discussions about their situation on an anonymous basis to get insight into the VDP process, a better understanding of the risks involved in remaining non-compliant, and the relief available under the VDP. These discussions with a CRA official are for the benefit of the taxpayer; they are informal, non-binding, and may occur before the identity of the taxpayer is revealed.  For complex technical reporting issues or questions, taxpayers will be referred to a CRA official in a specialized audit area to discuss their situation on an anonymous basis.
                </li>
                <li>
                These discussions do not constitute acceptance into the VDP and have no impact on CRA’s ability to audit, penalize, or refer a case for criminal prosecution.  
                </li>
            </ul>
            <p>Federal Budget</p>
            <p>The government will invest $90.6 million over the next five years to combat tax avoidance.</p>
            <p>If you have not filed past due taxes call us now!</p>
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
