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
                        <span style={{whiteSpace: "normal"}}>Are you behind several years on filing your taxes?</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="February 14, 2020" title="Are you behind several years on filing your taxes?" subtitle="By: Fraser Simpson and Christa Lazar" mainPara=
            {
            <div>
            <p>You may think you are uniquely alone in this situation, but you are not. Falling years behind taxes is more common than you think, due to health, family, loss of work and other issues. As the years go by, the situation gets worse. Pressure and fear builds up, and since it seems there is no good solution at this point, and either way, it will have negative repercussions on your life, you keep postponing dealing with the issue, so it becomes a ticking time bomb that will affect your peace of mind, productivity, and health in the long term. We are analyzing the most common responses to these problems and their consequences:</p>
            <span>1. OSTRICH DEFENSE</span>
            <p>The most common response is denial. You pretend you don’t see the problem so the problem won’t see you. You think you can do nothing and hope they never find you. Fear paralyzes you. You hide your head in the sand and pray that the CRA will somehow forget that you exist. They won’t forget about you and like in the wild, this strategy never works out too well for the ostrich.</p>
            <span>2. DIY: DO IT YOURSELF</span>
            <p>You’re smart, surely you have enough knowledge and understanding of taxes to do it yourself. You muster your strength, take a sabbatical from work and family. You bury yourself in your cave, gather 10 years of tax returns and calculate your liability. Then file in a batch and wait, praying you haven’t made a mistake to make things worse.  The inevitable call from Revenue Canada’s friendly audit division comes in to scrutinize your past 10 years in minute detail.  A seemingly endless and unreasonable ordeal starts. Once it’s over you’ve aged 10 years. Time to pay your back taxes plus huge penalties for repeat non-filing. It’s now too late to regret this decision.</p>
            <span>3. TAX LAWYER: BRING CASH, LOTS OF IT</span>
            <p>After years of insomnia due to the subconscious pressure of unfiled taxes, a friend refers you to a good tax lawyer and suddenly you become hopeful. You meet up with the friend’s friend, a kind and likable character who claims to be able resolve all your tax problems. You kind of like him until he quotes you on his hourly rate of $600 and a retainer payable on the spot that starts from $3,500. You are secretly hoping that he works fast and your retainer will cover it all. Lawyers are not known for rushing though, in fact, they like to work slo-mo and compete with their pet snail in taking their time. They always win, too. At the end of the months-long process, you are faced with a $38,965 lawyers bill in addition to back taxes, penalties, and interest.</p>
            <span>THE BEST ALTERNATIVE</span>
            <p>The Tax Mechanic is your emergency response unit: make one phone call and let us do it for you: problem solved. After 35 years of experience successfully dealing with the CRA, we have a different perspective on the issue: it IS solvable fast, easily and with the least amount of hassle. Friendly, compassionate service. Reasonable rates. No penalties by filing through the Voluntary Disclosure Program of the Canada Revenue Agency.</p>
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
