import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Skills = () => (
  <header className="proj-masthead">
      <div className="container h-100 justify-items-center">
        <div className="row justify-content-center mt-5">
          <a href="https://github.com/usagib" target="_blank" rel="noopener noreferrer">
            <button className="btn glow-on-hover btn-med mx-2 mb-5 d-none d-sm-block"> My GitHub</button>
          </a>
          <Link to="/me">
            <button className="btn glow-on-hover btn-med mx-2 d-none d-md-block"> Who am i? </button>
          </Link>
          <Link to="/projects">
            <button className="btn glow-on-hover btn-med mx-2 d-none d-md-block"> My Portfolio </button>
          </Link>
        </div>

        <Carousel fade="true" indicators={false} controls={false} pause={false} interval={3000}>
            <Carousel.Item>
                <div className="row align-items-center" style={{
                  background: 'url(\'/reactmain.png\')',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                }}>
                  <div className="col-lg-5 col-xl-6">
                    <img className="img-fluid fadein mx-5 my-5" src="/service2.png" alt="" />
                  </div>
                  <div className="col-lg-6 text-left skills-text">
                    <span className="skill-title mt-5">
                    FRONTEND
                    </span>
                    <br />
                    <span className="tech-text mt-5">
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
                  width: '100%',
                }}>
                  <div className="col-xl-6 col-lg-5">
                    <img className="img-fluid fadein mx-5 my-5" src="/service3.png" alt="" />
                  </div>
                  <div className="col-lg-6 text-left skills-text">
                    <span className="skill-title mt-5">
                      BACKEND
                    </span>
                    <br />
                    <span className="tech-text mt-5 pr-5">
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
                  width: '100%',
                }}>
                  <div className="col-xl-6 col-lg-5">
                    <img className="img-fluid fadein mx-5 my-5" src="/service4.png" alt="" />
                  </div>
                  <div className="col-lg-6 skills-text pr-5 text-left">
                    <span className="skill-title mt-5">
                      DESIGN
                    </span>
                    <br />
                    <span className="tech-text mt-5">
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
