import React from 'react';
import CameraFrame from './CameraFrame';

class GalleryContainer extends React.Component {

  render() {
    return (
      <div className='gallery-container'>
        <a className='no-slash' href='http://gallery.9to5.tv'>
          <CameraFrame background={require('../../img/gallery.png')} showZoom={false} bl={null} tr={null}
            tl={<span>online</span>} br={<span>gallery</span>}>
          </CameraFrame>
        </a>
      </div>
    );
  }
}

export default GalleryContainer;