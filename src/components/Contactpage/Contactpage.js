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
                  started with a team who fosters long term growth.
                  I'm passionate about utilizng creative technologies
                  to expand upon the potential of human creativity.
                  If this aligns with your values, lets connect!
                  
                </p>
                <div>
                <button
                  className="contactbtn"
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/natasha-bartley/");
                  }}
  
                >
                  Say Hey!
                </button>
                </div>
                <span></span>
                

            </div>


            <div className="col-md-5">
                  <div className="contactImage"></div>
                </div>
                

        </div>
      </Container>
    </div>
  );
}

export default Contactpage;
