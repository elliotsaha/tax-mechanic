import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import "../../Sass/Navbar/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <React.Fragment>
        <ReactBootStrap.Navbar className="NavbarBackground" expand="xl">
        <ReactBootStrap.Navbar.Brand><Link to="/" className="Logo"><img src="./img/TaxMechanicLogo.png" width="200px" alt="Tax Mechanic Logo"/></Link></ReactBootStrap.Navbar.Brand>
        
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
                    
                
            <ReactBootStrap.Nav.Link><Link to="/" className="NavbarLink"><a className="DropdownElements">HOME</a></Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><Link to="/ourteam" className="NavbarLink"><a className="DropdownElements">OUR TEAM</a></Link></ReactBootStrap.Nav.Link> 
            
            <ReactBootStrap.NavDropdown title={<div className="NavbarLink"><a className="DropdownElements">SERVICES</a></div>}  id="basic-nav-dropdown">
                <div className="DropdownChildren">
                    <ReactBootStrap.NavDropdown.Item><Link to="/services" className="DropdownElementParents"><a className="DropdownElements">ALL SERVICES</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/taxrepresentation" className="DropdownElementParents"><a className="DropdownElements">TAX REPRESENTATION</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/taxappeal" className="DropdownElementParents"><a className="DropdownElements">TAX APPEAL</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/latetaxfilings" className="DropdownElementParents"><a className="DropdownElements">LATE TAX FILINGS</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/taxrelief" className="DropdownElementParents"><a className="DropdownElements">TAX RELIEF</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/voluntarydisclosure" className="DropdownElementParents"><a className="DropdownElements">VOLUNTARY DISCLOSURE</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/taxaudits" className="DropdownElementParents"><a className="DropdownElements">TAX AUDITS</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/taxpaymentplan" className="DropdownElementParents"><a className="DropdownElements">TAX PAYMENT PLAN</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/ongoingsupport" className="DropdownElementParents"><a className="DropdownElements">ONGOING SUPPORT</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/crataxreduction" className="DropdownElementParents"><a className="DropdownElements">CRA TAX REDUCTION</a></Link></ReactBootStrap.NavDropdown.Item>
                </div>
            </ReactBootStrap.NavDropdown>
            <ReactBootStrap.Nav.Link><Link to="/blog" className="NavbarLink"><a>BLOG</a></Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><Link to="ebook" className="NavbarLink"><a>E-BOOK</a></Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><Link to="testimonials" className="NavbarLink"><a>TESTIMONIALS</a></Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><Link to="contact" className="NavbarLink"><a>CONTACT US</a></Link></ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            
        </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>   
        </React.Fragment>
        
        
    )
}
