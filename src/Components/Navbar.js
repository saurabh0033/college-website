
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Navbars = () => {
    return (
        <>
            <div className='fix-toggle'>
                <Navbar bg='white' expand="sm" sticky='top' className="mr-16 fs-8 fw-lighter navs">
                    <Container>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle' />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto nav">
                                <Nav.Link href="/">Home</Nav.Link>

                                <NavDropdown title="About" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">About Institute</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Visions ,Missons, Goals</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Contact us</NavDropdown.Item>
                                </NavDropdown>


                                <NavDropdown title="Departments" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="">Computer Engineering</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Entc</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Civil</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">Mechanical</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Auto</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Instru</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.2">Admission section</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Applied Science</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.1">Office</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Workshop</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Facilities" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Girls hostel</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Boys Hostel</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Gym</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Library</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Admission" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">FY Admission</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">DSY admission</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Fee structure</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link href="/notices">Notices</Nav.Link>


                                <NavDropdown title="Placements" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">TPO events</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">TPO activity</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">TPO message</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Collaborations</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link href="/tenders">Tenders</Nav.Link>


                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}

export default Navbars;
