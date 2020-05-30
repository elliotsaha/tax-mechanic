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
                        <span>Tax Relief.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text">
                <span className="Title">
                Tax Relief Provision

                </span>
                <p className="para">
                CRA normally grants taxpayers relief from penalties and interest due to extraordinary circumstances, actions of the CRA and inability to pay or financial hardship. Penalties and interest may be waived or cancelled in whole or in part where there are circumstances that are beyond the taxpayer’s control.
The following are typical examples of situations that may merit for taxpayer’s relief:
<br/>
                    <div className="bullet">
                        <span>&bull;Natural or man-made disasters such as, floods, fires, hurricanes, civil disturbances
 </span><br />

                        <span>&bull;Serious illness or accidents
</span><br/>

                        <span>&bull;Serious mental or emotional distress, such as a death in the immediate family.
</span>
                
                    </div>
                    
                
                </p>
                <p className="para">
                You can apply under taxpayer relief if actions of the CRA created unfair penalties and interest. CRA makes mistakes all the time! Examples of this would be processing delays, errors in the information you provided and delays in resolving objections and appeals

                </p>
                <span className="Title">
                    Finding a Tax and Accounting Firm.
                </span>
                <p className="para">
                The Taxpayer relief provision enables the taxpayer to settle their account with possible financial relief. The result of successful taxpayer relief includes:
                <div className="bullet">
                        <span>&bull;Waive or cancel penalties and interest,

 </span><br />

                        <span>&bull;Extend the filing-due date for making certain elections or grant permission to amend or revoke certain elections.

</span><br/>

                        <span>&bull;Authorize a refund to an individual even though an income tax return is filed outside the normal filing period;

</span><br />
<span>&bull;Authorize a reassessment or re-determination for an individual beyond the three-year normal reassessment period to allow a refund or a reduction in an amount payable.


</span>
                
                    </div>
                </p>
                <p className="para">
                You have 10 years from the end of the calendar year in which the tax year or fiscal period at issue ended to make a request to the CRA for tax payer relief.

                </p>
            </div>
        </div>
    )
}
