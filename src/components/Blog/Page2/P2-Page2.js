import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P2Page2() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Lower your Tax Debt</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="October 23, 2018" title="Lower your Tax Debt" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            The math is simple. The more money you make, the more taxes you pay.
            <br/><br/>
            For the nation’s highest-income earners – those making more than $220,000 annually – the amount going to the tax man is significant. Some are left with less than 50 cents on the dollar of what they earn, depending on where they live in Canada.
            <br/><br/>
            It is the right of Canadians of all income levels to arrange their affairs – within the framework of the law – to take advantage of all the tax strategies available.
            <br/><br/>
            These tax strategies can provide the most tax-savings bang for incoming bucks, especially for those of high net worth.    
            </p>
            <span>Make a loan to your spouse</span>
            <p>
            To reduce the impact of tax on passive income from investments, couples can spread the wealth around using a loan, whereby a high-income spouse lends money to the low-income spouse for investment purposes.
            <br/><br/>
            While it’s tempting to imagine the wealthy hiding their money offshore to shelter it from Canadian taxes, the real – and legal – tax shelters exist in plain sight. Among them are registered retirement savings plans (RRSPs), registered education savings plans (RESPs), registered disability savings plans (RDSPs, for families with loved ones with disabilities) and even tax-free savings accounts (TFSAs). And they’re available to all Canadians, wealthy or not.
            <br/><br/>
            It’s just that high-income earners have more cash available to put in these vehicles. The RRSP is the go-to account, allowing deferral of taxes owing on contributed income today until retirement when, presumably, that money would be withdrawn at a lower tax rate.
            </p>
            <span>Earn credit for charitable donations</span>
            <p>
            For wealthy individuals, donations can help reduce taxes, thanks to a credit (applicable only against taxes owing or paid) that becomes more meaningful beyond gifts of $200 a year.
            <br/><br/>
            Generally speaking, the credit almost doubles from 15 per cent in tax savings for every dollar donated (up to $200) to 33 cents on the dollar for money donated above that amount. With provincial credits, the tax savings are even higher.
            <br/><br/>
            Wealthy individuals and families often donate larger amounts, resulting in significant tax savings.
            <br/><br/>
            Ideally, large donation credits are claimed in high-income years because the annual donation limit is tied to the income for the year of the taxpayer, or the taxpayer’s estate for deceased individuals.
            <br/><br/>
            Tax shelters and corporate tax reorganization
            <br/><br/>
            We have provided tax consulting to Canada’s wealthy, including John Di Poce of Alpa Lumber. We have setup time shares offshore, invested in oil and gas tax shelters and purchased partnerships and tax loss companies for huge tax savings.  
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
