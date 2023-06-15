import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Welcome! <span className='wave'> 👋🏽 </span></h2>
            <h2 className='nametext'>I'm Natasha Bartley</h2>
            <span></span>

            <Text />

            <button  className='socailmediabtn' onClick={() => {
              window.open("https://github.com/natashab161");
            }}
            > <AiFillGithub className='icon' />
            </button>


            <button className='socailmediabtn' onClick={() => {
              window.open("https://www.linkedin.com/in/natasha-bartley/");
            }}
            ><FaLinkedinIn className='icon' />
            </button>

            <button onClick={() => {
              window.open("https://www.instagram.com/natasha.b161/");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
        
          </Col>

          <Col md={4}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home