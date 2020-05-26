import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P1() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>In Hiding, Haunted, or Hunted: Tax Terror and how to fix it!</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="August 28, 2019" title="In Hiding, Haunted, or Hunted: Tax Terror and how to fix it!" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            I deal with fear. I also deal with evasion, forgetfulness, procrastination, and a whole host of other human behaviours. But it’s the fear that often gets people calling us – and which my biz partner David Harris and I at Tax Mechanic try to address and take care of right up front.
            <br /><br />
            First, there’s a simple fear of filing taxes, something that can become paralyzing – and can come with many excuses. Here’s an interesting New York Times article (10 years old, but timeless): https://www.nytimes.com/2009/04/12/weekinreview/12delafuente.html
            <br /><br />
            For many people one year can turn into two years of non-compliance, then three years, five or ten or more. The fear of filing now becomes a fear that gets you into hiding, and fear of being found out, fined, or even imprisoned.
            <br /><br />
            Other clients have spoken about things like holding back on updating a resume or refusing well-paid work they need, fearing it will bring them out into the relentless spotlight of the CRA. It’s safer to stay below the radar, these people think. For some who haven’t filed for years, their terror can also be triggered by hearing a cop car or seeing a pile of tax forms at the post office.
            <br /><br />
            More than one client has told us that they’d torture themselves by looking at the CRA’s online ‘directory’ of province-by-province cases where a taxpayer was convicted in court for tax evasion. That includes the amount of the fines and the length of jail time some have. Many people also fear someone finding out and reporting them to the CRA tax evaders’ snitch line (or of being blackmailed).
            <br /><br />
            And as we know well, the CRA scams, those phony calls threatening to send law enforcement to your door to arrest you, generate a lot of fear – not only with recent immigrants and other vulnerable groups. Even smart, sophisticated people can fall for the tax scam.
            <br /><br />
            I’ve had some clients who’ve told me they knew all about those tax scams but were still rattled to get one of those calls at a certain time. For one client, it was a combination of that, and seeing that someone in administration at the CRA had looked at his LinkedIn profile. That was the push that got him to call us, and begin the process of facing that fear and resolving the situation.
            <br /><br />
            I’m no psychologist or psychiatrist, and I wouldn’t dream of trying to analyze someone’s fear and feelings. You might well find it of benefit to see a therapist if you’re finding it difficult to cope and go on. What we at Tax Mechanic can do is help you face and erase your fear in a very practical way – by clearing up your tax problem. At Tax Mechanic we can help you get back on track and back within the CRA fold. And even if you owe a lot of money, we can help you with a workable arrangement and payment plan with the CRA, so doing your taxes doesn’t leave you in the poorhouse.
            <br /><br />
            And as we also offer a free initial consultation, you can contact us if you’ve had one of those ‘CRA’ calls, messages, texts or emails. We can help set your mind at rest, and determine whether it’s a scam. Here’s what the CRA themselves say:
            https://www.canada.ca/en/revenue-agency/corporate/security/protect-yourself-against-fraud.html
            <br /><br />
            You may find your fear dwindling as soon as you realize you have professional help to handle your problem for you, and to represent you so you don’t have to worry any longer. You might ultimately discover you don’t owe as much as you’d feared, or don’t owe any, and/or have some nice refunds coming back.
            <br /><br />
            Whatever your situation, you may also find, once you get your taxes done, you can do so many other things – now that you’re no longer in hiding. Here’s the thing, though – you (or the professional acting for you) have to reach out to Revenue Canada before they reach out for you, or you may find the situation is immediately more serious and can come with some major penalties. At Tax Mechanic, we’re specialists, we know the CRA, and know how to deal with them.
            <br /><br />
            We’ll help you resolve your situation, and do everything we can to ensure your problems are dealt with in a fair and timely manner. “We will take good care of you,” is what we tell clients. No fear.
            <br /><br />
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
