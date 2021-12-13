import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow, Autoplay, EffectCube } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';
import Image1 from '../images/image1.jpg';
import Image2 from '../images/image2.jpg';
import Image3 from '../images/gcoeara1.png';

SwiperCore.use([Navigation,Autoplay, Pagination, Scrollbar, A11y, EffectCoverflow,EffectCube]);
const data = [
    {
        id: 1,
        image: Image1,
        title: 'शासकीय अभियांत्रिकी व संशोधन महाविद्यालयात कोविड-१९ लसीकरण मोहीम संपन्न',
        description: 'अवसरी :- शासकीय अभियांत्रिकी व संशोधन महाविद्यालय अवसरी (खुर्द) येथे कोविड-१९ प्रतिबंधक लसीकरण मोहीम विद्यार्थ्यांसाठी दि.२९/१0/२0२१ शुक्रवार रोजी संपन्न झाली '
    },
    {
        id: 2,
        image: { Image2 },
        title: 'शासकीय अभियांत्रिकी व संशोधन महाविद्यालयाचे प्र.प्राचार्य प्रा .श्री एस.व्ही. जोशी स्वेच्छा सेवानिवृत्त',
        description: 'अवसरी : शासकीय अभियांत्रिकी व संशोधन महाविद्यालयाचे प्र.प्राचार्य प्रा.श्री एस.व्ही. जोशी दि.0४ ऑक्टोबर २0२१ रोजी स्वेच्छा सेवानिवृत्त झाले.'
    },
    {
        id: 3,
        image: { Image3 },
        title: 'महाविद्यालयातील विस्तारीत इमारतीचा उद्घाटन समारंभ व महाविद्यालय व  सभागृह ईमारतीचा भूमिपूजन समारंभ संपन्न',
        description: 'Expressing a strong support for the new partnership between the two institutes, Prof V. Ramgopal Rao, Director, IIT Awasari said'
    },
    {
        id: 4,
        image: { Image1 },
        title: 'शासकीय अभियांत्रिकी व संशोधन महाविद्यालय व टर्मिनल टेक्नोलॉजीज (आय) प्रा. लि. पुणे यांच्यामध्ये शैक्षणिक सामंजस्य',
        description: 'Expressing a strong support for the new partnership between the two institutes, Prof V. Ramgopal Rao, Director, IIT Awasari said'
    },
    {
        id: 5,
        image: { Image1 },
        title: 'शासकीय अभियांत्रिकी व संशोधन महाविद्यालय, अवसरी (खुर्द) येथील ऑक्सिजन ऑडिट टीम चे प्रेरणा दायी काम',
        description: 'Expressing a strong support for the new partnership between the two institutes, Prof V. Ramgopal Rao, Director, IIT Awasari said'
    },
    {
        id: 6,
        image: { Image1 },
        title: 'आवाहन : सावित्रीबाई फुले पुणे विद्यापीठ',
        description: 'Expressing a strong support for the new partnership between the two institutes, Prof V. Ramgopal Rao, Director, IIT Awasari said'
    },
    {
        id: 7,
        image: { Image1 },
        title: 'शासकीय अभियांत्रिकी व संशोधन महाविद्यालयात ग्लोबल टॅलेंट ट्रॅक पुणे यांच्या द्वारे बुद्धिमत्ता चाचणी बाबत विद्यार्थ्याना ऑनलाइन प्रशिक्षण',
        description: 'Expressing a strong support for the new partnership between the two institutes, Prof V. Ramgopal Rao, Director, IIT Awasari said'
    },

]

const News = () => {
    return (
        <>
            <div className="apps">
                <div id="features">
                    <div class="feature">
                        <div class="main-text">
                            <p>News</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div style={{ width: '80%', marginBottom: '20px' }}>
                        <div style={{ display: 'flex', margin: '0 20%'}}>
                            <div><h3 style={{ marginRight: '15px' }}>LATEST <span style={{ color: 'red' }}>NEWS</span></h3></div>
                            <div style={{ marginTop: '-15px', marginRight: '10px', fontSize: '40px', color: 'gray' }}> <i className="fas fa-newspaper"></i></div>
                            <div> <Button variant="danger" size="sm">VIEW All</Button></div>
                        </div>

                    </div>
                    <Swiper
                        spaceBetween={20}
                        // navigation
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        autoplay={
                            {delay:4000},
                            { disableOnInteraction: false}
                        }
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}

                    >
                        {data.map(news => (
                            <Row md={4} sm={6} xs={12}>
                                <SwiperSlide key={news.id} className="news-slide">
                                    <Col>
                                        <Card>
                                            <Card.Img variant="top" src={data[0].image} />
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
                            <p>News</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ display: 'flex' }}>
                            <div><h3 style={{ marginTop:'5px',marginRight:'5px',fontSize:'15px' }}>LATEST <span style={{ color: 'red' }}>NEWS</span></h3></div>
                            <div style={{ marginRight: '15px',fontSize:'30px',color:'gray',marginTop:'-9px' }}><i className="fas fa-newspaper"></i></div>
                            <div> <Button variant="danger" size="sm">VIEW All</Button></div>
                        </div>
                      
                    </div>
                    <Swiper
                        effect='cube'
                        spaceBetween={20}
                        slidesPerView={1}
                        // navigation
                        pagination={{ clickable: true }}
                        autoplay={
                            {delay:4000},
                           { disableOnInteraction: false}
                        }
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

export default News;
