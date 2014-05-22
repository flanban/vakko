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
  
  
  function fadeInContent() {
    currContentObject = $('.collection-grid a')
    var css = {
      visibility: 'visible',
      opacity: 0
    };
    css[self._vendorPref + 'transition'] = 'opacity 600ms ease-in-out';
    
    currContentObject.css(css);

    setTimeout(function() {
      currContentObject.css('opacity', 1);
    }, 16);
  }

 // fadeInContent();
});
$(document).ready(function(){
  setTimeout(function() {
    $(".collection-grid a img").hide(0).delay(500).fadeIn(400);
  }, 16);
});