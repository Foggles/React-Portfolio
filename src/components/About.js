import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Header from "./Header";
import Footer from "./Footer";

export default function About(props) {
    return (
        <Container>
            <Header />
            <Row className="navBarBug">
                <Col>
                    <Card border="dark">
                        <Card.Img src={props.myPicture} />
                    </Card>
                </Col>
                <Col>
                    <h1>{props.myName}</h1>
                    <p>{props.firstParagraph}</p>
                    <p>{props.secondParagraph}</p>
                </Col>
            </Row>
            <Footer />
        </Container>
    )
};