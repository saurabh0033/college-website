import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';
import Image1 from '../images/sample3.png';
import Image2 from '../images/home1.png';
import Image3 from '../images/gcoeara1.png';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]);
const data = [
    {
        id: 1,
        image: '../images/gcoeara1.png',
        title: 'GCOEARA can start from next semester',
        description: 'Expressing a strong support for the new partnership between the two institutes, Prof V. Ramgopal Rao, Director, IIT Awasari said'
    },
    {
        id: 2,
        image: { Image2 },
        title: 'GCOEARA exam start from 2nd week of January',
        description: 'Expressing a strong support for the new partnership between the two institutes, Prof V. Ramgopal Rao, Director, IIT Awasari said'
    },
    {
        id: 3,
        image: { Image3 },
        title: 'GCOEARA can start from next semester',
        description: 'Expressing a strong support for the new partnership between the two institutes, Prof V. Ramgopal Rao, Director, IIT Awasari said'
    },
    {
        id: 4,
        image: { Image1 },
        title: 'GCOEARA can start from next semester',
        description: 'Expressing a strong support for the new partnership between the two institutes, Prof V. Ramgopal Rao, Director, IIT Awasari said'
    },
    {
        id: 5,
        image: { Image1 },
        title: 'GCOEARA can start from next semester',
        description: 'Expressing a strong support for the new partnership between the two institutes, Prof V. Ramgopal Rao, Director, IIT Awasari said'
    },
    {
        id: 6,
        image: { Image1 },
        title: 'GCOEARA exams can held by online mode',
        description: 'Expressing a strong support for the new partnership between the two institutes, Prof V. Ramgopal Rao, Director, IIT Awasari said'
    },
    {
        id: 7,
        image: { Image1 },
        title: 'Now is the time of submission in GCOEARA',
        description: 'Expressing a strong support for the new partnership between the two institutes, Prof V. Ramgopal Rao, Director, IIT Awasari said'
    },

]

const Events = () => {
    return (
        <>
            <div className="apps">
                <div id="features">
                    <div class="feature">
                        <div class="main-text">
                            <p>Events</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div style={{ width: '80%', marginBottom: '20px' }}>
                        <div style={{ display: 'flex',margin: '0 20%'}}>
                            <div><h3 style={{ marginRight: '15px' }}>LATEST <span style={{ color: 'red' }}>EVENTS</span></h3></div>
                            <div style={{ marginTop: '-15px', marginRight: '10px', fontSize: '40px', color: 'gray' }}> <i className="fas fa-users"></i></div>
                            <div> <Button variant="danger" size="sm">VIEW All</Button></div>
                        </div>
                    </div>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        autoplay={
                            {delay:4000},
                            { disableOnInteraction: false}
                        }
                        // navigation
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                    >
                        {data.map(news => (
                            <Row md={4} sm={6} xs={12}>
                                <SwiperSlide key={news.id} className="news-slide">
                                    <Col>
                                        <Card>
                                            <Card.Img variant="top" src={Image2} />
                                            <Card.Body>
                                                <Card.Title>{news.title}</Card.Title>
                                                <Card.Text>
                                                    {news.description}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </SwiperSlide>
                            </Row>
                        ))}

                    </Swiper>
                </div>
            </div>



            <div className="app" style={{ width: '80%', margin: 'auto' }}>
                <div id="features">
                    <div class="feature">
                        <div class="main-text">
                            <p>Events</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex' }}>
                            <div><h3 style={{ marginTop: '5px', marginRight: '5px', fontSize: '15px' }}>LATEST <span style={{ color: 'red' }}>EVENTS</span></h3></div>
                            <div style={{ marginRight: '15px', fontSize: '30px', color: 'gray', marginTop: '-9px' }}><i className="fas fa-users"></i></div>
                            <div> <Button variant="danger" size="sm">VIEW All</Button></div>
                        </div>
                    </div>
                    <Swiper

                        effect='fade'
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={
                            {delay:4000},
                            { disableOnInteraction: false}
                        }
                        // navigation
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                    >
                        {data.map(news => (
                            <Row md={4} sm={6} xs={12}>
                                <SwiperSlide key={news.id} className="news-slide">
                                    <Col>
                                        <Card>
                                            <Card.Img variant="top" src={Image1} />
                                            <Card.Body>
                                                <Card.Title>{news.title}</Card.Title>
                                                <Card.Text>
                                                    {news.description}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </SwiperSlide>
                            </Row>
                        ))}

                    </Swiper>
                </div>
            </div>


        </>
    )
}

export default Events
