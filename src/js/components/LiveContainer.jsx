import React from 'react';
import CameraFrame from './CameraFrame';

class LiveContainer extends React.Component {

  render() {
    return (
      <div className='live-container'>
        <CameraFrame background={require('../../img/live.png')}>
          <div className='live-iframe-container'>
            <div className='live-iframe-container__link no-slash black' href='http://live.9to5.tv/'>
              <a href='http://live.9to5.tv/' className='live-iframe-container__title no-slash'>
                <span className='live-iframe-container__title__strip live-iframe-container__title__strip--tl'>STREAM <span className='n9to5'>9to5</span></span>
                <span className='live-iframe-container__title__strip live-iframe-container__title__strip--br'>/ live.9to5.tv /</span>
              </a>
              <iframe src='https://player.twitch.tv/?channel=9to5tv&muted=true' frameBorder='0' allowFullScreen='false' scrolling='no' height='100%' width='100%'></iframe>
            </div>
          </div>
        </CameraFrame>
      </div>
    );
  }
}

export default LiveContainer;