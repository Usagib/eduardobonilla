import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Skills = () => (
  <header className="proj-masthead">
      <div className="container h-100 justify-items-center">
        <div className="row justify-content-center pt-5">
          <a href="https://github.com/usagib" target="_blank" rel="noopener noreferrer">
            <button className="btn glow-on-hover btn-med mx-2 mb-xs-3 mb-md-5 d-none d-md-block"> GitHub</button>
          </a>
          <Link to="/me">
            <button className="btn glow-on-hover btn-med mx-2 d-none d-md-block"> Who am i? </button>
          </Link>
          <Link to="/projects">
            <button className="btn glow-on-hover btn-med mx-2 mb-5"> Check my Portfolio </button>
          </Link>
        </div>
        <Carousel fade="true" indicators={false} controls={false} pause={false} interval={3000}>
              <Carousel.Item>
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <span className="project-title mt-5">
                      FRONTEND
                      </span>
                      <br />
                      <span className="tech-text mt-5">
                      HTML5 CSS3 JavaScript React Redux Bootstrap UI/UX Design Wireframing
                      </span>
                    </div>
                    <div className="col-lg-8">
                      <img className="img-fluid fadein" src="/reactmain.png" alt="" />
                    </div>
                  </div>
              </Carousel.Item>
              <Carousel.Item>
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-left">
                      <span className="project-title mt-5">
                        BACKEND
                      </span>
                      <br />
                      <span className="tech-text mt-5 pr-5">
                        Ruby Rails PostgreSQL Database design API development
                      </span>
                    </div>
                    <div className="col-lg-8">
                      <img className="img-fluid fadein" src="/railsmain.png" alt="" />
                    </div>
                  </div>
              </Carousel.Item>
              <Carousel.Item>
                  <div className="row align-items-center">
                    <div className="col-lg-4 text-left">
                      <span className="project-title mt-5">
                        DESIGN
                      </span>
                      <br />
                      <span className="tech-text mt-5">
                        Illustrator Photoshop Inkscape Branding Sketching
                      </span>
                    </div>
                    <div className="col-lg-8">
                      <img className="img-fluid fadein" src="/designmain.png" alt="" />
                    </div>
                  </div>
              </Carousel.Item>
            </Carousel>
        <div className="row justify-items-center d-none d-md-flex">
          <div className="col-lg-2 col-xs-4">
            <img className="img-fluid" src="/service3.png" alt=""/>
          </div>
          <div className="col-lg-2"/>
          <div className="col-lg-2 text-center">
            <img className="img-fluid" src="/service2.png" alt=""/>
          </div>
          <div className="col-lg-2"/>
          <div className="col-lg-2 text-center">
            <img className="img-fluid" src="/service4.png" alt=""/>
          </div>
          <div className="col-lg-2"/>
        </div>
      </div>
  </header>


);

export default Skills;
