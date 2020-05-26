import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P7Page3() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Divorce And Taxes</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="October 13, 2017" title="Divorce And Taxes" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            We have had a number of clients who have been or are in the process of getting divorced. It is important to understand how this impacts your income tax, so I asked my business partner, Fraser Simpson some questions about this topic.
            <br/><br/>
            David: “As you know we deal with a variety of different tax scenarios, and one of the variables that often comes into play as you know is divorce/separation. Failing to report any changes of marital status can cost you, what are the tax ramifications?”
            <br/><br/>
            Fraser: “Certain tax credits, like the child tax credit and HST credit are calculated based on total household income. If you are married or common-law and still file as a single person, you could end up receiving credits you are not eligible for. This could result in money owing back to the CRA along with interest of potential penalties.”
            <br/><br/>
            David: “Is there an up-side if you find you’re separated/divorced when it comes to taxes?”
            <br/><br/>
            Fraser: “Yes there could be.” “For example your household income has probably gone down and there could be tax credits you weren’t able to receive before. Child support does not count as income to the person receiving it, nor is it tax deducible for the person who is paying it, but spousal support is tax-deducible for the person who is paying it. However, it is important to have the proper documentation to support this claim in case you get audited.”
            <br/><br/>
            David: “What about joint assets or income generated from shared investment accounts?”
            <br/><br/>
            Fraser: “Most times this is in fact the case and it is so important to hire a tax professional such as us to ensure everything is handled properly. “
            <br/><br/>
            David: “What if you still live in the same house but are legally separated. Are you considered separated in in the eyes of the CRA?”
            <br/><br/>
            Fraser: It is possible to be separated in the eyes of the CRA and still live in the same household, but this can only happen if there are separate living quarters. If you continue to share parenting and financial responsibilities, CRA will not consider a separation to occur for the purpose of administering the Canada Tax Benefit or HST credit.
            <br/><br/>
            David: “What about finalizing a divorce. Do your tax returns have to be up to date?”
            <br/><br/>
            Fraser: Absolutely, a divorce can’t be finalized until all tax returns are filed.
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
