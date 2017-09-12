import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

  render() {
    return (
      <div className='navbar'>
        <Link className='n9to5'to='/'>9to5.tv</Link>
        <span className='navbar__links'>
          <a className='no-slash' href='http://live.9to5.tv'>Streaming</a>
          <a className='no-slash' href='http://gallery.9to5.tv'>Gallery</a>
          <Link className='no-slash' to='/schedule'>Artists & Schedule</Link>
          <a className='no-slash' href='mailto:info@9to5.tv'>Contact</a>
        </span>
      </div>
    );
  }
}

export default Nav;