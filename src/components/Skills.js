import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Skills = () => (
  <header className="skill-masthead" id="skills">
    <div className="container-fluid h-100 d-flex align-items-center">
      <Carousel fade="true" indicators={false} controls={false} pause={false} interval={3000}>
          <Carousel.Item>
              <div className="row align-items-center" style={{
                background: 'url(\'/reactmain.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100vh',
              }}>
                <div className="col-lg-6 text-center">
                  <img className="img-fluid fadein" src="/service2.png" alt="" />
                </div>
                <div className="col-lg-6 text-left skills-text">
                  <span className="skill-title mt-5">
                  FRONTEND
                  </span>
                  <br />
                  <span className="skill-text mt-5">
                  HTML5 CSS3 JavaScript React Redux Bootstrap UI/UX Design Wireframing
                  </span>
                </div>
              </div>
          </Carousel.Item>
          <Carousel.Item>
              <div className="row align-items-center" style={{
                background: 'url(\'/railsmain.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
              }}>
                <div className="col-lg-6 text-center">
                  <img className="img-fluid fadein" src="/service3.png" alt="" />
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
              <div className="row align-items-center" style={{
                background: 'url(\'/designmain.png\')',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
              }}>
                <div className="col-lg-6 text-center">
                  <img className="img-fluid fadein" src="/service4.png" alt="" />
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
  </header>
);

export default Skills;
