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

  let applicationType;

  $('.apply').click(function(e) {
    applicationType = $(this).data('type');

    $('.blanket').addClass('visible');
    e.preventDefault();
    return false;
  });

  $('.close-modal').click(e => {
    $('.blanket').removeClass('visible');
    e.preventDefault();
    return false;
  });

  $('.submit-form').click(e => {
    var form = $('form.open-call').serializeArray();
    var data = {};
    for (let field of form) { data[field.name] = field.value; }
    data.type = applicationType;
    data.timestamp = (new Date()).toString();
    console.log(data);
    $.get('https://script.google.com/macros/s/AKfycbxttV8TnjMZJMltoJede1lqE3PDJpqTX5ONQTiytB7cpOR8P4c/exec', data);

    e.preventDefault();
    return false;
  });
});