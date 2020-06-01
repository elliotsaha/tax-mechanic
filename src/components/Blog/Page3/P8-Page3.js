import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P8Page3() {
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
            <BlogPages date="September 18, 2017" title="Not Filing Your Taxes? It Will Be Ineligible For More Than Just Credit" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            Each year thousands of individuals and businesses don’t file their taxes on time or they just don’t file at all. Most people know that not filing leads to a number of problems. Something that you may or not be aware of that failing to file puts you at risk at receiving federal and provincial benefits that are calculated on annual tax returns.
            <br/><br/>
            Among the benefits calculated based on tax returns are child tax credits, Ontario Trillium benefits, mortgages, loans, transfer of properties passing through probate and the list goes on.
            <br/><br/>
            We have many clients who have been relying on for example child tax credits having them cut off and only because of non-filing. They then have to wait until returns are filed and they are reinstated back into the system.
            <br/><br/>
            On top of the problems that come with non-filing there are penalties and interest that will mount. Five percent penalty on taxes owed, one percent is added each month up to 12 months. Interest is also charged, compounded daily.
            <br/><br/>
            Taxpayers, for example, who owe $10,000 in taxes would face over $2,000 in penalties and interest after one year. Right now through the Voluntary Disclosure Program these penalties could be waived but changes to this program are coming in January 2018. Watch our video to find out more.
            <br/><br/>
            Now most income forms are transferred directly to the government, where computers help determine which late filer to pursue based on their tax recovery potential.
            <br/><br/>
            Individuals and business that we speak to are almost always worried about what this is going to cost them. Not so much our fees, that are very reasonable, but how are they are going to pay CRA for the amount owing. We have negotiated on behalf of many clients payment arrangements with the CRA that are affordable and manageable based on one’s ability to pay..
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
