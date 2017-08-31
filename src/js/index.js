import $ from 'jquery';
import Waveform from './waveform';
window.$ = $;

$(document).ready(() => {
  const $body = $('body,html');
  const $innerContainer = $('#inner-container');
  const $fixedTopBorder = $('.fixed-inner-top');
  const $pages = $('.container__page');
  const pageScrollOffset = 68;
  const $leftCTA = $('.nav__left a');
  const $rightCTA = $('.nav__right a');
  const $originalTitle = $('.camera-frame__title__original');
  const $redTitle = $('.camera-frame__title__copy--red');
  const $blueTitle = $('.camera-frame__title__copy--blue');
  const $navFrame = $('.nav-piece');
  const $aboveFold = $('.above-fold');
  const $cameraFrame = $('.camera-frame');
  const $countdown = $('.countdown-timer');
  let leftCTABound, rightCTABound;
  let navFaded;
  const startTime = new Date('Fri, 08 Sep 2017 13:00:00 GMT');

  const updateCountdown = () => {
    const pad = num => (num < 10 ? '0' : '') + String(Math.floor(num));
    // get total seconds between the times
    var delta = Math.abs(startTime - new Date()) / 1000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = delta % 60;  // in theory the modulus is not required
    $countdown.text(`${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    setTimeout(updateCountdown, 1000);
  }
  updateCountdown();

  const updatePageStack = () => {
    const scrollTop = $body.scrollTop() || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
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
  };

  const updateCTAScrolls = () => {
    const distance = document.documentElement.clientHeight - 32 - 53 - 16;
    leftCTABound = distance - $leftCTA.width();
    rightCTABound = distance - $rightCTA.width();
  }

  const updateCTAPosition = () => {
    const scrollTop = $body.scrollTop() || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollHeight = (document.body.scrollHeight || document.documentElement.scrollHeight) - document.documentElement.clientHeight;
    $leftCTA.css('left', leftCTABound * (scrollTop / scrollHeight));
    $rightCTA.css('left', rightCTABound * (scrollTop / scrollHeight));
    const h = $(window).height();
    if (scrollTop <= h) {
      const amt = Math.pow(scrollTop / (h*0.75), 2);
      $originalTitle.css('opacity', 1 - amt*2);
      $redTitle.css('left', (-2 * amt) + 'em');
      $blueTitle.css('right', (-2 * amt) + 'em');
    }
    if (scrollTop <= $aboveFold.height() - 0.2 * h) {
      if (navFaded !== 'yes') {
        $navFrame.stop().animate({ opacity: 0 });
        navFaded = 'yes';
      }
    } else {
      if (navFaded !== 'no') {
        $navFrame.stop().animate({ opacity: 1 });
        navFaded = 'no';
      }
    }
  }

  const wf = new Waveform();
  updatePageStack();
  updateCTAScrolls();
  updateCTAPosition();

  $(window).scroll(function(e) {
    updatePageStack();
    updateCTAPosition();
  });

  $(window).resize(function(e) {
    wf.reset();
    updatePageStack();
    updateCTAScrolls();
  });

  let applicationType;

  $('a.scroll').click(function(e) {
    const href = $(this).attr('href');
    const $targetPage = $(href);
    const pageIndex = $pages.index($targetPage);
    $body.stop().animate({ scrollTop: $targetPage.offset().top - 32 - (61 * (pageIndex > -1 ? pageIndex : 0)) }, 500, 'swing');
    ga('send', 'event', 'anchorLink', 'click', href);
    e.preventDefault();
    return false;
  });

  $('.apply').click(function(e) {
    applicationType = $(this).data('type');
    $('.apply-modal__title').text(applicationType);
    $('.apply-blanket').addClass('visible');
    ga('send', 'event', 'application', 'open', applicationType);
    e.preventDefault();
    return false;
  });

  $('.subscribe').click(function(e) {
    $('.subscribe-blanket').addClass('visible');
    ga('send', 'event', 'subscribe', 'open', '');
    e.preventDefault();
    return false;
  });

  const closeModal = (e) => {
    $('.blanket').removeClass('visible');
    ga('send', 'event', 'modal', 'close', '');
    e.preventDefault();
    return false;
  };
  window.closeModal = closeModal;

  $('.close-modal').click(closeModal);

  const validate = () => {
    let invalid = false;
    $('form.open-call .form-section').each(function() {
      if (!$(this).find('.form-section__input').val()) {
        $(this).addClass('invalid');
        invalid = true;
      } else {
        $(this).removeClass('invalid');
      }
    });
    return !invalid;
  };

  $('.submit-form').click(e => {
    var form = $('form.open-call').serializeArray();
    var data = {};
    for (let field of form) { data[field.name] = field.value; }
    data.type = applicationType;
    data.timestamp = (new Date()).toString();
    if (validate()) {
      $.get('https://script.google.com/macros/s/AKfycbxttV8TnjMZJMltoJede1lqE3PDJpqTX5ONQTiytB7cpOR8P4c/exec', data);
      $('.apply-modal__form-container').html('<div class="submitted"><h3>THANK YOU!</h3><a href="#" onclick="closeModal()" class="close-modal physical">close</a></div>')
      ga('send', 'event', 'application', 'submit', applicationType);
    } else {
      ga('send', 'event', 'application', 'invalidSubmit', applicationType);
    }
    e.preventDefault();
    return false;
  });
});