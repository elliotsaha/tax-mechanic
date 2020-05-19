import React, { Component } from "react";
import data from "./Services.json";
import * as ReactBootStrap from 'react-bootstrap';
const newdata = data.map((data) => {
    return (
        <ReactBootStrap.Card key= {data.id} style={{ width: "18rem", textAlign: "center"}}>
            <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title>{data.name}</ReactBootStrap.Card.Title>
                <ReactBootStrap.Card.Text>
                    {data.desc}
                </ReactBootStrap.Card.Text>

                <a className="btn-primary"
                    href={data.name}
                    target="_blank">
                        Download
                </a>
            </ReactBootStrap.Card.Body>
        </ReactBootStrap.Card>
    )
})

export default class Service extends Component {
    render() {
        return (
            <ReactBootStrap.CardDeck>  {newdata}  </ReactBootStrap.CardDeck>
           
        )
    }
}