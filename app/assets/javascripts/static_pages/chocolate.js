$(document).ready(function(){
  // set slider-a height
  function positionBullets() {
    var bulletPosition = $('.chocolate-slider-b.chocolate-arrows > ul li > img').height() + 10
    $('.chocolate-slider-b .rsNav.rsBullets').css('top', bulletPosition);
  }
  function setSliderAHeight() {
    if($(window).width()<1024){
      var bulletHeight = 45;
      var sliderHeight = $('#art-of-tasting').outerHeight() + bulletHeight;
      $('.chocolate-slider-a > ul').outerHeight(sliderHeight);
    }
  }
  function setSliderBHeight() {
    if($(window).width()<1024){
      var sliderHeight = $('.chocolate-slider-b li:first-child').outerHeight();
      $('.chocolate-slider-b').outerHeight(sliderHeight);
    }
  }
  function setSliderHeights() {
    setSliderAHeight();
    setSliderBHeight();
    positionBullets()
  }

  setSliderHeights();
  $(window).resize(function(){
    setSliderHeights()
  });

  //sliders
  var firstChocolateSlider = $('.chocolate-slider-a > ul').royalSlider({
    // options
    keyboardNavEnabled: true,
    imageScalePadding: 0,
    imageScaleMode: 'fill',
    controlNavigation: 'bullets',
    arrowsNav: false,
    navigateByClick: false,
    usePreloader: false,
    slidesSpacing:0,
    fadeinLoadedSlide: true,
    addActiveClass: true,
    arrowsNavAutoHide: false,
    controlsInside: true
  }).data('royalSlider');
  firstChocolateSlider.ev.on('rsAfterSlideChange', function(event) {

    if(this.currSlideId == 0) {
      $('.good-chocolate-link').addClass('choco-nav-active');
      $('.art-of-tasting-link').removeClass('choco-nav-active')
    } else {
      $('.good-chocolate-link').removeClass('choco-nav-active');
      $('.art-of-tasting-link').addClass('choco-nav-active')
    }
  });
  //direct link to choco slides
  $('.good-chocolate-link').click(function(e) {
    e.preventDefault();
    firstChocolateSlider.goTo(0);
    return false;
  });
  $('.art-of-tasting-link').click(function(e) {
    e.preventDefault();
    firstChocolateSlider.goTo(1);
    return false;
  });
  //second chocolate slider
  var bottomChocolateSlider = $('.chocolate-slider-b > ul').royalSlider({
    // options
    keyboardNavEnabled: true,
    imageScalePadding: 0,
    arrowsNav: false,
    controlsInside: true,
    navigateByClick: false,
    usePreloader: false,
    slidesSpacing:0,
    //controlNavigation: 'bullets',
    fadeinLoadedSlide: true,
  });
  
  var sliderInstance = bottomChocolateSlider.data('royalSlider');
  var slideCountEl = $('<div class="rsSlideCount"></div>').appendTo( $('.rsArrowRight') );


  function updCount() {
    slideCountEl.html( (sliderInstance.currSlideId+1) + ' / ' + sliderInstance.numSlides );
  }
  sliderInstance.ev.on('rsAfterSlideChange', updCount);
  updCount();
});
