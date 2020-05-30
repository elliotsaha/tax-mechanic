import React from 'react'
import "../../../Sass/Blog/BlogMisc/BlogSections/BlogSections.scss";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function BlogSections({title, subtitle, text, link}) {
    return (
        <div className="ReactCard">
            <Card className="CardContainer mx-4">
            <Card.Body className="BlogBody">
            <Card.Title className="Title">{title}</Card.Title>
            <Card.Subtitle className="Subtitle mb-2 text-muted">{subtitle}</Card.Subtitle>
                <Card.Text className="Text">
                {text}
                </Card.Text>
                <Link to={link}><a href="/#" className="stretched-link"><span className="ReadMoreBlog">Read More</span></a></Link>
            </Card.Body>
            </Card>   
        </div>
    )
}
