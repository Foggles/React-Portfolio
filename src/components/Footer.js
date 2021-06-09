import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function Footer() {
    return (
        <Container>
            <br />
            <br />
            <br />
            <Navbar bg="primary" expand="lg" fixed="bottom">
                <Navbar.Brand><h6 style={{ opacity: 0.5 }}>Jack Fogarty Portfolio 2021</h6></Navbar.Brand>
            </Navbar>
        </Container>
    );
};