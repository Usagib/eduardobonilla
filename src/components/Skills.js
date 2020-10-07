import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Skills = () => (
  <header className="masthead" id="home">
    <div className="container mt-5">
      <span className="project-title">My Skills</span>
    </div>
    <div className="container-fluid d-flex align-items-center mt-3">
        <Carousel fade="true">
          <Carousel.Item>
              <div className="row" style={{
                background: 'url(\'eduardobonilla/reactmain.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 'auto',
                width: '100vw',
              }}>
                <div className="col-lg-6">
                  <img className="img-fluid fadein" src="eduardobonilla/service2.png" alt="" />
                </div>
                <div className="col-lg-6 text-left skills-text">
                  <span className="skill-title mt-5">
                    FRONTEND
                  </span>
                  <br />
                  <span className="skill-text mt-5 pr-5">
                    HTML5 CSS3 JavaScript React Redux Bootstrap UI/UX Design Wireframing
                  </span>
                </div>
              </div>
          </Carousel.Item>
          <Carousel.Item>
              <div className="row" style={{
                background: 'url(\'eduardobonilla/railsmain.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 'auto',
                width: '100vw',
              }}>
                <div className="col-lg-6">
                  <img className="img-fluid fadein" src="eduardobonilla/service3.png" alt="" />
                </div>
                <div className="col-lg-6 text-left skills-text">
                  <span className="skill-title mt-5">
                    BACKEND
                  </span>
                  <br />
                  <span className="skill-text mt-5 pr-5">
                    Ruby Rails PostgreSQL Database design API development
                  </span>
                </div>
              </div>
          </Carousel.Item>
          <Carousel.Item>
              <div className="row" style={{
                background: 'url(\'eduardobonilla/designmain.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 'auto',
                width: '100vw',
              }}>
                <div className="col-lg-6">
                  <img className="img-fluid fadein" src="eduardobonilla/service4.png" alt="" />
                </div>
                <div className="col-lg-6 skills-text pr-5 text-left">
                  <span className="skill-title mt-5">
                    DESIGN
                  </span>
                  <br />
                  <span className="skill-text mt-5">
                    Illustrator Photoshop Inkscape Branding Sketching
                  </span>
                </div>
              </div>
          </Carousel.Item>
        </Carousel>
    </div>
    <div className="container align-items-center mt-3">
      <Link to="/projects">
        <button className="btn btn-next mx-5 fadein fadein-first">Visit my Portfolio</button>
      </Link>
      <a href="https://docs.google.com/document/d/1wDLnDSzeLd2c6ecFKbzIU7bDV_pzq7mbRcmEACvWQLY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
        <button className="btn btn-next mx-5 fadein fadein-second">Download my Resume</button>
      </a>
      <Link to="/me">
        <button className="btn btn-next mx-5 fadein fadein-third">Get to know Me</button>
      </Link>
    </div>
  </header>
);

export default Skills;
