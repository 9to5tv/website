import $ from 'jquery';

function move(amplitude, frequency, length, i, polygonal){
  var width = length;
  var x = 0, y;
  const yBase = amplitude/2 + 24;
  var points = [];
  if (polygonal) points = [0,amplitude*2 + yBase];
  while (x++ <= width) {
    const yOffset = Math.sin((x + i*amplitude)*frequency)
    let adjustment = 1;
    const amt = .15
    if (x < width * amt) adjustment = Math.pow(x/(width * amt), 2);
    else if (x > width * (1-amt)) adjustment = Math.pow((width - x) / (width * amt), 2);
    const y = yBase + (amplitude/2)*yOffset*adjustment;
    points.push([x, y].join(' '))
  }
  if (polygonal) {
    points.push([length,amplitude*2 + yBase].join(' '))
    points.push([0,amplitude*2 + yBase].join(' '));
  }
  return points;
}

class Waveform {
  constructor() {
    this.$svg = $('#waveform');
    this.$polyline = this.$svg.find('polyline');
    this.$polygon = this.$svg.find('polygon');
    this.reset = this.reset.bind(this);
    this.draw = this.draw.bind(this);
    this.reset();
    this.draw();
  }

  reset() {
    this.counter = 0;
    this.width = this.$svg.width();
    this.height = this.$svg.height()/4;
  }

  draw() {
    const c = ++this.counter/20;
    const frequency = Math.pow(($('body').scrollTop() / $(document).height()) / 2, 2);
    this.$polyline.attr('points', move(this.height, frequency, this.width, c, false));
    this.$polygon.attr('points', move(this.height, frequency, this.width, c, true));
    requestAnimationFrame(this.draw);

  }
}

export default Waveform;