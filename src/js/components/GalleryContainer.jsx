import React from 'react';
import CameraFrame from './CameraFrame';

class GalleryContainer extends React.Component {

  render() {
    const title = '/ ONLINE GALLERY /';

    return (
      <div className='live-container'>
        <CameraFrame background={require('../../img/statue.png')} showZoom={false} tl={null} br={null}
          bl={<span />} tr={<span />}>
          <div className='camera-frame__title'>
            <div className='camera-frame__title__original'>{title}</div>
            <div className='camera-frame__title__copy camera-frame__title__copy--red'>{title}</div>
            <div className='camera-frame__title__copy camera-frame__title__copy--blue'>{title}</div>
          </div>
          <div className='camera-frame__title'>
            <div className='camera-frame__title__original'>{title}</div>
            <div className='camera-frame__title__copy camera-frame__title__copy--red'>{title}</div>
            <div className='camera-frame__title__copy camera-frame__title__copy--blue'>{title}</div>
          </div>
          <div className='camera-frame__title'>
            <div className='camera-frame__title__original'>{title}</div>
            <div className='camera-frame__title__copy camera-frame__title__copy--red'>{title}</div>
            <div className='camera-frame__title__copy camera-frame__title__copy--blue'>{title}</div>
          </div>
        </CameraFrame>
      </div>
    );
  }
}

export default GalleryContainer;