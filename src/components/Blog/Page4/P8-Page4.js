import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P8Page4() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>A $40,000 Tax Bill Became An $8,000 Benefit!</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="June 9, 2017" title="A $40,000 Tax Bill Became An $8,000 Benefit!" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            Richard B. is a tax client who approached us with a sensitive issue. “Fraser-my sister is in tax trouble-she just got a bill for $40,000, what @#@&% do we do?” His use of profanity underlined his concern. These days, with the advent of computer technology, and the CRA’s renewed determination to increase enforcement, this story is all too common. Richard’s sister, Christine, was a typical young professional, successful, fast paced career and five years of personal taxes overdue. The CRA had arbitrarily assessed her returns resulting in a large tax bill. As the term arbitrary implies, tax returns are estimated, and never in the tax payers favour, then assessed and sent to collections. The purpose of this strategy is to get your attention. A 40k tax bill will get your attention.
            <br/><br/>
            After preparing Christine’s tax returns including all allowable deductions, including RRSP contributions, conveniently omitted by Revenue Canada, the result was an $8,000 refund.
            <br/><br/>
            If you have not filed for a few years, you can expect a reassessment in the summer as the CRA matches provincial data with Federal tax records. If you are in this situation you can avoid the penalties by declaring a voluntary disclosure now.
            <br/><br/>
            Do not try an application yourself, one wrong move and you will not qualify for a penalty waiver. We have been doing this for over thirty years and have acquired the specialized knowledge concerning voluntary disclosures and the criterion for acceptance.
            <br/><br/>
            We have many stories to tell about companies and individuals that have faced challenges regarding their taxes and accounting. The important thing in posting any of the these stories and/or information is to try and help others understand that there are many ways to correct these issues and with our help keep on things on the right track.
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
