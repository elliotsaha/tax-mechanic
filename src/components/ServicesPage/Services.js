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
                className="mx-auto m-3"
                className="CardContainer">
            <Card.Body>
                
                <Card.Title style={{ fontWeight: "700" }}>{data.title}</Card.Title>
                <hr />
                <Card.Subtitle className="pb-2" style={{ fontWeight: "600" }}>{data.sub}</Card.Subtitle>
                <Card.Text className="pb-2">
                    {data.des}
                </Card.Text>

                <Link to={`/services/${data.link}`}className="ServiceReadMore"><a href="/#"><span >Read More</span></a></Link>
                  
            </Card.Body>
            </Card>
        
        
    )
})

export default class Service extends Component {
    render() {
        return (
            <div className="Main">
                <div className="S1">
            <img className="GradientS1Mobile" src="./img/OurTeam/TopImgMobile.png" width="100%" alt="Homepage" />
            <img className="GradientS1Comp" src="./img/OurTeam/TopImg.png" width="100%" alt="OurTeam"/>
                <div className="S1TextContainer">
                    <div className="S1Text">
                        <span>Our Services.</span>
                        <div className="ButtonContainerS1">
                        <Button className="Button" text="Book For a Free Consultation Today"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Columns">
                <CardColumns className="px-5" className="card-count">  
                        {newdata}</CardColumns>
            </div>      
            
            </div>
            
        )
    }
}