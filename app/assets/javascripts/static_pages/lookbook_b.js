$(document).ready(function(){
  // view designers button
  $('#view-lower-content').click(function() {
    $('.lookbook-b.bottom').toggleClass('view-lower-content-active')
  });
  // handle specific designer links
  $('.menu ul li').click(function() {
    $('.lookbook-b.bottom').addClass('view-specific-lower-content-active')
  });
  // handle specific designer links

  $(document).delegate(".back-button","click",function(e){
    $('.lookbook-b.bottom').removeClass('view-specific-lower-content-active')
   });
  
  
  function setBottomSectionRatio() {
    if($(window).width()>768){
      var lookbookBottomImageWidth =  $('.image-holder').width();
      var lookbookBottomHeight =  lookbookBottomImageWidth / 1.299;
      $('.lookbook-b.bottom').css('height', lookbookBottomHeight)
    } else {
      $('.lookbook-b.bottom').css('height', '100%')
    }
  }
  function setMobilePageHeight() {
    if($(window).width()<768){
      navHeight = $('#primary-menu').height()
      heightWithNav = $(window).height() - navHeight
      $('.lookbook-b-slider, #content-area').height(heightWithNav)
    }
  }
//  setMobilePageHeight();
  setBottomSectionRatio();
  
  $(window).resize(function(){
    setBottomSectionRatio();
  //  setMobilePageHeight();
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
        sliderInstanceB.appendSlide('<div id="firsties" class="rsContent lower-content-slide-mobile"><img src="assets/couture-0.jpg" class=".rsImg"/></div>', 0);
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