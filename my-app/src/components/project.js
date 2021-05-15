import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Header from "./Header";
import Footer from "./Footer";

export default function Project(props) {
    return (
        <Container>
            <Header />
            <Row className="navBarBug">
                <Col>
                    <h3>{props.text}</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={props.firstImage} />
                        <Card.Body>
                            <Card.Text>
                                {props.firstImageText}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <h6>{props.summaryText}</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={props.secondImage} />
                        <Card.Body>
                            <Card.Text>
                                {props.secondImageText}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={props.thirdImage} />
                        <Card.Body>
                            <Card.Text>
                                {props.thirdImageText}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Footer />
        </Container>
    )
};