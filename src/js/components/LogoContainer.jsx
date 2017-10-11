import React from 'react';
import { Link } from 'react-router-dom';

import CameraFrame from './CameraFrame';

class LogoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const getRatio = el => (el.getBoundingClientRect().top + el.offsetHeight) / (el.getBoundingClientRect().top + el.offsetHeight + scrollTop);

    const title1 = getRatio(this.refs.title1);
    const title2 = getRatio(this.refs.title2);
    const title3 = getRatio(this.refs.title3);

    const state = {};
    if (title1 >= 0) state.title1 = title1;
    if (title2 >= 0) state.title2 = title2;
    if (title3 >= 0) state.title3 = title3;

    this.setState(state);
  }

  render() {
    const title = this.props.title || '/ 9to5.tv /';

    const getOffset = value => {
      if (!value || value === Infinity) return 0;
      else return Math.pow(1 - value, 5) * this.refs.title1.offsetWidth/4;
    };

    return (
      <div className='logo-container' ref='parent'>
        <CameraFrame background={require('../../img/statue.png')} showZoom={false} tl={null} br={null}
          bl={null} tr={null} bordered={true}>
          <Link className='no-slash' to='/'>
            <div ref='title1' className='camera-frame__title'>
              <div style={{ opacity: this.state.title1 }} className='camera-frame__title__original'>{title}</div>
              <div style={{ left: getOffset(this.state.title1) }} className='camera-frame__title__copy camera-frame__title__copy--red'>{title}</div>
              <div style={{ right: getOffset(this.state.title1) }} className='camera-frame__title__copy camera-frame__title__copy--blue'>{title}</div>
            </div>
            <div ref='title2' className='camera-frame__title'>
              <div style={{ opacity: this.state.title2 }} className='camera-frame__title__original'>{title}</div>
              <div style={{ left: getOffset(this.state.title2) }} className='camera-frame__title__copy camera-frame__title__copy--red'>{title}</div>
              <div style={{ right: getOffset(this.state.title2) }} className='camera-frame__title__copy camera-frame__title__copy--blue'>{title}</div>
            </div>
            <div ref='title3' className='camera-frame__title'>
              <div style={{ opacity: this.state.title3 }} className='camera-frame__title__original'>{title}</div>
              <div style={{ left: getOffset(this.state.title3) }} className='camera-frame__title__copy camera-frame__title__copy--red'>{title}</div>
              <div style={{ right: getOffset(this.state.title3) }} className='camera-frame__title__copy camera-frame__title__copy--blue'>{title}</div>
            </div>
          </Link>
        </CameraFrame>
      </div>
    );
  }
}

export default LogoContainer;