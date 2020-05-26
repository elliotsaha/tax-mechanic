import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P2Page5() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Underground Farmer Comes Clean With CRA And Saves $100K</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="April 20, 2017" title="Underground Farmer Comes Clean With CRA And Saves $100K" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            John contacted us recently and booked a consultation and this was his tax tale. He had not filed his tax returns for ten years and was depositing the money he was earning as a self-employed contractor framing houses, in his girlfriend’s bank account. Recently his girlfriend advised that she had other plans and that he should take his money out of her account. John was concerned because he felt that if he opened a bank account in his name Revenue Canada would garnish his account leaving him destitute.
            <br/><br/>
            Going from underground to aboveground is tricky business. Many considerations including dealing with the CRA and how to properly file back taxes. I told John not to worry and that I had filed many Voluntary Disclosures with the CRA successfully and without penalty.
            <br/><br/>
            First, I immediately contacted Revenue Canada and registered as a representative for John. Then I filed the ten years of taxes and made a payment plan which was approved on an anonymous basis. Once approved I presented the plan to John who was relieved given that penalties would not be applied. I then e-filed the returns and John was home free.
            <br/><br/>
            By the numbers; John owed approximately $10,000 per year, totalling a $100,000 liability. If a penalty was applied it would have doubled the liability. Therefore, by filing a voluntary disclosure through me as a registered CRA rep, John saved $100,000.
            <br/><br/>
            If you are in a similar situation call us to discuss a voluntary disclosure and you too can save thousands. Do not try an application yourself, one wrong move and you will not qualify for a penalty waiver. I have been doing this for over thirty years and have acquired the specialized knowledge concerning voluntary disclosures and the criterion for acceptance.
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
