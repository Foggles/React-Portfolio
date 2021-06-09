import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./Header";
import Footer from "./Footer";

export default function About() {
    return (
        <Container>
            <Header />
            <Row className="navBarBug">
                <Col>
                    <h1>Hello</h1>
                </Col>
            </Row>
            <Footer />
        </Container>
    )
};