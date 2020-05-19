import React, { Component } from "react";
import data from "./Service.json";
import { Card, CardDeck } from "react-bootstrap";

const newdata = data.map((data) => {
    return (
        <Card key= {data.id} style={{ width: "18rem", textAlign: "center"}}>
            <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>
                    {data.desc}
                </Card.Text>

                <a className="btn-primary"
                    href={data.name}
                    target="_blank">
                        Download
                </a>
            </Card.Body>
        </Card>
    )
})

export default class Service extends Component {
    render() {
        return (
            <CardDeck>  {newdata}  </CardDeck>
           
        )
    }
}