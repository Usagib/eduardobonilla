import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Link } from 'react-router-dom';

const Tweets = () => (
    <div className="container d-flex h-100 align-items-center">
        <div className="row embed-section text-center">
          <div className="col-sm-3 align-items-center mt-5 d-none d-md-block">
            <a href="https://twitter.com/UsagiBonilla" target="_blank" rel="noopener noreferrer">
              <button className="btn glow-on-hover btn-med my-5 fadein fadein-third">Twitter</button>
            </a>
            <a href="https://www.linkedin.com/in/usagib/" target="_blank" rel="noopener noreferrer">
              <button className="btn glow-on-hover btn-med my-5 fadein fadein-third">Linkedin</button>
            </a>
            <a href="https://github.com/usagib" target="_blank" rel="noopener noreferrer">
              <button className="btn glow-on-hover btn-med my-5 fadein fadein-third">GitHub</button>
            </a>
            <Link to='/me'>
              <button className="btn glow-on-hover btn-med my-5 fadein fadein-third">Know Me</button>
            </Link>
            <a href="mailto:eduardobonillac@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className="btn glow-on-hover btn-med my-5 fadein fadein-third">Mail Me</button>
            </a>
          </div>
          <div className="col-12 col-md-9">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="UsagiBonilla"
              theme="dark"
              noScrollbar
              transparent
              autoHeight
              options={{
                tweetLimit: 10,
              }}
            />
          </div>
        </div>
    </div>
);

export default Tweets;
