$(function() {
  
  // grid functionality
  $('body').on('click', '.button-show-grid', function (e) {
    e.preventDefault();
    $('.collection-grid').removeClass('hidden')
    $('.collection-grid').css('opacity', '1')
  })
  $('body').on('click', '.collection-grid > a', function (e) {
//    e.preventDefault();
    $('.collection-grid').css('opacity', '0');
    setTimeout(function(){
      $( '.collection-grid' ).addClass( "hidden" )}, 700);
  })
  
  
  $('.button-close').click(function(e) {
    e.preventDefault();
    infoWidth = $('.info-slideout').outerWidth()
    $('.info-slideout').css('margin-right', -infoWidth);
    $('html').removeClass('slide-info-open');
  });
  $('.button-show-info').click(function(e) {
    e.preventDefault();
    $('.info-slideout').css('margin-right', 0);
    $('html').addClass('slide-info-open');
  });
});

$(document).ready(function(){
  setTimeout(function() {
    $(".collection-grid a img").hide(0).delay(500).fadeIn(400);
  }, 16);

//slider stuff
  var lookbookSlider = $('.lookbook-slider.lookbook-slider-a').royalSlider({
    // options
    keyboardNavEnabled: true,
    controlNavigation: 'none',
    imageScalePadding: 0,
    imageScaleMode: 'fill',
    arrowsNav: true,
    navigateByClick: false,
    usePreloader: false,
    slidesSpacing:0,
    fadeinLoadedSlide: true,
    addActiveClass: true,
    arrowsNavAutoHide: false,
    controlsInside: true,
    deeplinking: {
          enabled: true,
          change: true,
          prefix: '-'
        }
  });
  var sliderInstance = lookbookSlider.data('royalSlider');
  var slideCountEl = $('<div class="rsSlideCount"></div>').appendTo( $('.rsArrowRight') );

  function updCount() {
      slideCountEl.html( (sliderInstance.currSlideId+1) + ' / ' + sliderInstance.numSlides );
  }
  sliderInstance.ev.on('rsAfterSlideChange', updCount);
  updCount();
  

});
