$(function() {
 
  
  $('body').on('click', '.collection > a', function (e) {
  //  e.preventDefault()
  })
  
  $('body').on('click', '#mobile-nav-toggle > img', function (e) {
    e.preventDefault();
   $('html').toggleClass('mobile-nav-open');
  })
  
});