$(function() {
  $('.button-close').click(function(e) {
    e.preventDefault();
    infoWidth = $('.info-slideout').height()
    $('.info-slideout').css('margin-right', -infoWidth);
    $('html').removeClass('slide-info-open');
  });
  $('.button-show-info').click(function(e) {
    e.preventDefault();
    $('.info-slideout').css('margin-right', 0);
    $('html').addClass('slide-info-open');
  });
});