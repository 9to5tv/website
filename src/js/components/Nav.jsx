import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

  render() {
    return (
      <div className='navbar'>
       {this.props.includeLogo ? <Link className='n9to5'to='/'>9to5.tv</Link> : null}
        <span className='navbar__links'>
          <a href='http://live.9to5.tv'>Live Streaming</a>
          <a href='http://gallery.9to5.tv'>Online Gallery</a>
          <Link to='/schedule'>Schedule</Link>
          <Link to='/about'>About</Link>
        </span>
      </div>
    );
  }
}

export default Nav;