import React from 'react'
import { Card, CardColumns } from "react-bootstrap";
import "../../../Sass/Blog/BlogPages.scss";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
import BlogSections from "../../Misc/BlogSections/BlogSections";

export default function BlogPage5() {
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

        <BlogSections title="House Flippers Beware!" subtitle="By: Fraser Simpson" text="Under Ontario’s 16-point plan to tame housing is point 14 which reads as follows;  Partnering with the Canada Revenue Agency to explore more comprehensive reporting requirements so that correct federal and provincial taxes, including income and sales taxes, are paid on purchases and sales of..." link="/blog/page4/house-flippers-beware"/>

        <BlogSections title="Underground Framer Comes Clean With CRA and Saves $100K" subtitle="By Fraser Simpson" text="John contacted us recently and booked a consultation and this was his tax tale. He had not filed his tax returns for ten years and was depositing the money he was earning as a self-employed contractor framing houses, in his girlfriend’s bank account...." link="/blog/page4/underground-framer-comes-clean-with-cra-as-much-as-100k"/>

        <BlogSections title="When You Get A Notice of Assessment That You Don't Want To Get." subtitle="By: David Harris" text="We all have stories of good and bad in our lives as we get older. I for one have many of both, and would like to share two of those with you. First a very personal one. In 2005 I lost my eldest..." link="/blog/page4/when-you-get-a-notice-of-assessment-that-you-dont-want-to-get"/>

        <BlogSections title="Whitby Resident Jailed And Fined For Tax Evasion" subtitle="By: Fraser Simpson" text="Newmarket, Ontario, January 23, 2017 The Canada Revenue Agency (CRA) announced today that on October 20, 2016, Wolfgang John Wilm of Whitby, Ontario was found guilty in the Ontario Court of Justice in Newmarket, of one count of tax evasion under the Income Tax Act. He was..." link="/blog/page4/whitby-resident-jailed-and-fined-for-tax-evasion"/>

        <BlogSections title="What Are My Chances Of A Tax Audit?" subtitle="By: Fraser Simpson" text="That’s not something CRA discloses. But chances of an audit are far better than most lotteries, because targeting suspicious cases pulls in billions of extra dollars annually. CRA estimates 12.2 per cent of small businesses do not comply with tax law, and nearly half of..." link="/blog/page4/chances-tax-audit"/>

        <div className="BlogBottomButtons">
        <Link to="/blog/" className="BlogBottomLink"><a href="/#">1</a></Link>
        <Link to="/blog/page2" className="BlogBottomLink"><a href="/#">2</a></Link>
        <Link to="/blog/page3" className="BlogBottomLink"><a href="/#">3</a></Link>
        <Link to="/blog/page4" className="BlogBottomLink"><a href="/#">4</a></Link>
        <Link to="/blog/page5" className="BlogBottomLink"><a href="/#" className="BlogButtonActive">5</a></Link>
        </div>
        </div>
    )
}
