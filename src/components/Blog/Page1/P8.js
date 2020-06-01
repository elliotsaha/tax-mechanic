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
                        <span style={{whiteSpace: "normal"}}>Top 5 Tips to Increase your Tax Refund</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="July 18, 2019" title="Top 5 Tips to Increase your Tax Refund" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            Tax season. Accountants are stressed, tax lawyers can be heard in the distance whispering about bankruptcy, and everyone else is barely aware tax season is happening in the first place.
            <br/><br/>
            But one thing people never forget is their refund check, especially when you’re expecting a sizeable amount. Many of our clients are interested in finding out how they can get a fatter check at the end of tax season, so don’t fret! The Tax Mechanic has an answer.
            <br/><br/><br/>
 
            Here are the top 5 things you can do to not only get a bigger refund, but also improve your finances.   
            </p><br/>
            <span>(1) Contribute to your RRSP (Registered Retirement Savings Plan)</span>
            <p>
            Each year you get a certain amount of contribution room in your RRSP to put money in without having to pay taxes on it. It’s one of the easiest ways to save some money for retirement. But the best part about contributing to your RRSP, is you get a sizeable refund from your contribution!
            <br/><br/>
            Bonus: Use your increased refund to reinvest back into your RRSP, and save even more money for your retirement. Or go to a Raptors game. Whatever, we won’t judge.
            </p><br/>
            <span>(2) Convert non-deductible interest to deductible interest by investing</span>
            <p>
            Ever thought about getting into investing? Well here’s an extra incentive- you can get a bigger refund from it too! Interest from investments are deductible against the income earned from the gains. Make money from your investments, AND money from your tax refund.
            </p><br/>
            <span>(3) Ask payroll to deduct more tax from each paycheck</span>
            <p>“Source” deductions – deductions made directly from the source, aka payroll – are deductible, and can get you a bigger refund. This one is easy to do for anyone who employed and already has taxes deducted by their employer. Doesn’t cost you any money or time, but can get you more money!</p><br/>
            <span>(4) Donate to your favourite charity</span>
            <p>We need some more charitable people in the world, and if being a good person isn’t enough of an incentive, donations are deductible and can give you a tax credit towards a bigger refund. The children of the world will thank you for it, and so will your wallet.</p><br/>
            <span>(5) Start a home-based business</span>
            <p>This tip is more for the entrepreneurial types, but if you’ve been interested in starting a small side business to boost your income, this can actually save you a lot of money in taxes! This strategy converts non-deductible expenses into deductible expenses, reducing your tax liability and giving you a fatter refund check.</p>
            <p>That’s all! Use these tips to save you some money in taxes, and help you afford a treat after tax season. Leave a comment or email us to let us know if these tips helped you.</p>
            <p><br/>
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
