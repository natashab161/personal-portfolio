import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm a passionate and driven individual with a deep love for creativity, technology, and human connection. With a background in the arts, entertainment, and software engineering, I thrive at the intersection of technology and creative expression.
                        <br/>
                        <br/>
                        I'm currently honing my skills in computer programming through The Flatiron School's software engineering boot camp. Through my work, I aspire to create immersive and engaging experiences that inspire and resonate with individuals worldwide. Join me on this exciting journey as we explore the limitless possibilities of technology and human expression.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                            <Col md={7}>
                                <h3>Languages</h3>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>React</li>
                                    <li>Flask</li>
                                </Col>
                                <Col md={5}>
                                <h3>Tools</h3>
                                    <li>Git & Github</li>
                                    <li>Google Cloud</li>
                                    <li>Amazon Web Services</li>
                                    <li>Adobe Suite</li>
                                    <li>Figma</li>
                                </Col>
                                <br/>
                                <br/>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage