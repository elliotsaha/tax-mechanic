import React, {useState} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import "../../Sass/Navbar/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
        const [expanded, setExpanded] = useState(false);
        return (
        <ReactBootStrap.Container>
        <ReactBootStrap.Navbar className="NavbarBackground" expand="xl" fixed="top" expanded={expanded}>
        <ReactBootStrap.Navbar.Brand><Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} to="/" className="Logo"><img src="/img/TaxMechanicLogo.png" width="200px" alt="Tax Mechanic Logo"/></Link></ReactBootStrap.Navbar.Brand>
        
        <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
        <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
                    
                
            <ReactBootStrap.Nav.Link><Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} to="/" className="NavbarLink"><a href="/#">HOME</a></Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} to="/ourteam/" className="NavbarLink"><a href="/#">OUR TEAM</a></Link></ReactBootStrap.Nav.Link>
            <div className="DefaultServices">
                <ReactBootStrap.NavDropdown title={<div className="NavbarLink"><a href="/#">SERVICES</a></div>}  id="basic-nav-dropdown">
                <div className="DropdownChildren">
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/" className="DropdownElementParents"><a href="/#" className="DropdownElements">ALL SERVICES</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Divider />
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/tax-representation/" className="DropdownElementParents"><a href="/#"className="DropdownElements">TAX REPRESENTATION</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/tax-appeal/" className="DropdownElementParents"><a href="/#"className="DropdownElements">TAX APPEAL</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/late-tax-filings/" className="DropdownElementParents"><a href="/#"className="DropdownElements">LATE TAX FILINGS</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/tax-relief/" className="DropdownElementParents"><a href="/#"className="DropdownElements">TAX RELIEF</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/voluntary-disclosure/" className="DropdownElementParents"><a href="/#"className="DropdownElements">VOLUNTARY DISCLOSURE</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/tax-audits/" className="DropdownElementParents"><a href="/#"className="DropdownElements">TAX AUDITS</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/tax-payment-plan/" className="DropdownElementParents"><a href="/#"className="DropdownElements">TAX PAYMENT PLAN</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/ongoing-support/" className="DropdownElementParents"><a href="/#"className="DropdownElements">ONGOING SUPPORT</a></Link></ReactBootStrap.NavDropdown.Item>
                    <ReactBootStrap.NavDropdown.Item><Link to="/services/cra-tax-reduction/" className="DropdownElementParents"><a href="/#"className="DropdownElements">CRA TAX REDUCTION</a></Link></ReactBootStrap.NavDropdown.Item>
                </div>
            </ReactBootStrap.NavDropdown>
            </div> 
            
            <div className="MobileServices"><ReactBootStrap.Nav.Link><Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} to="/services" className="NavbarLink"><a href="/#"className="DropdownElements">SERVICES</a></Link></ReactBootStrap.Nav.Link></div>
            <ReactBootStrap.Nav.Link><Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} to="/blog/" className="NavbarLink"><a href="/#">BLOG</a></Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} to="/e-book/" className="NavbarLink"><a href="/#">E-BOOK</a></Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} to="/testimonials/" className="NavbarLink"><a href="/#">TESTIMONIALS</a></Link></ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link><Link onClick={() => setTimeout(() => {setExpanded(false)}, 150)} to="/contact/" className="NavbarLink"><a href="/#">CONTACT US</a></Link></ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            
        </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>   
        </ReactBootStrap.Container>
        
        
    )
     
}
