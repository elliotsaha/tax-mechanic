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
                        <span>Late Tax Filings.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text">
                <span className="Title">
                Late Filings

                </span>
                <p className="para">
                Penalties of late tax filing for individuals and corporations are 5% of your balance owing, plus 1% of your balance owing for each full month that your return is late, to a maximum of 12 months, or the total of 17% in tax penalties. If CRA charged a late-filing tax penalty for any of the preceding three years, current late-filing penalties will be 10% of your current year balance owing, plus 2% of your current year balance owing for each full month that your return is late, to a maximum of 20 months or the total amount penalties of 50%.

                </p>
                <span className="Title">
                Repeated failure to report income penalty

                </span>
                <p className="para">
                If you fail to report an amount on your personal or business return in any year and you also failed to report an amount on your return for any of the preceding three years, you may have to pay a federal and provincial/territorial repeated failure to report income penalty. The federal and provincial/territorial tax penalties are each 10% (or combined 20%) of the amount that you failed to report for repeat failure of reporting income.
 <br/>
                    
                    
                
                </p>
                
                <span className="Title">
                False statements or omissions penalty

                </span>
                <p className="para">
                If CRA believes that you, knowingly or under circumstances amounting to gross negligence, have made a false statement or omission there could be a penalty. The tax penalties are 50% of the understatement of tax and/or the overstatement of credits related to the false statement or omission.

                </p>
                <span className="Title">
                Late Filing Tax Penalties: Consequences of Not Filing Past-Due Returns

                </span>
                <p className="para">
                If you fail to file a tax return, the CRA has the ability to paralyze you financially by charging tax penalties and interests. CRA often use aggressive legal actions to collect the tax debts. Those legal actions Include ,income garnishment, freezing bank accounts etc.

                </p>
            </div>
        </div>
    )
}
