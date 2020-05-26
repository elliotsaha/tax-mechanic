import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P9Page2() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Did you get a Bonus?</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="February 7, 2018" title="Did you get a bonus?" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            Did you get a bonus? The Canada Revenue Agency (CRA) did for $35,000. Five things you can do right now to get YOUR bonus.
            <br/><br/>
            CRA’s top executives pocketed an average of $35,000 in performance pay for 2017! Ever try to call the CRA? Performance is not the adjective I would use, more like incompetent.
            <br/><br/>
            The total amount spent on performance pay for CRA executives was $6.8 million in 2015/16 and $6.9 million in 2016/17.
            <br/><br/>
            You can get mad or you can get even.
            <br/><br/>
            Here’s how to get even;
            <br/>
            </p>
            <ul>
                <li>Lower your tax payable to give yourself a bonus? How? Hire a professional.</li>
                <li>File on time-no need to give the CRA extra money-they will only increase their bonus.</li>
                <li>Start a side business-you can use the write-off’s to offset other income-see #1 above.</li>
                <li>Max out your TFSA and RRSP’s-duh.</li>
                <li>Call us.</li>
            </ul>
            <p>
            Tax is your biggest expense. You need to manage this expense with the same focus you would on other expenses like insurance, medical, education, etc.
            <br/><br/>
            Karl Lavoie, CRA spoke person, said executives are assessed according to the government-wide priorities such as healthier workplaces and diversity as well as the agency’s priorities.
            <br/><br/>
            But critics question why the CRA’s top executives are getting so much in performance pay when the agency is under fire for its performance.
            <br/><br/>
            For example, they cite a damning auditor general’s report that found the agency couldn’t handle high call volumes, often didn’t answer the phone and gave taxpayers incorrect information 30 per cent of the time.
            <br/><br/>
            If you have called the CRA lately they usually respond with a voice message declaring that they are too busy and to call back later? That’s performance?
            <br/><br/>
            New Democratic Party Revenue critic Pierre-Luc Dusseault questions whether such large performance paycheques are justified, given the problems at the CRA in recent years. (The baby minister-he’19! Our future is in good hands).
            </p>
            <p>
            Dusseault said he was very surprised top CRA executives are getting that much performance pay — particularly given the problems with the call centre.
            <br/><br/>
            “Many Canadians have found there were many problems with the CRA, many problems getting services from the CRA and now we see those executives (getting) money for their performance when Canadians don’t think the performance was good in the last two years.”
            <br/><br/>
            Dusseault also called into question the CRA’s performance when it comes to taking action on offshore tax evasion in the wake of the Panama Papers, the Paradise Papers and other leaks of offshore tax account information.
            <br/><br/>
            “When we look at other tax agencies around the world, they are much better at going after tax cheats.”
            <br/><br/>
            If the CRA deserves a bonus-surely you do. Call the Tax Mechanic for a tune-up.  
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
