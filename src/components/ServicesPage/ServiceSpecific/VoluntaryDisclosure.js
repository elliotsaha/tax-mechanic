import React from 'react'
import "../../../Sass/Service/ServiceSpecific/ServiceSpecific.scss";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function TaxRepresentation() {
    return (
        <div>
             <div className="Service">
             <img className="GradientS1Mobile" src="/img/Services/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Services/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span>Voluntary Disclosure.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text">
                <span className="Title">
                Voluntary Disclosure Program
                </span>
                <p className="para">
                The Voluntary Disclosure Program, commonly referred to as the VDP, is a program offered by the Canada Revenue Agency (CRA) which allows taxpayers to come forward without fear of penalty or criminal prosecution. The program exists for taxpayers, both individuals and corporations, to correct their affairs with CRA. There are many situations in which this program is utilized. 
                <br/><br/>
                Below we will discuss some of the common reasons that taxpayers come to us to apply for the Voluntary Disclosure Program.
                </p>
                <span className="Title">
                Unfiled tax returns
                </span>
                <p className="para">
                Not filing a tax return is a serious situation that can often result in gross negligence penalties. If the Canada Revenue Agency discovers that you have not filed a return, the consequences can be significant.
                <br/><br/>
An example of unreported income is an individual who is a T4 employee that runs a self-employed business on the side and does not include this income on their personal tax return or a business that files nil returns despite being operational.
<br/><br/>
The fines for being convicted of tax evasion can reach 200% of the tax evaded and up to two years in prison. If convicted of fraud under section 380 of the Criminal Code of Canada, the time in jail can increase to fourteen years.
<br/><br/>
Our skilled team can present an application to the CRA and amend your tax filings so that the errors or omissions are resolved.
<br/><br/>
If the VDP is accepted, no penalties with be applied. Any additional tax owing from the changes to the returns will still be due. We can also negotiate interest balances. 
                </p>
                <span className="Title">
                Unreported Income or Unsupported Expenses
                </span>
                <p className="para">
                This is when we meet taxpayers who deliberately, or accidentally, filed their tax returns with revenue or expenses that are higher or lower than the actual amounts. For example, a business reports revenue of $50,000 but had revenue that year of $80,000. The impact of these inaccuracies allowed the taxpayer to pay a smaller amount of taxes rather than his or her fair share. The VDP is a way for the taxpayer to come clean and correct their affairs.
                <br/><br/>
The additional tax owing will still need to be paid, but penalties will be avoided. Since a VDP needs to be accurate and complete, this type of change may impact other returns as well such as a GST/HST return that also had incorrect revenue. It is of the utmost importance to get a professional to prepare the VDP application on your behalf so that nothing is missed and your VDP is processed smoothly. The CRA penalty for false statements or omissions can be up to 50% of the understated tax and/or overstated credits.

                </p>
                <span className="Title">
                Unfiled GST/HST Returns
                </span>
                <p className="para">
                Many taxpayers have come into our office have collected but not remitted or filed GST/HST. Often these taxpayers are in a situation where they need to use their GST/HST number or find out that they should have registered years ago and now feel confused on how to go about their business when they are offside.
                <br/><br/>
The major issue that a lot of taxpayers get into is that the Input Tax Credits (ITCS) expire after four years. This is the GST/HST that has been paid on expenses. Once this expires, your GST/HST return is simply the GST/HST collected now remitted to the CRA without deduction for the GST/HST paid on expenses. For example, if you have $1,000,000 in sales and GST/HST collected was $130,000 and expenses of $1,000,000 and GST/HST paid of $130,000- you will still owe $130,000 to the CRA. The VDP is a great option for many of these people. We can save taxpayers significant money when we use the VDP to register for and file or correct previous GST/HST returns.
                </p>
                <span className="Title">
                Offshore Income

                </span>
                <p className="para">
                Whether it is an Irish pension plan, interest earned in a Swiss bank account or rental income in the Caribbean, the CRA wants to know what income you have earned offshore. The CRA is on a hunt for taxpayers who are not reporting their income from abroad. In fact, there is even a snitch line that CRA opened encouraging people to call and report on their inconsiderate neighbours, ex-business partners or mean bosses. They are now offering commission based upon the tax collected from the leads.
                <br/><br/>
There are many times that taxpayers do not report their offshore income from a lack of understanding. We have found many taxpayers incorrectly assume that Canada has a treaty with their country and therefore the income does not need to be reported. While Canada does have many treaties around the world, we file tax returns based on our worldwide income. Even if you ultimately don’t owe any additional taxes from the income source, you are still required to report it. We also find it quite common for taxpayers to leave off income that they never received formal tax slips for and therefore did not include on their personal tax filings.
<br/><br/>
A very common scenario is when an adult child begins taking over their parent’s financial affairs and discovers that there is foreign pension income left off their parent’s tax returns for decades. Other scenarios include taxpayers who inherited funds from abroad and forgot to start including this income on their tax returns. However, the situation came to be, we strongly recommend you pay us a visit and we can discuss if the VDP is the best solution for you.
                </p>
                <span className="Title">
                T1135 Foreign Income Verification Statements
                </span>
                <p className="para">
                The T1135 Foreign Income Verification Statement has been a hot topic in the last few years. This is a form that CRA has for taxpayers to submit when they have specific foreign property exceeding a cost base of $100,000. For example, a taxpayer moved to Canada and maintains a bank account in their home country of more than $100,000. Or, a taxpayer has a rental property abroad worth more than $100,000. Another common scenario is that a taxpayer has US investments with a cost base exceeding $100,000.
                <br/><br/>
Many taxpayers have assumed that because their US investments are held through a Canadian bank that this form does not apply. As well, many taxpayers who only have investment income on T3 and T5 slips also did not realize that this form applies to them as well.
<br/><br/>
The CRA has create a simplified method and a detailed method for completing this form. If the foreign property exceeds $100,000 but is less than $250,000 then a simplified method is available which provides minimal information to CRA. If the property exceeds $250,000 then more details are required to be provided to CRA. The penalty for not filing this form can be up to $2,500.
<br/><br/>
Since there are many taxpayers only now discovering that they should have been filing this form for years, many people are contacting us to file a VDP and submit these forms so that they do not continue to have the fear of this large penalty as a daily burden.
                </p>
            
            </div>
        </div>
    )
}
