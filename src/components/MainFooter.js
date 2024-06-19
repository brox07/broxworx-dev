import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/MainFooter.css';

function MainFooter() {
  return (
    <div>
        <footer className='footer'>
            <Container fluid>
                <Row className='p-4'> 
                    <Col className='mx-5'>
                        <div className='logo'>
                            <img
                                src={process.env.PUBLIC_URL + '/assets/images/bw-logo-main.png'}
                                alt="BroxWorx Logo"
                            />
                            <p>© 2023 Entertainment720, a BroxWorx Company.</p>
                        </div>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                        <h4>Contact</h4>
                        <p>Brandon Broxterman <br/>
                        brox07@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    </div>
  );
};

export default MainFooter;