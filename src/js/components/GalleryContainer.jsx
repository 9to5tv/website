import React from 'react';
import CameraFrame from './CameraFrame';

class GalleryContainer extends React.Component {

  render() {
    return (
      <div className='live-container'>
        <CameraFrame background={require('../../img/gallery.png')} showZoom={false} tl={null} br={null}>
          ONLINE GALLERY
        </CameraFrame>
      </div>
    );
  }
}

export default GalleryContainer;