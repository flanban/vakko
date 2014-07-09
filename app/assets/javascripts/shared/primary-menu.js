$(function() {
 
  
  $('body').on('click', ' .headquarters-nav, #mobile-nav-toggle', function (e) {
    e.preventDefault()
  })
  

  $('body').on('click', '#mobile-nav-toggle > img', function (e) {
    e.preventDefault();
   $(this).toggleClass('mobile-nav-open');
  })
  
});