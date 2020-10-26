import React from 'react'
import { Link } from 'react-router-dom';

const Me = () => (
  <header className="masthead" id="home">
    <div className="container d-flex h-100 align-items-center">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <img className="img-fluid fadein ml-md-5 me-img" src="/me.png" alt="" />
        </div>
        <div className="col-lg-6 mx-auto">
          <h2 className="me-title mb-4 fadein">Eduardo <span className="highlight-text-2">"Usagi"</span> Bonilla</h2>
            <p className="me-text fadein">
              I'm a <span className="highlight-text">Full-Stack developer</span>  mainly focused on Human Computer Interaction, <span className="highlight-text-2">UX/UI design</span>, branding, and <span className="highlight-text">project management.</span>
            </p>
            <p className="me-text fadein fadein-first">
              Founded my freelancing startup <span className="highlight-text-2">'USAGI'</span> in 2012 and performed as the project manager. We worked along with <span className="highlight-text">30+ Mexican companies</span> providing <span className="highlight-text-2">frontend</span>, design, and tech support services.
            </p>
            <p className="me-text fadein fadein-second">
              I Like: Animation, Comics, Videogames, Board Games...
            </p>
            <p className="me-text fadein fadein-third">
              Proud Mexican since 1992.
            </p>
            <Link to='/skills'>
              <button className="btn btn-live mx-2 fadein fadein-third">Review my skills</button>
            </Link>
            <Link to='/projects'>
              <button className="btn btn-code mx-2 fadein fadein-third">Visit my portfolio</button>
            </Link>
            <a href="https://docs.google.com/document/d/1wDLnDSzeLd2c6ecFKbzIU7bDV_pzq7mbRcmEACvWQLY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-live mx-2 fadein fadein-third">Read my resume</button>
            </a>
        </div>
      </div>
    </div>
  </header>
);

export default Me;
