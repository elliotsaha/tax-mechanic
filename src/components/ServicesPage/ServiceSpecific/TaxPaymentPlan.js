import React from 'react'
import "../../../Sass/Service/ServiceSpecific/ServiceSpecific.scss";
import Button from "../../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function TaxRepresentation() {
    return (
        <div>
             <div className="Service">
             <img className="GradientS1Mobile" src="/img/Services/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Services/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span>Tax Payment Plan.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text">
                <span className="Title">
                Tax Payment Plan
                </span>
                <p className="para">
                The CRA has many ways to retrieve the tax owing and the CRA will not hesitate to follow through on aggressive collections practices even take legal actions against you in the absence of a CRA tax payment plan. The CRA can put liens against a delinquent taxpayer’s property, they can direct sheriffs to sell taxpayers’ assets, freeze taxpayer’s bank accounts or they can garnish income. Dealing with taxes owing or negotiating a CRA tax payment plan with a  CRA collection agent can be intimidating..
<br/><br/>
No one will be able to get away with not paying their taxes. The Tax Mechanic has to the experience and negotiating skills necessary to help minimize the financial burden.
                </p>
                <span className="Title">
                What you need to do immediately to get a CRA tax payment plan negotiated?
                </span>
                <p className="para">
                If you have tax debts that are beyond your means and you are being pursued by CRA then it is time for you to contact the Tax Mechanic. We deal with the CRA every day, and can present your case to the CRA on its own merits, with full knowledge of all the rules and regulations.

                </p>
                
            </div>
        </div>
    )
}
