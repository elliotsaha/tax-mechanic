import React from 'react'
import { Card, CardColumns } from "react-bootstrap";
import "../../Sass/Blog/BlogPages.scss";
import Button from "../Misc/Button/Button";
export default function Blog() {
    return (
        <div className="BlogMain">
                <div className="BlogS1">
            <img className="GradientS1Mobile" src="/img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span>Our Services.</span>
                        <div className="ButtonContainerS1">
                        <Button className="Button" text="Book For a Free Consultation Today"/>
                        </div>
                    </div>
                </div>
            </div>

        <div className="ReactCard">
            <Card className="mx-4">
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>   
        </div>
        
        </div>
    )
}
