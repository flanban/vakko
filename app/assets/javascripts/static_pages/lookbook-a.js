$(function() {

  // grid functionality
  $('body').on('click', '.button-show-grid', function (e) {
    e.preventDefault();
    $('#content-area').addClass('grid-open')
    $('.collection-grid').removeClass('hidden')
    $('.collection-grid').css('opacity', '1')
  })
  $('body').on('click', '.collection-grid > a', function (e) {
//    e.preventDefault();
    $('#content-area').removeClass('grid-open')
    $('.collection-grid').css('opacity', '0');
    setTimeout(function(){
      $( '.collection-grid' ).addClass( "hidden" )}, 700);
  })
  
  //hide slideout
  $('.button-close').click(function(e) {
    e.preventDefault();
    infoWidth = $('.info-slideout').outerWidth();
    $('html').removeClass('slide-info-open');
    $('.info-slideout').css('margin-right', -infoWidth);
  });

  //show slideout
  $('.button-show-info').click(function(e) {
    e.preventDefault();
    $('.info-slideout').css('margin-right', 0);
    $('html').addClass('slide-info-open');
  });

  //keep margin correct
  $(window).resize(function(){
    infoWidth = $('.info-slideout').outerWidth();
    $('.info-slideout').css('margin-right', -infoWidth);
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
