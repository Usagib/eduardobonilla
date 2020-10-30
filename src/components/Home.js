import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => (
  <header className="anim-masthead" id="home">
    <div className="container d-flex h-100 align-items-center">
      <div className="mx-auto text-center">
        <div className="row align-items-center">
          <div className="col-10 col-sm-6 col-md-12">
            <img alt="home developer" className="img-fluid fadein fadein-first logo-sm" src="homehor.png"/>
            <img alt="home developer" className="img-fluid fadein fadein-first home-sm" src="homevert.png"/>
          </div>
        </div>
        <div className="row align-items-center mt-5 mt-sm-0">
          <div className="col-12">
            <Link to="/me">
              <button type="button" className="btn glow-on-hover btn-maxi mt-2 mx-3 fadein fadein-third"> Get to know me! </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Home;
