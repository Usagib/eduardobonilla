import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => (
  <header className="masthead" id="home">
    <div className="container d-flex h-100 align-items-center">
      <div className="mx-auto text-center">
        <img alt="home developer" className="img-fluid fadein fadein-first mb-5 logo-sm" src="logo.png"/>
        <img alt="home developer" className="img-fluid fadein fadein-first" src="homeimg.png"/>
        <h2 className="mx-auto mt-2 home-text fadein fadein-third">Hello!, I like to design and code</h2>
        <Link to="/me">
          <button type="button" className="btn glow-on-hover mt-2 mx-3 fadein fadein-third"> ABOUT ME </button>
        </Link>
        <Link to="/projects">
          <button type="button" className="btn glow-on-hover mt-2 mx-3 fadein fadein-third"> PORTFOLIO </button>
        </Link>
      </div>
    </div>
  </header>
);

export default Home;
