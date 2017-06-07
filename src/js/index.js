import $ from 'jquery';
require('./waveform');

$(document).ready(() => {
  const $body = $('body');
  const $innerContainer = $('#inner-container');
  const $more = $('#more');
  const $navApply = $('#nav__apply');
  const $fixedTopBorder = $('.fixed-inner-top');
  let applysAdded = 0;

  $(window).scroll(function (e) {
    const scrollTop = $body.scrollTop();
    const offsetAmt = $innerContainer.offset().top - 200 - 70.4 + 8;
    if (scrollTop > offsetAmt) $fixedTopBorder.addClass('visible');
    else $fixedTopBorder.removeClass('visible');

    if (scrollTop > $more.offset().top + $more.height() - 70.4) {
      const newSpan = $navApply.find('span:last').clone();
      $(newSpan).appendTo($navApply);
      const lastLeft = parseInt($(newSpan).css('left'));
      $(newSpan).css('left', lastLeft + 4);
      applysAdded++;
      if (applysAdded % 3 === 1) $(newSpan).addClass('digital').removeClass('physical');
      else if (applysAdded % 3 === 2) $(newSpan).addClass('physical').removeClass('digital');
      else $(newSpan).removeClass('physical digital');
    }
  });
});