import React from 'react';
import { Button } from 'react-bootstrap';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// images
import Img1 from '../images/home-1.jpg';
import Img2 from '../images/home-2.jpg';
import Img3 from '../images/home-3.jpg';
import Img4 from '../images/home-5.jpg';
import Img5 from '../images/home-6.jpg';
import Img6 from '../images/home-7.jpg';
import Img7 from '../images/home-8.jpg';
import Img8 from '../images/home-9.jpg';
import '../index.css';

const Faq = () => {
    return (
        <>
            <div id="features">
                <div class="feature">
                    <div class="main-text">
                        <p>COLLEGE CAMPUS</p>

                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <div style={{ width: '100%', marginBottom: '-40px' }}>
                            <div className='faq-cont'>
                                <div className='faq-txt'><h3 style={{ marginRight: '15px' }}>All <span style={{ color: 'red' }}>FAQs</span></h3></div>
                                <div className='faq-icon' style={{ marginTop: '-15px', marginRight: '10px', fontSize: '40px', color: 'gray' }}><i className="fas fa-question-circle" /></div>
                                <div className='faq-btn'> <Button variant="danger" size="sm">VIEW All</Button></div>
                            </div>
                        </div>

                        <div className="wrapper">
                            <div className="accordion_container">
                                <div className="accordion_header">
                                    FAQs  <i className="fas fa-question"></i>
                                </div>
                                <div class="accordion_body">
                                    <ul>
                                        <li>
                                            <div className="li_qus">
                                                <div className="btn"></div>
                                                <p>Whome to contact for Admission? </p>
                                            </div>
                                            <div className="li_ans">
                                                <div>
                                                    <h3>prof. Kakade sir</h3>
                                                    <p>Joint Register</p>
                                                    <p>+91 29301-00011</p>
                                                    <p><span style={{ color: 'red' }}>gcoeara</span>@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li_qus">
                                                <div className="btn"></div>
                                                <p>How to pay collage fee online?</p>
                                            </div>
                                            <div className="li_ans">
                                                It's a demo after we will add the all information.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li_qus">
                                                <div className="btn"></div>
                                                <p>Whome to contact for faculty recruitment? </p>
                                            </div>
                                            <div class="li_ans">
                                                It's a demo after we will add the all information so don't worry
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li_qus">
                                                <div className="btn"></div>
                                                <p>How to contact to the Exam dept?</p>
                                            </div>
                                            <div className="li_ans">
                                                <div>
                                                    <h3>prof. -</h3>
                                                    <p>Joint Register</p>
                                                    <p>+91 23491-07181</p>
                                                    <p><span style={{ color: 'red' }}>abcdefg45</span>@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li_qus">
                                                <div className="btn"></div>
                                                <p>How to contact for office?</p>
                                            </div>
                                            <div className="li_ans">
                                                <div>
                                                    <h3>DPU Section</h3>
                                                    <p>Joint Register</p>
                                                    <p>1234567890</p>
                                                    <p><span style={{ color: 'red' }}>abcdefg45</span>@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li_qus">
                                                <div class="btn"></div>
                                                <p>How to contact for office?</p>
                                            </div>
                                            <div className="li_ans">
                                                <div>
                                                    <h3>DPU Section</h3>
                                                    <p>Joint Register</p>
                                                    <p>1234567890</p>
                                                    <p><span style={{ color: 'red' }}>abcdefg45</span>@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="li_qus">
                                                <div className="btn"></div>
                                                <p>How to contact for office?</p>
                                            </div>
                                            <div className="li_ans">
                                                <div>
                                                    <h3>DPU Section</h3>
                                                    <p>Joint Register</p>
                                                    <p>1234567890</p>
                                                    <p><span style={{ color: 'red' }}>abcdefg45</span>@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-1'>

                    </div>
                    <div className='col-md-6'>
                        <div style={{ width: '100%', marginBottom: '-40px' }}>
                            <div className='faq-cont'>
                                <div className='faq-txt'><h3 style={{ marginRight: '15px' }}><span style={{ color: 'red' }}>GALLERY</span></h3></div>
                                <div className='faq-icon' style={{ marginTop: '-15px', marginRight: '10px', fontSize: '40px', color: 'gray' }}> <i className="fas fa-images"></i></div>
                                <div className='faq-btn'> <Button variant="danger" size="sm">VIEW All</Button></div>
                            </div>
                        </div>

                        <div className='gallery'>
                            <Carousel infiniteLoop autoPlay>
                                <div className='image'>
                                    <img src={Img1} alt='image' />
                                </div>
                                <div className='image'>
                                    <img src={Img2} alt='image' />
                                </div>
                                <div className='image'>
                                    <img src={Img3} alt='image' />
                                </div>
                                <div className='image'>
                                    <img src={Img4} alt='image' />
                                </div>
                                <div className='image'>
                                    <img src={Img5} alt='image' />
                                </div>
                                <div className='image'>
                                    <img src={Img6} alt='image' />
                                </div>
                                <div className='image'>
                                    <img src={Img7} alt='image' />
                                </div>
                                <div className='image'>
                                    <img src={Img8} alt='image' />
                                </div>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq;
