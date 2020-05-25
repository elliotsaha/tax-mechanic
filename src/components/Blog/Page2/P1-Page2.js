import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
export default function P1Page2() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>The CRA is on the warpath!!</span>
                        <div className="ButtonContainerS1">
                        <Button className="Button" text="Book For a Free Consultation Today"/>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="December 29, 2018" title="The CRA is on the warpath!!" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            In its continued campaign to monitor what it called “compliance risks” in Canada’s hottest housing markets, the Canada Revenue Agency has uncovered nearly $600 million in unpaid taxes in the British Columbia and Ontario real estate segments.
            <br/><br/>
            CRA auditors, which have been closely examining real estate transactions since 2015, found that the B.C. market has $169 million in unpaid taxes from home sales, while Ontario has $423 million.
            <br/><br/>
            The federal bureau further noted that in B.C., 54% of the unpaid amount was due to buyers not paying the GST, while 45% was from income tax. In Ontario, fully 90% of the unpaid taxes represented GST.
            <br/><br/>
            The CRA stated that it is keeping a particularly close eye at the factors that tend to indicate tax evasion, such as unreported GST, capital gains, or worldwide income, as well as property flipping and questionable sources of funding for purchases.
            <br/><br/>
            Fraser Simpson, one of Canada’s leading tax authorities, offers solutions to tax problems using the Voluntary Disclosure Program, Tax Court hearings, and Taxpayer Relief Provisions under the Income Tax Act.
            <br/><br/>
            Whether it is business or personal tax issues the Tax Mechanic is here to help you. We offer a FREE 30-minute consultation and with over 30 years of professional tax filing and negotiation experience we can work with you to get your life back!
            </p>
            <br/><br/>
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
