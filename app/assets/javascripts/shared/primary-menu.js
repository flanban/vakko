$(function() {
  $('#mobile-nav-toggle > img').click(function(e) {
    e.preventDefault();
    $('#nav-items').slideToggle();
    $(document).toggleClass('mobile-nav-open');
  });
  
  $('body').on('click', '.collection > a', function (e) {
    e.preventDefault()
  })
  
});