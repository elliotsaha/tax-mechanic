import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P3Page5() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>When You Get A Notice Of Assessment That You Don't Want To Get.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="April 6, 2017" title="When You Get A Notice Of Assessment That You Don't Want To Get." subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            We all have stories of good and bad in our lives as we get older. I for one have many of both, and would like to share two of those with you. First a very personal one. In 2005 I lost my eldest son to suicide. A tragic event that changed my life forever. This without question is the worst thing that could possibly happen to any parent and it will be something I deal with everyday, but there is some good news that came from this tragedy. One of those things was the creation of charity and if you would like to learn more please check out our website at cameronhelps.ca.
            <br/><br/>
            So I am sure you are asking, “What the heck does this have to do with getting a Notice of Assessment from the CRA?”  Well, the same year of my son’s death I got a Notice of Assessment that stated I owed thousands of dollars from an incident that happen years previously. So began another nightmare of not only dealing with the loss of my son, but trying to deal with CRA on a matter that frankly made no sense to me. My point is this, you just doubt things will happen that will change your life forever, and for me I am grateful to have been able to survive both and move forward.
            <br/><br/>
            The CRA battle that I had went on for years, and after thousands of dollars spent on lawyers and having to deal with an accountant that was only concerned about his or her own well being, a settlement was reached no thanks to either. I learned some very valuable lessons. One is you need to trust your accountant is working for your best interests and make sure you understand exactly what his or her intentions are. Also you never know when #$%@ happens but when it does never give up because eventually things can be resolved and hopefully move you on to a better path.
            <br/><br/>
            If you have a Notice of Assessment letter or have not received one yet but are concerned there could be one on it ways here are some easy steps to follow:
            <ul>
                <li>Don’t panic and give us a call</li>
                <li>Arrange for a free consultation with us</li>
            </ul>
            <p>I have had the pleasure over the past number of years to get to know Fraser Simpson. I have worked with him in business. He has helped me, and still does with my own accounting and taxes. Now we are working together to help our clients navigate not only through taxes issues but other services as well. I know that if I could have turned to Fraser first my experience even though still extremely difficult would have been easier to stomach. If you have an issue, trust me we understand and will work on your behalf to resolve your problem. Helping people is our passion.</p>
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
