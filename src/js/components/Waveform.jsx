import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

class Waveform extends Component {
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.draw = this.draw.bind(this);
    this.counter = 0;
    this.width = 0;
    this.height = 0;
  }

  reset(width, height) {
    this.counter = 0;
    this.width = width || findDOMNode(this).getBoundingClientRect().width;
    this.height = (height || findDOMNode(this).getBoundingClientRect().height) / 4;
  }

  draw() {
    const c = ++this.counter/20;
    const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    const frequency = Math.pow((scrollTop / documentHeight) / 2, 2);
    this.refs.polyline.setAttribute('points', move(this.height, frequency, this.width, c, false));
    this.refs.polygon.setAttribute('points', move(this.height, frequency, this.width, c, true));
    requestAnimationFrame(this.draw);

  }

  componentDidMount() {
    this.reset = this.reset.bind(this);
    this.draw = this.draw.bind(this);
    this.reset(this.props.width, this.props.height);
    console.log(this.width)
    console.log(this.height)
    this.draw();
  }

  componentWillReceiveProps(nextProps) {
    this.reset(nextProps.width, nextProps.height);
  }


  render() {
    return (
      <svg className='waveform'>
        <polygon ref='polygon'></polygon>
        <polyline ref='polyline'></polyline>
      </svg>
    );
  }
}

export default Waveform;

function move(amplitude, frequency, length, i, polygonal) {
  var width = length;
  var x = 0;
  const yBase = amplitude/2 + 24;
  var points = [];
  if (polygonal) points = [0,amplitude*2 + yBase];
  while (x++ <= width) {
    const yOffset = Math.sin((x + i*amplitude)*frequency);
    let adjustment = 1;
    const amt = .15;
    if (x < width * amt) adjustment = Math.pow(x/(width * amt), 2);
    else if (x > width * (1-amt)) adjustment = Math.pow((width - x) / (width * amt), 2);
    const y = yBase + (amplitude/2)*yOffset*adjustment + 1;
    points.push([x, y].join(' '));
  }
  if (polygonal) {
    points.push([length,amplitude*2 + yBase].join(' '));
    points.push([0,amplitude*2 + yBase].join(' '));
  }
  return points;
}