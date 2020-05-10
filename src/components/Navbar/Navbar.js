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
                    
                
            <ReactBootStrap.Nav.Link><Link to="/" className="NavbarLink"><a>HOME</a></Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><Link to="/ourteam" className="NavbarLink"><a>OUR TEAM</a></Link></ReactBootStrap.Nav.Link> 
            
            <ReactBootStrap.NavDropdown title={<div className="NavbarLink"><a>SERVICES</a></div>}  id="basic-nav-dropdown">
                <div className="DropdownChildren">
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
