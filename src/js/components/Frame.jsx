import React from 'react';
import { findDOMNode } from 'react-dom';
import Waveform from './Waveform';

class Frame extends React.Component {
  constructor(props) {
    super(props);
    this.resize = this.resize.bind(this);
    this.state = { width: 0 };
  }

  resize() {
    this.setState({
      width: findDOMNode(this.refs.wf).getBoundingClientRect().width
    });
  }

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    return (
      <div className='frame'>
        <div className='frame__navbar'></div>
        <div className='frame__content'>{this.props.children}</div>
        <div className='frame__waveform' ref='wf'>
          <Waveform width={this.state.width} height={64} />
        </div>
      </div>
    );  
  }
}

export default Frame;