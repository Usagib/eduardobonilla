import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Projects = () => (
  <header className="proj-masthead">
      <div className="container h-100 justify-items-center">
        <div className="row justify-content-center mt-5">
          <a href="https://github.com/usagib" target="_blank" rel="noopener noreferrer">
            <button className="btn glow-on-hover btn-med mx-2 mb-5 d-none d-sm-block"> Full Projects on GitHub</button>
          </a>
          <Link to="/skills">
            <button className="btn glow-on-hover btn-med mx-2 d-none d-md-block"> Skills </button>
          </Link>
        </div>

        <Carousel fade="true" className="fadein mb-5" indicators={false} controls={false}>
          <Carousel.Item>
            <div className="row align-items-center no-gutters">
              <div className="col-xl-6 col-lg-5">
                <img className="img-fluid mb-3 mb-lg-0" src="/giro.png" alt="" />
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="featured-text text-center text-lg-left">
                  <h2 className="project-title">Giro The Game</h2>
                  <p className="project-subtitle">Action Platformer</p>
                  <p className="project-text mb-0">
                    Get the highest score by collecting coins, avoiding damage, and killing enemies.
                  </p>
                  <p className="tech-text mb-0">
                    Phaser3 JavaScript ES6 webpack netlify jest
                  </p>
                  <div className="mt-0">
                    <a href="https://giro-the-game.netlify.app/dist/" target="_blank" rel="noopener noreferrer">
                      <button className="btn glow-on-hover my-1"> Play level 1 </button>
                    </a>
                    <a href="https://github.com/Usagib/Girogame-Phaser3" target="_blank" rel="noopener noreferrer">
                      <button className="btn glow-on-hover my-1"> Check the code </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center no-gutters">
              <div className="col-xl-6 col-lg-5">
                <img className="img-fluid mb-3 mb-lg-0" src="/booking.png" alt="" />
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="featured-text text-center text-lg-left">
                  <h2 className="project-title">Bookme App</h2>
                  <p className="project-subtitle">
                    Portfolio and appointments app
                  </p>
                  <p className="project-text mb-0">
                    Booking web application and dedicated RESTful API with user dashboard
                  </p>
                  <p className="tech-text mb-0">
                    React Bootstrap Ruby on Rails PostgreSQL
                  </p>
                  <div className="mt-0">
                    <a href="https://usagi-booking.surge.sh/" target="_blank" rel="noopener noreferrer">
                      <button className="btn glow-on-hover my-1"> Live Demo </button>
                    </a>
                    <a href="https://github.com/Usagib/booking-portfolio" target="_blank" rel="noopener noreferrer">
                      <button className="btn glow-on-hover my-1"> Check the code </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center no-gutters">
              <div className="col-xl-6 col-lg-5">
                <img className="img-fluid mb-3 mb-lg-0" src="/gthr.png" alt="" />
              </div>
              <div className="col-xl-6 col-lg-7">
                <div className="featured-text text-center text-lg-left">
                  <h2 className="project-title">GTHR</h2>
                  <p className="project-subtitle">Card Game catalog app</p>
                  <p className="project-text mb-0">
                    Create your card catalog from the Magic the Gathering Card Game API
                  </p>
                  <p className="tech-text mb-0">
                    CSS3 JavaScript React Redux Bootstrap
                  </p>
                  <div className="mt-0">
                    <a href="https://gthr-app.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      <button className="btn glow-on-hover my-1"> Mobile Demo </button>
                    </a>
                    <a href="https://github.com/Usagib/gthr-app" target="_blank" rel="noopener noreferrer">
                      <button className="btn glow-on-hover my-1"> Check the code </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <div className="row align-items-center mt-lg-5">
          <div className="col-12 col-sm-6 col-lg-3 mb-2">
            <img className="img-fluid" src="/proj1.png" alt="" />
              <h2 className="sm-project-title">Stylo FW</h2>
              <p className="sm-project-subtitle">Web design framework</p>
              <p className="project-text mb-0">
                Responsive CSS3 framework for quick layout design, a great tool for Bootstrap learners
              </p>
              <p className="sm-tech-text mb-0">
                CSS3
              </p>
              <a href="https://github.com/Usagib/stylofw" target="_blank" rel="noopener noreferrer">
                <button className="btn glow-on-hover my-1 mx-auto"> Framework </button>
              </a>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-2">
            <img className="img-fluid" src="/proj2.png" alt="" />
              <h2 className="sm-project-title">Trnado App</h2>
              <p className="sm-project-subtitle">JavaScript weather app  </p>
              <p className="project-text mb-0">
                Weather forecast application that fetches information from OpenWeathermap API, built-in ES6 with webpack
              </p>
              <p className="sm-tech-text mb-0">
                HTML5 CSS3 JavaScript webpack
              </p>
              <div className="mt-2">
                <a href="https://raw.githack.com/Usagib/js-weather/03-datafetch/dist/index.html" target="_blank" rel="noopener noreferrer">
                  <button className="btn glow-on-hover my-1 mx-auto"> Live Demo </button>
                </a>
                <a href="https://github.com/Usagib/Trnado-app" target="_blank" rel="noopener noreferrer">
                  <button className="btn glow-on-hover my-1 mx-auto"> Code </button>
                </a>
              </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-2">
            <img className="img-fluid" src="/proj3.png" alt="" />
              <h2 className="sm-project-title">Koi Events</h2>
              <p className="sm-project-subtitle">Events attendance app</p>
              <p className="project-text mb-0">
                Ruby on Rails app for creating events and share them with friends
              </p>
              <p className="sm-tech-text mb-0">
                HTML5 Ruby on Rails postgresql
              </p>
              <div className="mt-2">
                <a href="https://github.com/Usagib/Koi-eventsapp">
                  <button className="btn glow-on-hover my-1 mx-auto"> Visit the repo </button>
                </a>
              </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mb-2">
            <img className="img-fluid" src="/proj4.png" alt="" />
              <h2 className="sm-project-title">Social Scramble</h2>
              <p className="sm-project-subtitle">Social network app</p>
              <p className="project-text mb-0">
                A Ruby on Rails app for users to write posts and comment them, friend and unfriend users.
              </p>
              <p className="sm-tech-text mb-0">
                CSS3 JavaScript React Redux Bootstrap
              </p>
              <div className="mt-2">
                <a href="https://github.com/Usagib/ror-social-scaffold">
                  <button className="btn glow-on-hover my-1 mx-auto"> Visit the repo </button>
                </a>
              </div>
          </div>
        </div>

      </div>
  </header>


);

export default Projects;
