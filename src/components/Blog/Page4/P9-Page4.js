import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P9Page4() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Revenue Canada's Criminal Investigations Program</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date=" May 25, 2017" title="Revenue Canada's Criminal Investigations Program" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>Another program underway is CRA’s criminal investigation program that focuses on the most serious of cases that meet one of the following criteria:</p>
            <ul>
                <li>significant, and/or material cases of tax evasion with an international element</li>
                <li>promoters of sophisticated and well organized tax schemes aimed at defrauding the government</li>
                <li>joint financial crime cases with other enforcement agencies, including cases of tax evasion involving money laundering and terrorist financing</li>
                <li>significant, and/or material cases involving income tax and/or GST/HST tax evasion, including the underground economy</li>
            </ul>
            <p>
            You might be saying to yourself that is not me, however keep in mind that evading taxes is considered by CRA a crime no matter how minor you might think it is. Under the Income Tax Act and the Excise Tax Act individuals convicted of tax evasion face court fines ranging from 50 percent to 200 percent of the taxes evaded and possibly even jail time.
            <br/><br/>
            Once the CRA starts an investigation or contacts you for late taxes they will use the full force of the law to ensure compliance. In other words, they want to make an example of you to deter others from avoiding paying tax. This is the most effective audit strategy: select a small number and pursue diligently.
            <br/><br/>
            If you are late on filing your taxes, or have unreported income, you can expect a reassessment in the summer as the CRA matches provincial data with Federal tax records. If you are in this situation you can avoid the penalties by declaring a voluntary disclosure now.
            <br/><br/>
            Do not try an application yourself, one wrong move and you will not qualify for a penalty waiver. We have been doing this for over thirty years and have acquired the specialized knowledge concerning voluntary disclosures and the criterion for acceptance.
            <br/><br/>
            Whether it is a Notice of Assessment, liens, CRA penalties and interest, garnishments, audits, frozen bank accounts we are specialists in handling these issues and many other tax problems.
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
