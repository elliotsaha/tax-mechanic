import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P5Page2() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>How Many People Don't File Their Taxes in Canada</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="June 7, 2018" title="How Many People Don't File Their Taxes in Canada" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
                In 2014, a Forbes published article stated about 7 million U.S. taxpayers failed to file income tax returns each year, while 146 million did file. Yearly, approximately 5% of the population fail to meet their tax obligations to the Internal Revenue Service (IRS). The IRS released a study covering the years 2011 to 2016, noting the government loses $28 billion per year to non-filing.
                <br/><br/>
                I know what you’re thinking, we are not Americans. As it turns out, there are no statistics for Canadian non-filers. Let’s say the Canadian experience is statistically about the same for not filing taxes as our friends to the South. There are approximately 29 million Canadian taxpayers (ages 19 to 90+).  Five percent would mean 1.45 million Canadians don’t file each year. No surprise that the Canada Revenue Agency (CRA) invests millions of dollars to find individuals not paying their share.
                <br/><br/>
                We have heard many reasons for not filing, or filing, but not paying.  Final results in some cases can be devastating. Some people lose much of what they have worked so hard for. Individuals may choose to ignore tax season and let it pass. The lapse bothers them for a bit of time, then it’s forgotten again until next year. The pattern of not filing is begun, and before you know it there is a big problem.
                <br/><br/>
                Recent changes made to the Voluntary Disclosure Program (VDP) have made it more difficult to take advantage of this service. The VDP helps taxpayers who have failed to file for years. Not everyone can take advantage of this tax filing method. It is worthwhile to contact us and find out if VDP is an option or what other tax strategies would be appropriate for you.
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
