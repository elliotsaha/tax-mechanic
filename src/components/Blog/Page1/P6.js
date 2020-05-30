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
                        <span style={{whiteSpace: "normal"}}>Who to hire to solve your tax problem? 3 things to look for</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="July 15, 2019" title="Who to hire to solve your tax problem? 3 things to look for" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>You have a tax problem, and it’s time to deal with it. What do you do?</p>
            <p>You hire a professional.</p>
            <p>Taxes are like criminal cases in the sense that they’re not the kind of problems you want a homemade solution for- you hire a lawyer to handle your case, or in the case of taxes, you hire a tax professional. One small mistake can be the make or break for your situation. You always want to make sure you have someone who knows what they’re doing on your side.</p>
            <p>So who do you hire? Who can you trust with your tax problem?</p>
            <p>Here’s what you want to look for in your search for a tax professional:</p>
            <span>(1) Accountant vs Tax Consultant vs Tax Lawyer:</span>
            <p>The first step is deciding what kind of profession your tax professional should have. The key is to look at what profession is most relevant to your problem. Tax lawyers are standard lawyers who also deal in the branch of tax law. They understand how to deal with the law and can converse in fancy legalese, but the truth is that they don’t have much experience with the actual “tax” aspect.</p>
            <p>An accountant is on the opposite side of the spectrum- they work with numbers. They are very good at doing standard taxes, your basic T1s and T2s, but when it comes to negotiations and going to tax court, they’re out of their depth.</p>
            <p>A tax consultant or tax specialist is on middle ground with a background in taxes AND a good understanding of tax law and tax court. They are the ideal professional for dealing with tax problems because they know how to work the numbers to save you money, but also tax law so that you can work the system and save on penalties and other consequences of late filing.</p>
            <span>(2) Big Business vs Small firm:</span>
            <p>Now that you know where to look in terms of professions, you also want to decide what kind of firm you want to go with. There are a few very large tax firms in Canada, made up of accountants and tax lawyers alike, with thousands of employees. There are even more small businesses, made up of just a few tax professionals within each.</p>
            <p>From first look it might seem smarter to go with the big firm- after all, they have more resources, more people, and because of their size, have probably dealt with more clients over the years. Small firms may not have the same scale of resources, but they have something more important: focus and attention on your case. Big firms are dealing with hundreds of clients at once, and although they may have lots of resources, they are spread thin across their clients. They simply don’t have the capacity to put all their effort into your specific case like a small firm does.</p>
            <p>A small firm may have less people, but you can rest assured that those people are doing everything they can for your case.</p>
            <span>(3) Level of experience and specialization:</span>
            <p>the third quality you want to look for in hiring a tax professional is their experience and specialization. No fancy explanation needed: simply put, do you want a professional who has been in the field for 5 years and has general knowledge, or a professional who has been in the field for 30 years and specializes in your particular problem? Choose wisely!</p>
            <p>If you’re looking for someone to solve your tax problem, these tips should help you make a more educated decision on who to hire.</p>
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
