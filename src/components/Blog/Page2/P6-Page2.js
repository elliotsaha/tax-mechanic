import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P6Page2() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>The Psychology of Why People don’t File Their Taxes</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date=" April 13, 2018" title="The Psychology of Why People don’t File Their Taxes" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            The psychology of why people don’t file their taxes is a complex, often stress-filled, issue. Reasons often come with strong negative emotions. One year of unfiled taxes with the CRA, can turn into two, then three, and before you know it even 10 years.  Serious problems are created, financially and emotionally, including fear, anger, anxiety and guilt. Whether you are a business owner or an employee, tax filing is necessary and our duty as a citizen of Canada.
            <br/><br/>
            Every day, we speak to people struggling with paying their taxes and filing on time. Please watch our video where I speak with a good friend, Jennifer Brighton, MSW, RSW, MPEC, Psychotherapist, Family Counselor and Life Coach. Jennifer’s practice history includes people who have not made their annual tax filing a priority. A Tax Cloud gathers.
            <br/><br/>
            Jennifer shares a story of a couple suffering relationship issues, including a serious lack of tax filing, having not filed in seven years. Initially, family drama starts them on the “no tax filing path”, then “tax time” brings a cloud of “life-limiting” fears, anxieties and horrible embarrassment. They realize they could not manage their seven year tardiness in tax filing on their own and hire a new member to their team to sort this out. The stress filled, seven year drama ends with money back from the CRA. A Tax Cloud is lifted!
            <br/><br/>
            Jennifer, reflects that the fear of the CRA, and not filing for seven years was a real relationship drama for this couple. Jennifer describes FEAR as False Expectations Appearing Real. FEAR creates a terrifying false idea in the mind that the CRA and filing taxes is an insurmountable obstacle. Not filing taxes can completely overwhelm people and shut them down to the point where they can find themselves years behind. In reality the facts are that there are companies out there that can help.
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
