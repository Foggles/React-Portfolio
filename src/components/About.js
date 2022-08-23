import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

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
            <Row>
                <Col>
                    <a target="_blank" href="https://open.spotify.com/album/3wcUzYTceq0YOWvSRF5tc4?si=5YylO0XMRy2NIyY1Aw1pjQ">
                        <Image src="https://is4-ssl.mzstatic.com/image/thumb/Music2/v4/52/85/93/5285933d-8a0f-6604-4a25-0de6f05b7a1f/039841519228.jpg/600x600bb.jpg" alt="Entrails - Raging Death" />
                    </a>
                </Col>
                <Col>
                    <a target="_blank" href="https://open.spotify.com/album/4PdSi8M7cYh7MIZKrhU2qx?si=zuGegAnVT-m8A7DD2vn7-g">
                        <Image src="https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/cf/73/0c/cf730c7d-326a-4a9c-96e8-40e31f12f152/artwork.jpg/600x600bb.jpg" alt="Crypt Crawler - To The Grave" />
                    </a>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a target="_blank" href="https://open.spotify.com/album/1aGapZGHBovnmhwqVNI6JZ?si=HgMfa7DiT2KTBtASrRaN5Q">
                        <Image src="https://is1-ssl.mzstatic.com/image/thumb/Features124/v4/73/06/19/73061928-34a2-6462-963a-039203d507fe/dj.cloeijsr.png/600x600bb.jpg" alt="Metallica - Kill 'Em All" />
                    </a>
                </Col>
                <Col>
                    <a target="_blank" href="https://open.spotify.com/album/2D1DzQxd2Lgwtj1xVGpOD0?si=9vzSvBA7QTa6LQg-FUwmGQ">
                        <Image src="https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/3d/70/89/3d708963-e27d-451c-f7ce-137e68c922fb/194491638481.jpg/600x600bb.jpg" alt="The Chats - Get This In Ya" />
                    </a>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a target="_blank" href="https://open.spotify.com/album/0qaLL09EtF1hiUis7PRvaJ?si=zfLV66OvRiaq0Hdv4ubXiw">
                        <Image src="https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/bd/18/12/bd181215-9466-c6be-b01c-5fe10fe422f3/00602547895035.rgb.jpg/600x600bb.jpg" alt="Megadeth - Rust in Peace" />
                    </a>
                </Col>
                <Col>
                    <a target="_blank" href="https://open.spotify.com/album/17DKdWLitnU01P627Dt2Ia?si=S1pyJ5kMRGeJQDlw2SPFug">
                        <Image src="https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/a2/3d/50/a23d50ca-446e-101b-5b6b-38bc34b0f766/840588130559.jpg/600x600bb.jpg" alt="Warbringer - Weapons of Tomorrow" />
                    </a>
                </Col>
            </Row>

            <Footer />
        </Container>
    )
};