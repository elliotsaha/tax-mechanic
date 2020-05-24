import React from 'react'
import { Card, CardColumns } from "react-bootstrap";
import "../../../Sass/Blog/BlogPages.scss";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
import BlogSections from "../../Misc/BlogSections/BlogSections";

export default function Blog() {
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

        <BlogSections title="Underground Economy in a Pandemic" subtitle="By: Fraser Simpson" text="A white paper is an authoritative document intended to fully inform the reader on a particular topic. It combines expert knowledge and research into a document that argues for a specific solution or recommendation. The white paper allows the reader to understand an issue, solve a problem,..." link="blog/page1/underground-economy-in-a-pandemic"/>

        <BlogSections title="Are you behind several years on filing your taxes?" subtitle="By Fraser Simpson and Christa Lazar" text="By Fraser Simpson and Christa Lazar You may think you are uniquely alone in this situation, but you are not. Falling years behind taxes is more common than you think, due to health, family, loss of work and other issues. As the years go by, the..." link="blog/page1/are-you-behind-several-years-on-filing-your-taxes"/>

        <BlogSections title="In Hiding, Haunted, or Hunted: Tax Terror and how to fix it!" subtitle="By: Fraser Simpson" text="I deal with fear. I also deal with evasion, forgetfulness, procrastination, and a whole host of other human behaviours. But it's the fear that often gets people calling us – and which my biz partner David Harris and I at Tax Mechanic try to address..." link="blog/page1/in-hiding-haunted-or-hunted-tax-terror-and-how-to-fix-it"/>

        <BlogSections title="The Tax Gap - and how it relates to you" subtitle="By: Fraser Simpson" text="As a leading tax consultant in Canada, I deal with the tax gap in some way every single day. And if you’re on our website looking for help, it could mean you’re floundering right in that opening. So just what is the tax gap? It’s the..." link="blog/page1/the-tax-gap-and-how-it-relates-to-you"/>

        <BlogSections title="Everything you need to know about Canada’s Carbon Tax" subtitle="By: Fraser Simpson" text="With the federal elections quickly approaching, every Canadian politician is making sure to give their two cents on the recently instituted carbon tax. One of 2019’s biggest hot topics is the environment, and in particular, how we are going to preserve it. The Liberal’s plan:..." link="blog/page1/everything-you-need-to-know-about-canadas-carbon-tax"/>

        <BlogSections title="Who to hire to solve your tax problem? 3 things to look for" subtitle="By: Fraser Simpson" text="You have a tax problem, and it’s time to deal with it. What do you do?   You hire a professional.   Taxes are like criminal cases in the sense that they’re not the kind of problems you want a homemade solution for- you hire a lawyer to handle..." link="blog/page1/who-to-hire-to-solve-your-tax-problem-3-things-to-look-for"/>

        <BlogSections title="Is your late tax problem eating you away?" subtitle="By: Fraser Simpson" text="Does this describe you? :   You haven’t filed for a few years, life just got in the way. But the more time passes, the more daunting the idea of getting all the taxes filed seems. So you keep not filing. And with all the information online..." link="blog/page1/is-your-late-tax-problem-eating-you-away"/>

        <BlogSections title="Top 5 Tips to Increase your Tax Refund" subtitle="By: Fraser Simpson" text="Tax season. Accountants are stressed, tax lawyers can be heard in the distance whispering about bankruptcy, and everyone else is barely aware tax season is happening in the first place. But one thing people never forget is their refund check, especially when you’re expecting a sizeable..." link="blog/page1/top-5-tips-to-increase-your-tax-refund"/>

        <BlogSections title="Overcoming Stigma and Shame Around the Topic of Taxes" subtitle="By: Fraser Simpson" text="I’ve been doing taxes and specializing in late taxes for over 30 years. When I talk to people about it, I get the same question every time:   “Wow! That’s crazy, how could someone not file their taxes for 10 years? What kind of person would do...
"       link="blog/page1/overcoming-stigma-and-shame-around-the-topic-of-taxes"/>

        <BlogSections title="Artificial Intelligence and the CRA" subtitle="By: Fraser Simpson" text="AI and the CRA The Justice Department has quietly launched an artificial intelligence experiment as the Trudeau government prepares to use such sophisticated software to help make decisions in cases involving immigration, pension benefits and taxes. The 18-month pilot project, which involves the Canada Revenue Agency, was...
"       link="blog/page1/artificial-intelligence-and-the-cra"/>
        
        </div>
    )
}
