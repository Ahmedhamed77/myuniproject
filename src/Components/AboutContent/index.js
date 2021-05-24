import React from 'react';
import {Container, Row, Col, Button, Jumbotron} from "react-bootstrap";
import AboutContentStyle from './index.css'
import background from "../../assets/interface_international_relations.jpg";

function AboutContent() {
    return (
        <Container fluid  className='d-flex align-items-center justify-content-center wrapper'>
            <Row className='col-lg-7'>

                <Col className='p-4'>
                    <Jumbotron>
                        <h1 className='top-line'>International Relations</h1>
                        <h2 className='mid-line'>Faculty of Historical and Political Studies</h2>
                        <p className='subtitle-line'>This program is aimed at preparing specialists in International Relations able to speak at least two foreign languages, and with knowledge of international environment, peculiarities of international relations and analytical processes that accompany international activities in government,
                            private and public organizations.</p>
                        <Button className='col-sm-4'>Apply Now</Button>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutContent;
