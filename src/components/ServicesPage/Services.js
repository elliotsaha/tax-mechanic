import React, { Component } from "react";
import data from "./Service.json";
import { Card, CardColumns } from "react-bootstrap";
import "../../Sass/Service/Service.scss";
import { Link } from "react-router-dom";
import Button from "../Misc/Button/Button";
const newdata = data.map((data) => {
    return (
        
            <Card 
                key={data.link} 
                className="CardContainer mx-auto m-3">
            <Card.Body>
                
                <Card.Title style={{ fontWeight: "700" }}>{data.title}</Card.Title>
                <hr />
                <Card.Subtitle className="pb-2" style={{ fontWeight: "600" }}>{data.sub}</Card.Subtitle>
                <Card.Text className="pb-2">
                    {data.des}
                </Card.Text>

                <Link to={`/services/${data.link}`}className="ServiceReadMore"><a href="/#" className="stretched-link"><span>Read More
                &#8594;</span></a></Link>
                  
            </Card.Body>
            </Card>
        
        
    )
})

export default class Service extends Component {
    render() {
        return (
            <div className="Main">
                <div className="S1">
            <img className="GradientS1Mobile" src="/img/Services/TopImageMobile.jpg" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="/img/Services/TopImage.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span>Our Services.</span>
                        <div className="ButtonContainerS1">
                        <Link to="/contact"><Button className="Button" text="Book For a Free Consultation Today"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Columns">
                <div className="card-count px-5 ServiceContainer">
                        {newdata}</div>
            </div>      
            
            </div>
            
        )
    }
}