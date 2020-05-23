import React from 'react'
import { Card, CardColumns } from "react-bootstrap";
import "../../Sass/Blog/BlogPages.scss";
import Button from "../Misc/Button/Button";
import { Link } from "react-router-dom";
import BlogSections from "../Misc/BlogSections/BlogSections";

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

        <BlogSections title="Underground Economy in a Pandemic" subtitle="By: Fraser Simpson" text="A white paper is an authoritative document intended to fully inform the reader on a particular topic. It combines expert knowledge and research into a document that argues for a specific solution or recommendation. The white paper allows the reader to understand an issue, solve a problem,..." link="blog/page1/underground-economy-in-a-pandemic"/>

        <BlogSections title="Underground Economy in a Pandemic" subtitle="By: Fraser Simpson" text="A white paper is an authoritative document intended to fully inform the reader on a particular topic. It combines expert knowledge and research into a document that argues for a specific solution or recommendation. The white paper allows the reader to understand an issue, solve a problem,..." link="blog/page1/underground-economy-in-a-pandemic"/>

        <BlogSections title="Underground Economy in a Pandemic" subtitle="By: Fraser Simpson" text="A white paper is an authoritative document intended to fully inform the reader on a particular topic. It combines expert knowledge and research into a document that argues for a specific solution or recommendation. The white paper allows the reader to understand an issue, solve a problem,..." link="blog/page1/underground-economy-in-a-pandemic"/>

        <BlogSections title="Underground Economy in a Pandemic" subtitle="By: Fraser Simpson" text="A white paper is an authoritative document intended to fully inform the reader on a particular topic. It combines expert knowledge and research into a document that argues for a specific solution or recommendation. The white paper allows the reader to understand an issue, solve a problem,..." link="blog/page1/underground-economy-in-a-pandemic"/>

        <BlogSections title="Underground Economy in a Pandemic" subtitle="By: Fraser Simpson" text="A white paper is an authoritative document intended to fully inform the reader on a particular topic. It combines expert knowledge and research into a document that argues for a specific solution or recommendation. The white paper allows the reader to understand an issue, solve a problem,..." link="blog/page1/underground-economy-in-a-pandemic"/>

        <BlogSections title="Underground Economy in a Pandemic" subtitle="By: Fraser Simpson" text="A white paper is an authoritative document intended to fully inform the reader on a particular topic. It combines expert knowledge and research into a document that argues for a specific solution or recommendation. The white paper allows the reader to understand an issue, solve a problem,..." link="blog/page1/underground-economy-in-a-pandemic"/>

        <BlogSections title="Underground Economy in a Pandemic" subtitle="By: Fraser Simpson" text="A white paper is an authoritative document intended to fully inform the reader on a particular topic. It combines expert knowledge and research into a document that argues for a specific solution or recommendation. The white paper allows the reader to understand an issue, solve a problem,..." link="blog/page1/underground-economy-in-a-pandemic"/>
        
        </div>
    )
}
