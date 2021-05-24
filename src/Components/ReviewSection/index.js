import React from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import ReviewSectionStyle from './index.css'

const ReviewSection = () => {
    return (

        <>

            <Container>
                <Row>
                    <Col md={12}>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <Carousel>
                                <Carousel.Item>
                                    <Row>
                                        <Col lg={4} md={12} sm={12}>
                                            <div className='single-box'>
                                                <div className='quote-icon'>Qoute icon here</div>
                                                <div className='image-text'>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                                                        ea quas quibusdam quos recusandae vitae! Ad, at quas. Blanditiis
                                                        exercitationem hic,
                                                        illo minus molestias natus porro sed vero voluptas
                                                        voluptates!</p>
                                                </div>
                                                <div className='image-area'>
                                                    <img
                                                        src='https://picsum.photos/800/400?text=Third slide&bg=20232a'/>
                                                    <div className='student'>
                                                        <h6 className='name'>ahmed</h6>
                                                        <p className='country'>Egypt,Cairo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={4} md={12} sm={12}>
                                            <div className='single-box'>
                                                <div className='quote-icon'>Qoute icon here</div>

                                                <div className='image-text'>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                                                        ea quas quibusdam quos recusandae vitae! Ad, at quas. Blanditiis
                                                        exercitationem hic,
                                                        illo minus molestias natus porro sed vero voluptas
                                                        voluptates!</p>
                                                </div>

                                                <div className='image-area'>
                                                    <img
                                                        src='https://picsum.photos/800/400?text=Third slide&bg=20232a'/>

                                                    <div className='student'>
                                                        <h6 className='name'>ahmed</h6>
                                                        <p className='country'>Loas,SINGAPOREA</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </Col>

                                        <Col lg={4} md={12} sm={12}>
                                            <div className='single-box'>
                                                <div className='quote-icon'>Qoute icon here</div>

                                                <div className='image-text'>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                                                        ea quas quibusdam quos recusandae vitae! Ad, at quas. Blanditiis
                                                        exercitationem hic,
                                                        illo minus molestias natus porro sed vero voluptas
                                                        voluptates!</p>
                                                </div>

                                                <div className='image-area'>
                                                    <img
                                                        src='https://picsum.photos/800/400?text=Third slide&bg=20232a'/>
                                                    <div className='student'>
                                                        <h6 className='name'>ahmed</h6>
                                                        <p className='country'>Egypt,Cairo</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <Row>
                                        <Col lg={4} md={12} sm={12}>
                                            <div className='single-box'>
                                                <div className='quote-icon'>Qoute icon here</div>
                                                <div className='image-text'>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                                                        ea quas quibusdam quos recusandae vitae! Ad, at quas. Blanditiis
                                                        exercitationem hic,
                                                        illo minus molestias natus porro sed vero voluptas
                                                        voluptates!</p>
                                                </div>
                                                <div className='image-area'>
                                                    <img
                                                        src='https://picsum.photos/800/400?text=Third slide&bg=20232a'/>
                                                    <div className='student'>
                                                        <h3 className='name'>ahmed</h3>
                                                        <p className='country'>Egypt,Cairo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={4} md={12} sm={12}>
                                            <div className='single-box'>
                                                <div className='quote-icon'>Qoute icon here</div>

                                                <div className='image-text'>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                                                        ea quas quibusdam quos recusandae vitae! Ad, at quas. Blanditiis
                                                        exercitationem hic,
                                                        illo minus molestias natus porro sed vero voluptas
                                                        voluptates!</p>
                                                </div>

                                                <div className='image-area'>
                                                    <img
                                                        src='https://picsum.photos/800/400?text=Third slide&bg=20232a'/>

                                                    <div className='student'>
                                                        <h3 className='name'>ahmed</h3>
                                                        <p className='country'>Egypt,Cairo</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </Col>

                                       <Col lg={4} md={12} sm={12}>
                                            <div className='single-box'>
                                                <div className='quote-icon'>Qoute icon here</div>

                                                <div className='image-text'>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                                                        ea quas quibusdam quos recusandae vitae! Ad, at quas. Blanditiis
                                                        exercitationem hic,
                                                        illo minus molestias natus porro sed vero voluptas
                                                        voluptates!</p>
                                                </div>

                                                <div className='image-area'>
                                                    <img
                                                        src='https://picsum.photos/800/400?text=Third slide&bg=20232a'/>
                                                    <div className='student'>
                                                        <h3 className='name'>ahmed</h3>
                                                        <p className='country'>Egypt,Cairo</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </Col>
                                    </Row>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ReviewSection;
