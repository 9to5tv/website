import $ from 'jquery';
require('./waveform');

$(document).ready(() => {
  const $body = $('body');
  const $innerContainer = $('#inner-container');
  const $fixedTopBorder = $('.fixed-inner-top');

  $(window).scroll(function (e) {
    const scrollTop = $body.scrollTop();
    const offsetAmt = $innerContainer.offset().top - 200 - 70.4 + 8;
    if (scrollTop > offsetAmt) $fixedTopBorder.addClass('visible');
    else $fixedTopBorder.removeClass('visible');
  });

  $('.apply').click(e => {
    $('.blanket').addClass('visible');
    e.preventDefault();
    return false;
  });

  $('.close-modal').click(e => {
    $('.blanket').removeClass('visible');
    e.preventDefault();
    return false;
  });
});