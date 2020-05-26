import React from 'react'
import { Card, CardColumns } from "react-bootstrap";
import "../../../Sass/Blog/BlogPages.scss";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
import BlogSections from "../../Misc/BlogSections/BlogSections";

export default function BlogPage4() {
    return (
        <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span>Our Blog.</span>
                        <div className="ButtonContainerS1">
                        <Button className="Button" text="Book For a Free Consultation Today"/>
                        </div>
                    </div>
                </div>
            </div>

        <BlogSections title="A Tax Horror Story With A Happy Ending." subtitle="By: Fraser Simpson" text="Jim had a small business (20 + employees) for 7 years. He had gone through some personal troubles which had an impact on his business over the past few years. Decisions were made at that time to forgo certain tax payments along with properly maintaining..." link="/blog/page4/tax-horror-story-happy-ending"/>

        <BlogSections title="Business Taxes And Accounting And Doing It Yourself... Does It Make Sense?" subtitle="By Fraser Simpson" text="Whether it’s an attempt to save money or time, a growing number of business owners are taking it upon themselves to tackle their financial/tax tasks themselves, as opposed to handing over these important fiscal responsibilities to a trained tax and accounting business. With more and more..." link="/blog/page4/business-taxes-accounting-make-sense"/>

        <BlogSections title="CRA Targeting Contractors In The Construction Industry" subtitle="By: Fraser Simpson" text="Special audits have confirmed the pervasiveness of tax evaders in the construction industry, and the CRA is cracking down The Canada Revenue Agency’s continuing campaign against the underground economy has come to roost in small-town Canada, where special audits have confirmed the pervasiveness of tax evaders...
" link="/blog/page4/cra-targeting-contractors-construction-industry"/>

        <BlogSections title="CRA Aggressively Going After Taxpayers... What's Next?" subtitle="By: Fraser Simpson" text="From April 1, 2012 to March 31, 2017, the CRA convicted 408 individuals and businesses. This involved approximately $122 million in federal tax evaded and court sentences totaling $44 million in court fines, and 3103 months in jail. Between 2006 and 2017, 75 tax scheme promoters..." link="/blog/page4/cra-aggressively-going-taxpayers-whats-next"/>

        <BlogSections title="New CRA Rules Regarding The Voluntary Disclosure Program To Start January 1, 2018" subtitle="By: Fraser Simpson" text="Since the launch of Voluntary Disclosure Program (VDP) we have been able to help many individuals dealing with a variety of different financial and personal challenges to navigate their way through this program and successfully accomplish getting their taxes up to date. To encourage individuals to..." link="/blog/page4/new-cra-rules-regarding-voluntary-disclosure-program-start-january-1-2018"/>

        <BlogSections title="Changes To The Voluntary Disclosure Program Coming. Time Is Now To File" subtitle="By: Fraser Simpson" text="If you have not filed your taxes in a couple of years (or more) or ever omitted some income from your tax return, you may be interested in proposed changes announced last week to the Canada Revenue Agency’s Voluntary Disclosure Program (VDP). The VDP allows..." link="/blog/page4/changes-voluntary-disclosure-program-coming-time-now-file"/>

        <BlogSections title="Would You Like To Put That Glass Of Water Down?" subtitle="By: Fraser Simpson" text="We all have challenges we face and various coping strategies, good or bad, to deal with them. Recently I was reminded of the glass of water “stress test”. Think about how heavy a 10 oz. glass of water is. Not that heavy, right? But the...
" link="/blog/page4/like-put-glass-water"/>

        <BlogSections title="A $40,000 Tax Bill Became An $8,000 Benefit!" subtitle="By: Fraser Simpson" text="Another program underway is CRA’s criminal investigation program that focuses on the most serious of cases that meet one of the following criteria: significant, and/or material cases of tax evasion with an international element promoters of sophisticated and well organized tax schemes aimed at defrauding..." link="/blog/page4/40000-tax-bill-become-8000-benefit"/>

        <BlogSections title="Revenue Canada's Criminal Investigations Program" subtitle="By: Fraser Simpson" text="Over the past 15 years, we have seen big changes in our economy. The number of Canadian-controlled private corporations (CCPCs) has increased by 50 per cent and makes up a much bigger part of our economy than they did in the early 2000s. For professionals,...
"       link="/blog/page4/revenue-canadas-criminal-investigations-program"/>

        <BlogSections title="If You Think The CRA Wouldn't Come After You, Think Again." subtitle="By: Fraser Simpson" text="At the Tax Mechanic, we have listened to countless stories about individuals thinking that because the CRA hasn’t tracked them down yet, maybe they never will, or they are not claiming a few items that they didn’t report, so why bother now….and on and on...." link="/blog/page4/think-cra-wouldnt-come-think"/>

        <div className="BlogBottomButtons">
        <Link to="/blog/" className="BlogBottomLink"><a href="/#">1</a></Link>
        <Link to="/blog/page2" className="BlogBottomLink"><a href="/#">2</a></Link>
        <Link to="/blog/page3" className="BlogBottomLink"><a href="/#">3</a></Link>
        <Link to="/blog/page4" className="BlogBottomLink"><a href="/#" className="BlogButtonActive">4</a></Link>
        <Link to="/blog/page5" className="BlogBottomLink"><a href="/#">5</a></Link>
        </div>
        </div>
    )
}
