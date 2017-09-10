import React from 'react';
import CameraFrame from './CameraFrame';

class LiveContainer extends React.Component {

  render() {
    return (
      <div className='live-container'>
        <CameraFrame background={require('../../img/statue2.png')}>
          <div className='live-iframe-container'>
            <div className='live-iframe-container__link no-slash black' href='http://live.9to5.tv/'>
              <div className='live-iframe-container__title'>
                <span className='live-iframe-container__title__strip live-iframe-container__title__strip--tl'><span className='n9to5'>9to5</span> IS LIVE</span>
                <a href='http://live.9to5.tv/' className='live-iframe-container__title__strip live-iframe-container__title__strip--br'>live.9to5.tv</a>
              </div>
              <iframe src='https://player.twitch.tv/?channel=9to5tv' frameBorder='0' allowFullScreen='false' scrolling='no' height='100%' width='100%'></iframe>
            </div>
          </div>
        </CameraFrame>
      </div>
    );
  }
}

export default LiveContainer;