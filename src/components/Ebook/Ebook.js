import React from 'react';
import "../../Sass/Ebook/Ebook.scss";
import Button from "../Misc/Button/Button";
export default function Ebook() {
    return (
        <div>
            <div className="EbookS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span>E-book</span>
                        <div className="ButtonContainerS1">
                        <Button className="Button" text="Book For a Free Consultation Today"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="EbookS2">
                <span>Our E-book</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis esse excepturi non eligendi eveniet quas, voluptates perspiciatis, dolorum sit quae fuga debitis omnis nisi accusantium alias. Itaque, dolore debitis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptas consequuntur doloribus, molestias numquam sed qui consectetur. Nihil, a dicta explicabo, mollitia ipsam incidunt dolore ducimus labore numquam similique aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam, possimus aspernatur quos minus, asperiores non delectus libero qui totam maxime, distinctio culpa provident autem. 
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
