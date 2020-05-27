import "../../Sass/Footer/Footer.scss";
import React from 'react';
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className="S6">
            <div className="TopS6">
            <p className="p1S6"> 
                Location <br />
                180 John Street <br />
                Toronto, ON <br />
                M5T 1X5 <br />
            </p>

            <p className="p2S6">TEL: 647-499-5693 <br/>
            FAX: 647-494-0169<br/><Link to="/privacypolicy" className="PrivacyPolicyLink">Privacy Policy</Link></p>

            <p className="p3S6">Email: <br/>david@taxmechanic.ca
            </p>
            <div className="img4S6Container">
                <img src="/img/TaxMechanicLogo.png" alt="Logo"/>
            </div>
           
        </div>
        <div className="ButtonContainer">
            <span
            >&copy;
            2020 Tax Filing Services Toronto – Taxmechanic.ca. All Rights Reserved.</span>
        </div>
        
        </div>
    )
}