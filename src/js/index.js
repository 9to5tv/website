import $ from 'jquery';
require('./waveform');

$(document).ready(() => {
  const $body = $('body');
  const $innerContainer = $('#inner-container');
  const $fixedTopBorder = $('.fixed-inner-top');
  const $pages = $('.container__page');
  const pageScrollOffset = 68;

  $(window).scroll(function (e) {
    const scrollTop = $body.scrollTop();
    // const offsetAmt = $innerContainer.offset().top - 200 - 70.4 + 8;
    // if (scrollTop > offsetAmt) $fixedTopBorder.addClass('visible');
    for (let i = 0; i < $pages.length; i++) {
      const $page = $($pages[i]);
      if (scrollTop > $page.offset().top - pageScrollOffset - (61*i)) {
        $page.addClass('fixed');
      } else {
        $page.removeClass('fixed');
      }
    }

    // else $fixedTopBorder.removeClass('visible');
  });

  let applicationType;

  $('a.scroll').click(function(e) {
    const $targetPage = $($(this).attr('href'));
    const pageIndex = $pages.index($targetPage);
    $body.stop().animate({ scrollTop: $targetPage.offset().top - 32 - (61 * (pageIndex > -1 ? pageIndex : 0)) }, 500, 'swing');
    e.preventDefault();
    return false;
  });

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