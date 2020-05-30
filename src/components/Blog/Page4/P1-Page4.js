import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P1Page4() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>A Tax Horror Story With A Happy Ending.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date=" September 9, 2017" title="A Tax Horror Story With A Happy Ending." subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            Jim had a small business (20 + employees) for 7 years. He had gone through some personal troubles which had an impact on his business over the past few years. Decisions were made at that time to forgo certain tax payments along with properly maintaining his accounting and bookkeeping records. The end result was some letters and phone calls from CRA asking for information and also payments. Jim had every intention of paying what he owed, but at that moment he just didn’t make it a priority.
            <br/><br/>
            On his way in to work one morning he received another call from the CRA.  He chose again to ignore it because he had a meeting to get to that required his full attention. After a successful client visit that would provide him and his staff new work and a much needed boost his bank called. They informed him that they had been instructed by the CRA to freeze his account and any funds in the account to be transferred directly to them.
            <br/><br/>
            He thought the past few years were difficult, but in a matter of minutes things got a lot worse. He was not only in for a fight to try and save his business but to save any other assets that he had.
            <br/><br/>
            This story is not uncommon and can have many variations but the one underlining thing here is that the CRA will only put up with so much before they put the hammer down! They don’t really care at this point who gets hurt in the process. In their defense they were ignored, and had not been taken seriously by Jim. After these actions were taken, Jim took them very seriously and knew that he had to take responsibility for his actions and resolve this quickly.
            <br/><br/>
            Jim found us online and we were contacted. After a consultation with us we created an action plan to tackle the key areas to deal with first. The Tax Mechanic team went to work, representing Jim and negotiating with the CRA on his behalf, getting the bank account back online, getting his accounting records back in shape and negotiated a payment arrangement with the CRA that Jim could live with. It took some time but the business was saved and now is heading in the right direction.
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
