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
    console.log(points);
  }
  return points;
}
var $svg = $('#waveform');
var $polyline = $svg.find('polyline');
var $polygon = $svg.find('polygon');
var counter = 0;
var width = $svg.width();
var height = $svg.height()/4;
function draw(){
  var c = ++counter/20;
  const frequency = ($('body').scrollTop() / $(document).height());
  $polyline.attr('points', move(height, frequency, width, c, false));
  $polygon.attr('points', move(height, frequency, width, c, true));
  requestAnimationFrame(draw);
}

draw();