import React from 'react';
import "../../Sass/Ebook/Ebook.scss";
import Button from "../Misc/Button/Button";
import { Link } from "react-router-dom";
export default function Ebook() {
    return (
        <div>
            <div className="EbookS1">
            <img className="GradientS1Mobile" src="/img/Ebook/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Ebook/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span>E-book</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="EbookS2">
                <span>Our E-book</span>
                <p>Written by the founder of the Tax Mechanic, this e-book will delve into how to handle the CRA and take your taxes into your own hands! In this book, you will learn about the Voluntary Disclosure program, the CRA, deductibility of expenses, Notional assessments and about GAAR and TCC. 
                    <br />
                <div className="DownloadContainer">
                     <a href="/img/Ebook/HowToDealWithTheCRA.pdf" download>Download eBook</a>
                </div>
                </p>
                    <div className="EbookContainer">
                        <embed className="EbookPDF" src="/img/Ebook/HowToDealWithTheCRA.pdf" type="application/pdf"/>
                    </div>
                    
                
                
            </div>
        </div>
    )
}
