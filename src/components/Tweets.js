import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Tweets = () => (
  <div className="container-fluid d-flex h-100 align-items-center">
      <div className="mx-5 px-5 embed-section center">
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
);

export default Tweets;
