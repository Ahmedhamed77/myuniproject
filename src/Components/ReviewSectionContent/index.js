import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReviewStyle from './index.css'
function ReviewSectionContent() {
    return (
        <Container>
           <Row>
               <Col lg={6}>
                   <div className='ContainerReview'>
                       <div className='imgContainer'>
                           <img src='https://res.cloudinary.com/dqoqpxvzw/image/upload/v1619425173/Person3_mmib82.jpg'/>
                       </div>
                       <div className='reviewsContainer'>
                           <div className='student-name'>
                               Bots came
                           </div>
                           <div className='student-review'>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto asperiores aspernatur, atque consequatur culpa dicta doloribus eaque ex illo nulla temporibus veritatis voluptatem! Accusamus aliquam culpa in omnis quis.
                           </div>
                           <div className='student-country'>
                               Loas
                           </div>
                       </div>
                   </div>
               </Col>
           </Row>
        </Container>
    );
}

export default ReviewSectionContent;
