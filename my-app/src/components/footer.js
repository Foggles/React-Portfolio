import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

export default function Footer() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="bottom">
            <Navbar.Brand><h6 style={{opacity: 0.5}}>Jack Fogarty Portfolio 2021</h6></Navbar.Brand>
        </Navbar>
    );
};