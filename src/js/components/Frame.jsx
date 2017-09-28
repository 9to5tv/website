import React from 'react';
import Nav from './Nav';

class Frame extends React.Component {

  render() {
    return (
      <div className='frame'>
        <div className='frame__navbar'><Nav includeLogo={true} hideOnMobile={true} /></div>
        <div className='frame__content'>{this.props.children}</div>
      </div>
    );  
  }
}

export default Frame;