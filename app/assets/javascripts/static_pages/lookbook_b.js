$(document).ready(function(){
  function setBottomSectionRatio() {
    if($(window).width()>768){
      var lookbookBottomImageWidth =  $('.image-holder').width();
      var lookbookBottomHeight =  lookbookBottomImageWidth / 1.299;
      $('.lookbook-b.bottom').css('height', lookbookBottomHeight)
    }
  }
  
  setBottomSectionRatio();
  
  $(window).resize(function(){
    setBottomSectionRatio();
  });
});
$(function(){

//slider stuff
  var lookbookBSlider = $('.lookbook-b-slider').royalSlider({
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
    deeplinking: {
      enabled: true,
      change: true,
      prefix: '-'
    },
    controlsInside: true
  });
  var sliderInstanceB = lookbookBSlider.data('royalSlider');
  var slideCountEl = $('<div class="rsSlideCount"></div>').appendTo( $('.rsArrowRight') );

  function updCount() {
      slideCountEl.html( (sliderInstanceB.currSlideId+1) + ' / ' + sliderInstanceB.numSlides );
  }
  sliderInstanceB.ev.on('rsAfterSlideChange', updCount);
  updCount();
 
 
  function setSlides() {
    if($(window).width()<768 && $('#firsties').length == 0){
        sliderInstanceB.appendSlide('<div id="firsties" class="rsContent couture-slide-mobile"><img src="assets/couture-0.jpg" class=".rsImg"/></div>', 0);
        updCount();
    } else if ($(window).width()>=768 && $('#firsties').length > 0) {
        sliderInstanceB.removeSlide(0);
        updCount();
    }
  }
  setSlides();
  $(window).resize(function(){
    setSlides();
  });

});