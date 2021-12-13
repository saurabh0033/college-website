import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Cards = () => {
  return (
    <>
      <div className='cardHead'>
        <Row>
          <Col className='box box1' md={3} xs={6} sm={6}>
            <h2>Research</h2>
            <i className="fab fa-medapps"></i>
            <p>Mapping of Innovations, Experiments </p>
          </Col>
          <Col className='box box2' md={3} xs={6} sm={6}>
            <h2>News</h2>
            <i className="fas fa-newspaper"></i>
            <p>Latest News in our Institue</p>
          </Col>
          <Col className='box box3' md={3} xs={6} sm={6}>
           <h2> Events</h2>
           <i className="fas fa-users"></i>
           <p>Events Beyond the Classroom</p>
          </Col>
          <Col className='box box4' md={3} xs={6} sm={6}>
            <h2>Campus Life</h2>
            <i className="fas fa-user-graduate"></i>
            <p>Campus Stories and some Experiences</p>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Cards;
