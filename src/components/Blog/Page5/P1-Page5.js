import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P1Page5() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>House Flipperss Beware!</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="May 4, 2017" title="House Flipperss Beware!" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            Under Ontario’s 16-point plan to tame housing is point 14 which reads as follows;
            <br/><br/>
            14. Partnering with the Canada Revenue Agency to explore more comprehensive reporting requirements so that correct federal and provincial taxes, including income and sales taxes, are paid on purchases and sales of real estate in Ontario.
            <br/><br/>
            The province could provide the CRA with information to follow up on capital gains taxes that have not been paid. Through the changes to the collection of the land transfer tax, which go into effect April 24, Ontario will require buyers to declare whether a unit is being used as principal residence and therefore eligible for a tax exemption. Ontario is also demanding to know if you are leasing and the CRA could be armed with information about your rental income.
            <br/><br/>
            If you are flipping houses or condo’s you can expect a reassessment in the summer as the CRA matches provincial data with Federal tax records. If you are in this situation you can avoid the penalties by declaring a voluntary disclosure now.
            <br/><br/>
            Do not try an application yourself, one wrong move and you will not qualify for a penalty waiver. I have been doing this for over thirty years and have acquired the specialized knowledge concerning voluntary disclosures and the criterion for acceptance.
            </p>
            <span>Voluntary Disclosure Program (VDP)</span>
            <p>
            As the Canada Revenue Agency (CRA) moves forward to aggressively address non-compliance on unreported income or unfiled taxes, it becomes more important that you need to be aware of the Voluntary Disclosures Programs (VDP)
            <br/><br/>
            The Income Tax Act allows the CRA to assess you penalties of up to 50% of the unpaid tax or the improperly claimed benefits. In addition, the court may, on summary of conviction, fine you 50% to 200% of the tax evaded, and even a jail term.
            As soon as CRA initiates the contact, then it is too late. It could be one letter in the mail, one phone call, one personal visit, etc. Your life could change for the worst in a moment.    
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
