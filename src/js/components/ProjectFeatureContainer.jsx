import React from 'react';
import CameraFrame from './CameraFrame';

class ProjectFeatureContainer extends React.Component {

  render() {
    return (
      <div className='project-feature'>
        <a className='no-slash' href='/'>
          <CameraFrame background={this.props.image} showZoom={false} bl={null} tr={null}
            tl={<span>{this.props.title}</span>} br={<span>{this.props.artist}</span>}>
          </CameraFrame>
        </a>
      </div>
    );
  }
}

export default ProjectFeatureContainer;