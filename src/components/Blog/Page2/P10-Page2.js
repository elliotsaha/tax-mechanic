import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
export default function P10Page2() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>CRA Tax Payment Plans</span>
                        <div className="ButtonContainerS1">
                        <Button className="Button" text="Book For a Free Consultation Today"/>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="January 18, 2018" title="CRA Tax Payment Plans" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            A payment arrangement is an agreement you make with the CRA. It allows you to make smaller payments over time until you have paid your entire debt including applicable interest.
            <br/><br/>
            Before you make a payment arrangement, you may need to show that you have tried to pay your debt in full by borrowing money or reducing your expenses. To figure out your ability to pay, they may ask you to provide proof of your income, expenses, assets, and liabilities. You may have to do this by telephone or by completing a financial questionnaire.
            <br/><br/>
            Some people simply have tax debt and don’t have the money to pay it. Over time, interest continues to grow and the tax debt becomes even more difficult to pay. Some people get behind filing tax returns, knowing that they will soon have a tax debt that they will not be in a position to pay off.
            <br/><br/>
            If you know that a tax debt is owed or that a tax debt will be owed once you become compliant (i.e. file the required returns) and are just simply not in a position to pay it, then what you have or are about to have is a financial problem.
            <br/><br/>
            Trying to make a CRA tax payment plan directly with the CRA (Canada Revenue Agency) is dangerous. This is because, in consideration of accepting a short term payment plan from you, they will often want significant financial disclosure, such as where you bank, where you work and where you live. This is in the hope that in the future, when your CRA tax payment plan expires or if you miss a payment, they can use enforcement action on your income, home or bank account to force you to pay your tax debt in full.
            <br/><br/>
            We often negotiate CRA tax payment plans for our clients. In addition, we offer a host of other financial resources to those who want to raise the funds to pay off the CRA once and for all or for those who can’t pay and need financial relief.
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
