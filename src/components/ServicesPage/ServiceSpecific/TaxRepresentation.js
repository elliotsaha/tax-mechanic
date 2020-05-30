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
                        <span>Tax Representation.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text">
                <span className="Title">
                    When do you need a tax representative?
                </span>
                <p className="para">
                When a taxpayer has a complicated tax situation that needs extra attention, we always recommend professional tax representation. Representation is also useful if a taxpayer does not have the time or desire to speak to the CRA.<br/><br/>
                Professional tax representation is a very powerful tool you can use to “even the odds” when you need help with the CRA. As you may have experienced, CRA agents can be very intimidating, when they are making demands on you, the taxpayer. They tend to be less forceful and more reasonable when they must address themselves to a professional representative, particularly when they are experienced and registered with the CRA.<br/><br/>
                A good tax professional will know the most expedient strategy to employ in any tax situation. They will know all of the right questions to ask you and how to properly present your case to the CRA so that you get the results that you deserve. If you have a large or overdue tax bill or need help dealing with the collection branch of the CRA, we can offer the best tax help available. Helping taxpayers arrange settlements with the CRA is our specialty.<br/><br/>
                As a taxpayer, you probably do not know all the rules and formulas that are applicable to your situation. The CRA officer does, but usually only reveals the portion they want you to know, not the portion that would be helpful to you. The officer’s job, after all, is to collect money from you, not to be your friend!
                </p>
                <span className="Title">
                    What to look for in a Tax and Accounting Professional
                </span>
                <p className="para">
                If someone tells you that he or she has hired a professional tax or accounting firm to do their taxes, you might look at this person in a whole new light. They must be particularly wealthy, right? Their tax situation must be complex. Neither is necessarily the case, however. Many taxpayers can benefit from hiring the right professional, and a lot do.<br/><br/>
                Take some time to identify exactly what it is you want your tax and accounting firm to do for you. Here are some common reasons why you might think you need one.
                <br/>
                    <div className="bullet">
                        <span>&bull;Preparing your own taxes is time-consuming, stressful or confusing. </span><br />

                        <span>&bull;You want to make sure your tax returns are accurate. </span><br/>

                        <span>&bull;Your tax situation is pretty complex, perhaps because something changed this year, and you need specialized advice and tips. </span><br />
                
                        <span>&bull;You want detailed tax planning advice going forward.</span> <br />

                        <span>&bull;You are facing a tax problem such as filing back taxes, paying off a tax debt or fighting an CRA audit.</span><br />

                        <span>&bull;You’ve started a business, invested in the stock market, bought rental property, or a variety of other reasons.</span><br />
                    </div>
                    
                
                </p>
                
                <span className="Title">
                    Finding a Tax and Accounting Firm.
                </span>
                <p className="para">
                You’ll want a person who has experience dealing with tax situations similar to your own. If you’re being audited, you don’t want someone who has never handled an audit before.<br/><br/>
                Here are tips for finding a professional with the specialized tax expertise you need. Remember that you, not the accountant, are ultimately responsible for the information included on your tax return.
                <div className="bullet">
                        <span>&bull;Be wary of someone who promises you big refunds or that says you can deduct everything under the sun.
 </span><br />

                        <span>&bull;Don’t be afraid to shop around or to change firms if you’re not satisfied or comfortable.
</span><br/>

                        <span>&bull;Local, independent firms often specialize in the tax needs of individuals and small businesses, but ask if the firm has the expertise to handle your taxes if there’s anything unique about your situation.
</span><br />
                
                    </div>
                </p>
                <span className="Title">
                    Questions to Ask

                </span>
                <p className="para">
                <div className="bullet">
                        <span>&bull;How long have you been in the tax business?

 </span><br />

                        <span>&bull;What tax issues do you specialize in?

</span><br/>

                        <span>&bull;What are your fees?

</span><br />
<span>&bull;Do you outsource any of your work or do you perform all the work personally?

</span><br />
<span>&bull;Approximately how long will it take you to finish my taxes?

</span><br />
<span>&bull;What’s your privacy policy? Will you share my tax information with any third parties?

</span><br />
<span>&bull;Do you believe that I’m paying too much, too little, or just the right amount of tax?

</span><br />
                
                    </div>
                </p>
                <span className="Title">
                Experience with a difference

                </span>
                <p className="para">
                Over the years we have had a variety of different business and personal experiences that have shaped the making of the Tax Mechanic. It is not just about what you know it is also about how you as a business owner and professional treat their clients. We pride ourselves on providing our clients not only tax and accounting services but we also understand that “life happens” and issues like taxes and accounting can take a back seat.<br/><br/>
It is our mission with all our clients to provide them with the best service possible and to be flexible and understanding when it comes to any professional and personal challenges that our clients might be facing. It makes us happy when we have solved your issues. That is why we do what we do.

                </p>
            </div>
        </div>
    )
}
