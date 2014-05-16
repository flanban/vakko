$(function() {
  $('#mobile-nav-toggle').click(function() {
    $('#nav-items').slideToggle();
    $('html').toggleClass('mobile-nav-open');
  });
});