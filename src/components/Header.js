// * Created by Jack Fogarty

import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
    return (
        <Navbar variant="light" bg="success" expand="lg" fixed="top">
            <Navbar.Brand href="/">Jack Fogarty Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">About</Nav.Link>
                    <Nav.Link href="/project1">Project 1</Nav.Link>
                    <Nav.Link href="/project2">Project 2</Nav.Link>
                    <Nav.Link href="/project3">Project 3</Nav.Link>
                    <NavDropdown title="Other Projects" id="basic-nav-dropdown">
                        <Nav.Link href="/readme_generator">README Generator</Nav.Link>
                        <Nav.Link href="/password_generator">Password Generator</Nav.Link>
                        <Nav.Link href="/team_profile_generator">Team Profile Generator</Nav.Link>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};