import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P5Page4() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>New CRA Rules Regarding The Voluntary Disclosure Program To Start January 1, 2018</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="July 17, 2017" title="New CRA Rules Regarding The Voluntary Disclosure Program To Start January 1, 2018" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            Since the launch of Voluntary Disclosure Program (VDP) we have been able to help many individuals dealing with a variety of different financial and personal challenges to navigate their way through this program and successfully accomplish getting their taxes up to date.
            <br/><br/>
            To encourage individuals to become compliant this program was created by CRA and currently has benefits such as not having to file or pay for any back taxes for 90 days giving the taxpayer time to have these returns properly prepared and submitted, for the years that were not filed.  However, coming this January the rules for this program will be changing dramatically making it, according to CRA, a “fairer system”. In reality it will make it more difficult on the taxpayer both in registering for this program and if needed negotiating a payment arrangement needed to pay off a tax debt.
            <br/><br/>
            Revenue Canada looking for non-filers using updated technology, backed by new powers provided by Trudeau.
            <br/><br/>
            The proposed “draft” Information Circular (we fairly certain it is a done deal!) is now out on the new VDP rules.
            <br/><br/>
            The taxpayer must include payment of the estimated tax owing with their VDP application.
            <br/><br/>
            When the taxpayer does not have the ability to make payment of the estimated tax owing, a payment arrangement supported by adequate security may be considered in extraordinary circumstances with approval from the CRA Collections officials. In these circumstances, the taxpayer must make full disclosure and provide evidence of income, expenses, assets, and liabilities supporting the inability to make payment in full.
            <br/><br/>
            If an application is made prior to December 31, 2017 payment is not required.
            <br/><br/>
            Revenue Canada will continue to go after non-filers and with the improvement of the tools, technics and technologies being used they will eventually caught up to you.
            <br/><br/>
            If you have not filed your taxes in a few years or longer let us help you.
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
