import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P1() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Is your late tax problem eating you away?</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="July 12, 2019" title="Is your late tax problem eating you away?" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>Does this describe you? : <br/><br/>
            You haven’t filed for a few years, life just got in the way. But the more time passes, the more daunting the idea of getting all the taxes filed seems. So you keep not filing. And with all the information online about the CRA sending people to jail and taking away their homes, you become afraid that mentioning it or talking about it to anyone will land you in jail too. So you try and hide the problem from everyone you know, and forget it yourself. But there’s always that fear in the back of your mind, that you know that one day you’ll have to address your problem.</p>
            <p>
            If that sounds familiar, this article is for you.

            <br/><br/>

            People without tax problems don’t understand the gnawing stress and fear that comes with having a serious tax problem. For most, taxes are a miniscule aspect of life that pops up once and a while in tax season. It is purely a financial phenomenon such as paying a mortgage or getting a credit card.

            <br/><br/>

            But for those who have found themselves in more complex tax problems, taxes become somewhat of an emotional monster. With all the misinformation out there, the CRA starts looking like an assassin you’re hiding from, and taxes being the crime you need to hide.

            <br/><br/>

            It doesn’t have to be that way! There’s an easy way out that won’t break the bank or land you in court.

            <br/><br/>

            Dealing with thousands of clients with a range of tax problems over the years have really helped us get into the heads of taxpayers with late taxes. We know exactly how stressful it is. We know how scary it is to confront the problem.

            <br/><br/>

            So here’s a step-by-step solution to get rid of the monster lurking underneath your bed: <br/><br/><br/>
            <span>(1) Hire a tax professional:</span>  
            <p>
            When you have a serious tax problem, especially with late taxes, you need to make sure you’re using the right procedures to get caught up. If there are any errors, the CRA can use their enforcement powers against you, and lien your property, freeze your bank accounts, or even land you in jail. Doing your taxes on your own puts you at risk.
            </p>
            <p>
            A tax professional on the other hand knows all of the complex rules, and knows exactly how to handle CRA representatives. You know that they are taking all the precautions to get you caught up seamlessly.
            </p> <br/><br/>
            <span>(2) Calculate your income and expenses for the years owing:</span>
            <p>It doesn’t have to be perfectly exact, but you need an estimate of income and expenses accrued for the years you’re filing for. Otherwise, the CRA will audit it for you with inflated amounts owing. If you followed step 1 and hired a professional, they can help you with this step to make sure it’s done properly.</p><br/><br/>
            <span>(3) Pay what you owe:</span> 
            <p>
            This is the important part. You need to pay the taxes for the years you’ve missed. If you hired a good professional, they will be able to lower or completely quash the penalties on the amounts owing, but either way at the end of the day paying the taxes itself in inescapable.
            </p>
            <p>
            Once you’ve done step 3 – you’re done! All the years you spent with stress eating at you is gone, and it wasn’t even that complicated. Obviously the tax professional will do most of the heavy lifting- if you want to learn more about the technical parts of the process you can read more about it here. But this is really all you have to worry about on your end.
            </p>
            <p>
            You can finally exhale, and go back to your life, without the little tax monster under your bed. You’re back in the good books with the CRA.
            </p>
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
