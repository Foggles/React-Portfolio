// * Created by Jack Fogarty

// Importing React, FontAwesome and React-Bootstrap components
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

// Importing custom components and FontAwesome icons
import Header from "./Header";
import Footer from "./Footer";
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

// Declaring and defining the Project() function
// props is the parameter for the Project() function
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
                    <Card border="dark">
                        <Card.Img variant="top" src={props.firstImage} />
                        <Card.Body>
                            <Card.Text>
                                {props.firstImageText}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="text-center">
                    <Card border="dark">
                        <Card.Body>
                            <Card.Text>
                                <h6>{props.summaryText}</h6>
                                {props.deploymentLink == null ?
                                    <>
                                        <a class="link" href={props.repositoryLink} target="_blank"><FontAwesomeIcon icon={faGithubSquare} size="8x" /></a>
                                    </> :
                                    <><a class="link" href={props.deploymentLink} target="_blank"><FontAwesomeIcon icon={faServer} size="8x" /></a>
                                        <a class="link" href={props.repositoryLink} target="_blank"><FontAwesomeIcon icon={faGithubSquare} size="8x" /></a>
                                    </>}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card border="dark">
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
                    <Card border="dark">
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