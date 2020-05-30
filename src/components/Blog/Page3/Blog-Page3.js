import React from 'react'
import "../../../Sass/Blog/BlogPages.scss";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
import BlogSections from "../../Misc/BlogSections/BlogSections";

export default function BlogPage3() {
    return (
        <div className="BlogMain">
                <div className="BlogS1">
                <img className="GradientS1Mobile" src="/img/Blog/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Blog/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span>Our Blog.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>

        <BlogSections title="The hidden meaning behind a CRA Notice of Assessment?" subtitle="By: Fraser Simpson" text="Understanding a CRA Notice of Assessment You will receive a Notice of Assessment when the Canada Revenue Agency (CRA) receives and processes your tax return (or if the CRA files your return for you-called a notional assessment or arbitrary assessment). The information listed on the Notice of..." link="/blog/page3/hidden-meaning-behind-cra-notice-assessment"/>

        <BlogSections title="Tax Tips For AirBNB Owners And Uber Drivers" subtitle="By Fraser Simpson" text="If you drove for a ride-hailing service like Uber or rented your home through Airbnb last year to earn extra income, that needs to be reported come tax time. However, the good news is that you can deduct related expenses; In a simple context, anything that you..." link="/blog/page3/tax-tips-airbnb-owners-uber-drivers"/>

        <BlogSections title="Voluntary Disclosure Filing Rules Change! Revised Date March 1st" subtitle="By: Fraser Simpson" text="So here we go taxpayers!!  Last chance to take advantage of the Voluntary Disclosure Program (VDP) as we know it. As it stands now the VDP can still be filed under the old rules. Simply, we can ensure that if after you speak with us..." link="/blog/page3/voluntary-disclosure-filing-rules-change-10-days"/>

        <BlogSections title="What Do You Do? PayPal Has Been Ordered To Hand It Over!" subtitle="By: Fraser Simpson" text="So, this sure could change a taxpayer’s view about what to do about their taxes. The Canada Revenue Agency has order PayPal, the online payments company, to hand over information about its Canadian business account holders. On the PayPal website it states it has been served..." link="/blog/page3/paypal-ordered-hand"/>

        <BlogSections title="What Is The Penalty For Filing Taxes Late in Canada" subtitle="By: Fraser Simpson" text="For most Canadians filing taxes on time is a must. But sometimes life throws you a curve ball, or two. That means a tax debt that can eat into your savings account. For most, a tax debt and the resulting CRA penalties and interest are..." link="/blog/page3/cra-penalties-interest"/>

        <BlogSections title="Tax Changes To Small Business Proposed By Liberals. Is This a Good Thing?" subtitle="By: Fraser Simpson" text="Well it has been an interesting week for the Liberal government and their apparent back peddling on tax reforms that have angered small business owners who have said the changes will only hurt the middle-class. The Liberals said they are still sticking with their plans to..." link="/blog/page3/tax-changes-small-business-proposed-liberals-good-thing"/>

        <BlogSections title="Divorce and Taxes" subtitle="By: Fraser Simpson" text="We have had a number of clients who have been or are in the process of getting divorced. It is important to understand how this impacts your income tax, so I asked my business partner, Fraser Simpson some questions about this topic. David: “As you know..." link="/blog/page3/divorce-and-taxes"/>

        <BlogSections title="Not Filing Your Taxes? It Will Be Ineligible For More Than Just Credit." subtitle="By: Fraser Simpson" text="Each year thousands of individuals and businesses don’t file their taxes on time or they just don’t file at all. Most people know that not filing leads to a number of problems. Something that you may or not be aware of that failing to file..." link="/blog/page3/not-filing-taxes-will-ineligible-just-credit"/>

        <BlogSections title="New Rules About Leveling The Playing: Liberals Taking Aim At Voluntary Disclosures" subtitle="By: Fraser Simpson" text="Over the past 15 years, we have seen big changes in our economy. The number of Canadian-controlled private corporations (CCPCs) has increased by 50 per cent and makes up a much bigger part of our economy than they did in the early 2000s. For professionals,...
"       link="/blog/page3/new-rules-leveling-playing-liberals-taking-aim-voluntary-disclosures"/>
        <div className="BlogBottomButtons">
        <Link to="/blog/" className="BlogBottomLink"><a href="/#">1</a></Link>
        <Link to="/blog/page2" className="BlogBottomLink"><a href="/#">2</a></Link>
        <Link to="/blog/page3" className="BlogBottomLink"><a href="/#" className="BlogButtonActive">3</a></Link>
        <Link to="/blog/page4" className="BlogBottomLink"><a href="/#">4</a></Link>
        <Link to="/blog/page5" className="BlogBottomLink"><a href="/#">5</a></Link>
        </div>
        </div>
    )
}
