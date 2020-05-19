import React, { Component } from "react";
import data from "./Service.json";
import { Card, CardColumns } from "react-bootstrap";
import "../../Sass/Service/Service.scss";
import { Link } from "react-router-dom";

const newdata = data.map((data) => {
    return (  
        <Card key={data.link} className="mx-auto m-3">
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Subtitle>{data.sub}</Card.Subtitle>
                <Card.Text>
                    {data.des}
                </Card.Text>

                <Link to={`/services/${data.link}`}><a href="/#">Read More</a></Link>
            </Card.Body>
        </Card>
    )
})

export default class Service extends Component {
    render() {
        return (
            
            <CardColumns className="px-5">  {newdata}  </CardColumns>
        )
    }
}