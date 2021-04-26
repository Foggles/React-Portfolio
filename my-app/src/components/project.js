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
                        <Card.Img variant="top" src={`../public/projectImages/${props.fileName}/${props.fileName}_1.PNG`} />
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <h6>This is what the project is about.</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Footer />
        </Container>
    )
};