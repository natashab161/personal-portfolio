import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container className="container">
        <div className="textbackground row">
            <div className="col-md-7">
              <h3 className="aboutmetext">
                Let's connect!
              </h3>
                <p className="aboutdetails">
                  I’m currently looking to get my software engineering career
                  started with a company that fosters long term growth!
                  I'm passionate about utilizng creative technologies
                  <br /> to expand upon the potential of human creativity 
                  <br /> to expand upon the potential of human creativity <br />
                  
                </p>
                <button
                  className="contactbtn"
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/natasha-bartley/");
                  }}
                >
                  Say Hello
                </button>
                <span></span>
                
                <div className="col-md-5">
                  <div className="contactImage"></div>
                </div>
                

            </div>
        </div>
      </Container>
    </div>
  );
}

export default Contactpage;
