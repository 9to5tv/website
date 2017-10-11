import React from 'react';
import { Link } from 'react-router-dom';
import CameraFrame from './CameraFrame';

class ProjectFeatureContainer extends React.Component {

  render() {
    return (
      <div className='project-feature'>
        <Link className='no-slash' to={this.props.url}>
          <CameraFrame background={this.props.image} showZoom={false} bl={null} tr={null}
            tl={<span>{this.props.title}</span>} br={<span>{this.props.artist}</span>}>
          </CameraFrame>
        </Link>
      </div>
    );
  }
}

export default ProjectFeatureContainer;