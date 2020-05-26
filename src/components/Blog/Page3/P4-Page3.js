import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
export default function P4Page3() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>What Do You Do? PayPal Has Been Ordered To Hand It Over!</span>
                        <div className="ButtonContainerS1">
                        <Button className="Button" text="Book For a Free Consultation Today"/>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="November 16, 2017" title="What Do You Do? PayPal Has Been Ordered To Hand It Over!" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            So, this sure could change a taxpayer’s view about what to do about their taxes. The Canada Revenue Agency has order PayPal, the online payments company, to hand over information about its Canadian business account holders.
            <br/><br/>
            On the PayPal website it states it has been served with a Federal Court order to disclose information within 45 days to the Canadian tax-collecting agency identifying account holders and describing the amount and number of payments sent or received between Jan. 1, 2014, and last Friday.
            <br/><br/>
            The spokesman for CRA, Patrick Samson says the agency has requested the information to ensure that these individuals and corporations comply with their tax obligations under the Income Tax Act.
            <br/><br/>
            He says it’s part of a stepped-up campaign to use third-party data to detect unreported economic activity and identify individuals and businesses that do not file tax returns.
            <br/><br/>
            PayPal says it has notified the account holders, adding the order applies even if the business account has been closed. So what can you do about it? Call us! The Voluntary Disclosure Program could be a way to help resolve some of the concerns you might have such as penalties and interest.
            <br/><br/>
            The Tax Mechanic has known this for years now, that with the increased use of technology that our government will use it to find individuals and companies that have not paid their taxes. For anyone to think they can continue to not pay their taxes is rolling the dice and the odds are not in your favour.  
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
