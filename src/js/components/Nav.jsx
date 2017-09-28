import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {

  render() {
    return (
      <div className='navbar'>
        <span className={'navbar__links' + (this.props.hideOnMobile ? ' navbar__links--no-mobile' : '')}>
          {this.props.includeLogo ? <Link className='n9to5'to='/'>9to5.tv</Link> : null}
          <a className='hidden-mobile' href='http://live.9to5.tv'>Live Streaming</a>
          <a className='hidden-mobile' href='http://gallery.9to5.tv'>Online Gallery</a>
          <Link className='hidden-mobile' to='/schedule'>Schedule</Link>
          <Link className='hidden-mobile' to='/about'>About</Link>
        </span>
      </div>
    );
  }
}

export default Nav;