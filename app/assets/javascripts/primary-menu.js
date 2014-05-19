$(function() {
  $('#mobile-nav-toggle').click(function(e) {
    e.preventDefault();
    $('#nav-items').slideToggle();
    $('html').toggleClass('mobile-nav-open');
  });
});