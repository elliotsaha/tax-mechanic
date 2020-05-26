import React from 'react'
import BlogPages from "../../Misc/BlogPages/BlogPages";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function P2Page3() {
    return (
            <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span style={{whiteSpace: "normal"}}>Tax Tips For AirBNB Owners And Uber Drivers</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <BlogPages date="January 10, 2018" title="Tax Tips For AirBNB Owners And Uber Drivers" subtitle="By: Fraser Simpson" mainPara=
            {
            <div>
            <p>
            If you drove for a ride-hailing service like Uber or rented your home through Airbnb last year to earn extra income, that needs to be reported come tax time.
            <br/><br/>
            However, the good news is that you can deduct related expenses;
            <br/><br/>
            In a simple context, anything that you incurred to provide that income … you can take an expense for the related cost.
            <br/><br/>
            There’s property taxes that apply to both you personally and the room, there’s heat and electricity, there’s water costs, there’s potentially repairs.
            <br/><br/>
            For example, people who rent out their cottage for one month of the year can take one-12th of the property taxes, insurance, and heating-cooling costs and expense those against the income they receive.
            <br/><br/>
            The profit is then rental income that must be reported on a tax return.
            <br/><br/>
            For those who worked as a driver for Uber, that means having kept logs detailing how much they used their cars for personal use and when they drove paying passengers to determine how much may be deducted.
            <br/><br/>
            Record keeping becomes very important.
            <br/><br/>
            Earlier this year, Airbnb agreed to e-mail the 11,000 people in Ontario who list their homes or other spaces for rent on its site and tell them to report the income as part of a pilot project with the province.
            <br/><br/>
            If these companies are American, the information could go from the American company to the IRS, from the IRS to CRA, then all of sudden they’ll know who all the Canadian players are, and they can go ahead and reassess.
            <br/><br/>
            Several years ago, the agency launched a probe reviewing big eBay sellers and obtained information on its so-called Power Sellers.
            <br/><br/>
            If you’re doing business with one of these sorts of new-economy-type of websites and you’re earning income, one way or another, the CRA will eventually find out.
            <br/><br/>
            And if you haven’t declared it, you’re going to be subject to penalties and if the amount is great enough, prosecution.
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
