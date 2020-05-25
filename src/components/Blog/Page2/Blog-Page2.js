import React from 'react'
import { Card, CardColumns } from "react-bootstrap";
import "../../../Sass/Blog/BlogPages.scss";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
import BlogSections from "../../Misc/BlogSections/BlogSections";

export default function BlogPage2() {
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

        <BlogSections title="The CRA is on the warpath!!" subtitle="By: Fraser Simpson" text="In its continued campaign to monitor what it called “compliance risks” in Canada’s hottest housing markets, the Canada Revenue Agency has uncovered nearly $600 million in unpaid taxes in the British Columbia and Ontario real estate segments. CRA auditors, which have been closely examining real estate..." link="blog/page2/the-cra-is-on-the-warpath"/>

        <BlogSections title="Lower your Tax Debt" subtitle="By Fraser Simpson" text="The math is simple. The more money you make, the more taxes you pay. For the nation's highest-income earners – those making more than $220,000 annually – the amount going to the tax man is significant. Some are left with less than 50 cents on the..." link="blog/page2/lower-tax-debt"/>

        <BlogSections title="A tax article that could help change your life for the better" subtitle="By: Fraser Simpson" text="A number of months ago my business partner and tax expert, Fraser Simpson was featured in an article originally that ran in Money Sense and was picked up by Maclean’s. This article has been extremely helpful to those who have read it, so we thought..." link="blog/page2/tax-article-help-change-life-better/"/>

        <BlogSections title="Inside the CRA – Part One" subtitle="By: Fraser Simpson" text="All sources from the Canada Revenue Agency Website, or third-party articles regarding personal experience with the CRA and job analyses. All sources/links are linked in the report for easy access. Any missing information is due to a lack of public access, such as with administrative..." link="blog/page2/inside-cra-part-one"/>

        <BlogSections title="How Many People Dont FIle Their Taxes In Canada?" subtitle="By: Fraser Simpson" text="In 2014, a Forbes published article stated about 7 million U.S. taxpayers failed to file income tax returns each year, while 146 million did file. Yearly, approximately 5% of the population fail to meet their tax obligations to the Internal Revenue Service (IRS). The IRS...
" link="blog/page2/many-people-dont-file-taxes-canada"/>

        <BlogSections title="The Psychology of Why People don’t File Their Taxes" subtitle="By: Fraser Simpson" text="The psychology of why people don’t file their taxes is a complex, often stress-filled, issue. Reasons often come with strong negative emotions. One year of unfiled taxes with the CRA, can turn into two, then three, and before you know it even 10 years.  Serious..." link="blog/page2/psychology-people-dont-file-taxes"/>

        <BlogSections title="Summer Is Here! But Your Bank Account Might Still Be Frozen" subtitle="By: Fraser Simpson" text="Last month we were contacted by Jason and Carol from Alberta. They own a business that has 25 employees, and over the years the company had done very well. A few years ago some health and personal issues changed things significantly. Tax and GST returns..." link="blog/page2/spring-maybe-bank-account-might-still-winter-frozen-cra"/>

        <BlogSections title="If You Have Not Filed Your Taxes In Over 5 Years – read this!" subtitle="By: Fraser Simpson" text="Same Day Action.  Your Quick Solution & Result. Expert help to Minimise Your Tax Risks Eliminate Late Filing Penalty & Interest Simple & Affordable Flat Fees Get Help Anytime 24/7 - Free consultation  Voluntary Disclosure - New Rules Payment of taxes past due The taxpayer must include payment..." link="blog/page2/top-5-tips-to-increase-your-tax-refund"/>

        <BlogSections title="Did You Get A Bonus?" subtitle="By: Fraser Simpson" text="Did you get a bonus? The Canada Revenue Agency (CRA) did for $35,000. Five things you can do right now to get YOUR bonus.   CRA's top executives pocketed an average of $35,000 in performance pay for 2017! Ever try to call the CRA? Performance is not...
"       link="blog/page2/did-you-get-a-bonus"/>

        <BlogSections title="CRA Tax Payment Plans" subtitle="By: Fraser Simpson" text="A payment arrangement is an agreement you make with the CRA. It allows you to make smaller payments over time until you have paid your entire debt including applicable interest. Before you make a payment arrangement, you may need to show that you have tried to...
"       link="blog/page2/cra-tax-payment-plans"/>
        
        <div className="BlogBottomButtons">
        <Link to="/blog/" className="BlogBottomLink"><a href="/#">1</a></Link>
        <Link to="/blog/page2" className="BlogBottomLink"><a href="/#" className="BlogButtonActive">2</a></Link>
        <Link to="/blog/page3" className="BlogBottomLink"><a href="/#">3</a></Link>
        <Link to="/blog/page4" className="BlogBottomLink"><a href="/#">4</a></Link>
        <Link to="/blog/page5" className="BlogBottomLink"><a href="/#">5</a></Link>
        </div>
        </div>
    )
}
