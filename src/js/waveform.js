import $ from 'jquery';

function move(amplitude, frequency, length, i){
  var points = [];
  var width = length;
  var x = 0, y;
   while (x++ <= width) {
     const yOffset = Math.sin((x + i*amplitude)*frequency)
     const yBase = amplitude/2 + 24;
     let adjustment = 1;
     const amt = .15
     if (x < width * amt) adjustment = Math.pow(x/(width * amt), 2);
     else if (x > width * (1-amt)) adjustment = Math.pow((width - x) / (width * amt), 2);
     const y = yBase + (amplitude/2)*yOffset*adjustment;
     points.push([x, y].join(' '))
   }
  return points;
}
var $svg = $('#waveform');
var $polyline = $svg.find('polyline');
var counter = 0;
var width = $svg.width();
var height = $svg.height()/4;
function draw(){
  var c = ++counter/20;
  const frequency = ($('body').scrollTop() / $(document).height());
  $polyline.attr('points', move(height, frequency, width, c))
  requestAnimationFrame(draw);
}

draw();