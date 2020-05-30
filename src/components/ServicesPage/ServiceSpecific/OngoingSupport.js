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
                        <span>Ongoing Support.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text">
                <span className="Title">
                When your tax issues are resolved, we can provide you with on-going support.
                </span>
                <p className="para">
                The last thing you want is to find yourself back in the same place. Filing returns in a timely manner, proper reporting and compliance ensure that CRA will not be a thorn in your side!
                <br/><br/>
                There is always a chance you will be audited but if your records are in order and you are well represented this should not be a problem.  If your peace of mind is important to you, if not worrying about CRA are important to you, then contact us.
                </p>
                
            </div>
        </div>
    )
}
