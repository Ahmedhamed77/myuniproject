import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import ReviewStyle from './index.css'

function ReviewSectionContent() {
    return (
        <Container>
            <Row>
                <Col lg={6} md={12} sm={12}>
                    <div className='ContainerReview'>
                        <div className='imgContainer'>
                            <img className='student-img'
                                 src='https://res.cloudinary.com/dqoqpxvzw/image/upload/v1619425173/Person3_mmib82.jpg'/>
                        </div>
                        <div className='reviewsContainer'>
                            <div className='student-name'>
                                <h3 className='name-text'>Bots came</h3>
                                <p className='student-year'>first-year student</p>
                            </div>
                            <div className='student-review'>
                                <p className='review-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium architecto asperiores aspernatur, atque consequatur culpa dicta
                                    culpa in omnis quis.</p>
                            </div>
                            <div className='student-country'>
                                <p className='country-text'>Loas</p>
                            </div>
                        </div>
                    </div>
                </Col>


                <Col lg={6}>
                    <div className='ContainerReview'>
                        <div className='imgContainer'>
                            <img className='student-img'
                                 src='https://res.cloudinary.com/dqoqpxvzw/image/upload/v1619425173/Person2_vvwxe8.jpg'/>
                        </div>
                        <div className='reviewsContainer'>
                            <div className='student-name'>
                                <h3 className='name-text'>Bots came</h3>
                                <p className='student-year'>first-year student</p>
                            </div>
                            <div className='student-review'>
                                <p className='review-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    doloribus eaque ex illo nulla temporibus veritatis voluptatem! Accusamus aliquam
                                    culpa in omnis quis.</p>
                            </div>
                            <div className='student-country'>
                                <p className='country-text'>Loas</p>
                            </div>
                        </div>
                    </div>
                </Col>


                <Col lg={6} md={12} sm={12}>
                    <div className='ContainerReview'>
                        <div className='imgContainer'>
                            <img className='student-img'
                                 src='https://res.cloudinary.com/dqoqpxvzw/image/upload/v1619425173/Person3_mmib82.jpg'/>
                        </div>
                        <div className='reviewsContainer'>
                            <div className='student-name'>
                                <h3 className='name-text'>Bots came</h3>
                                <p className='student-year'>first-year student</p>
                            </div>
                            <div className='student-review'>
                                <p className='review-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium architecto asperiores aspernatur, atque consequatur culpa dicta
                                    culpa in omnis quis.</p>
                            </div>
                            <div className='student-country'>
                                <p className='country-text'>Loas</p>
                            </div>
                        </div>
                    </div>
                </Col>



                <Col lg={6} md={12} sm={12} xs={12}>
                    <div className='ContainerReview'>
                        <div className='imgContainer'>
                            <img className='student-img'
                                 src='https://res.cloudinary.com/dqoqpxvzw/image/upload/v1619425173/Person3_mmib82.jpg'/>
                        </div>
                        <div className='reviewsContainer'>
                            <div className='student-name'>
                                <h3 className='name-text'>Bots came</h3>
                                <p className='student-year'>first-year student</p>
                            </div>
                            <div className='student-review'>
                                <p className='review-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium architecto asperiores aspernatur, atque consequatur culpa dicta
                                    culpa in omnis quis.</p>
                            </div>
                            <div className='student-country'>
                                <p className='country-text'>Loas</p>
                            </div>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    );
}

export default ReviewSectionContent;
