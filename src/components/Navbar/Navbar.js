import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import "../../Sass/Navbar/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <React.Fragment>
        <ReactBootStrap.Navbar className="NavbarBackground" expand="lg">
        <ReactBootStrap.Navbar.Brand><Link to="/" className="Logo"><img src="./img/TaxMechanicLogo.png" width="200px" alt="Tax Mechanic Logo"/></Link></ReactBootStrap.Navbar.Brand>
        
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
                    
                
            <ReactBootStrap.Nav.Link><Link to="/" className="NavbarLink">HOME</Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><Link to="/ourteam" className="NavbarLink">OUR TEAM</Link></ReactBootStrap.Nav.Link> 
            
            <ReactBootStrap.NavDropdown title={<span className="NavbarLink">SERVICES</span>}  id="basic-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item><Link to="/services">ALL SERVICES</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item><Link to="/services/taxrepresentation">TAX REPRESENTATION</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/services/taxappeal">TAX APPEAL</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/services/latetaxfilings">LATE TAX FILINGS</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/services/taxrelief">TAX RELIEF</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/services/voluntarydisclosure">VOLUNTARY DISCLOSURE</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/services/taxaudits">TAX AUDITS</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/services/taxpaymentplan">TAX PAYMENT PLAN</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/services/ongoingsupport">ONGOING SUPPORT</Link></ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item><Link to="/services/crataxreduction">CRA TAX REDUCTION</Link></ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.Nav.Link><Link to="/blog" className="NavbarLink">BLOG</Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><Link to="ebook" className="NavbarLink">E-BOOK</Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><Link to="testimonials" className="NavbarLink">TESTIMONIALS</Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><Link to="contact" className="NavbarLink">CONTACT US</Link></ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            
        </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>   
        </React.Fragment>
        
        
    )
}
