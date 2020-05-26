import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P5Page3() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>What Is The Penalty For Filing Taxes Late in Canada</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="November 7, 2017 " title="What Is The Penalty For Filing Taxes Late in Canada" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            For most Canadians filing taxes on time is a must. But sometimes life throws you a curve ball, or two. That means a tax debt that can eat into your savings account. For most, a tax debt and the resulting CRA penalties and interest are overwhelming and feared. But a plan actioned with experienced help can put you back on the track and tax compliance. We have done it many times for taxpayers and it is with great pride that we see the relief provided hard working, honest Canadian families.
            <br/><br/>
            To help those who are fearful of a tax debt prepare for their assessment and payment, here is a breakdown of CRA penalties and interest.
            </p>
            <br/><br/>
            <span>Interest</span>
            <p>If, after filing, you owe a tax debt, the Canada Revenue Agency will charge compound daily interest on that amount starting on May 1. Additionally, they will charge interest on the penalties incurred starting the day after your return is due. The rate of interest charged by the CRA changes evry quarter and is varied by the T-Bill rate. Currently the interest rate is 5%. If you have a tax debt owing from previous years, the CRA will continue to charge compound daily interest on that amount, and any payments that you make will be applied to those amounts first.</p>
            <br/><br/>
            <span>Late-filing penalty</span>
            <p>The tax filing deadline for the 2017 tax year is April 30, 2018. This means that anything filed after this date is considered late. If you owe a tax debt, you’ll be penalized for your lateness. How much? If you owe taxes for 2017 and don’t file on time, you can expect a penalty of 5% of your 2017 balance owing, plus 1% of your balance owing for each full month your return is late, to a maximum of 12 months.
            <br/><br/>
            Also, if you’re a repeat offender and received a late-filing penalty on your return for 2014, 5, or 2016 you may be looking at a late-filing penalty for 2017 of 10% of your 2017 balance owing, plus 2% of your 2017 balance owing for each full month your return is late, to a maximum of 20 months.</p>
            <span>Repeated failure to report income penalty</span>
            <p>
            If you failed to accurately report your income ($500 or more for a tax year) this will be considered a failure to report income and you can also face a penalty. If you failed to report an amount on your return for 2016 and you also failed to report an amount on your return for 2013, 2014, or 2015, you may find a repeated failure to report income penalty tacked on.
            <br/><br/>
            As a result of the proposed changes, the federal and provincial or territorial penalties are each equal to the lesser of:  
            </p>
            <ul>
                <li>10% of the amount you failed to report on your return for 2016; and</li>
                <li>50% of the difference between the understated tax (and/or overstated credits) related to the amount you failed to report and the amount of tax withheld related to the amount you failed to report.</li>
            </ul>
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
