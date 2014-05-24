var firstChocolateSlider = $('.chocolate-slider-a > ul').royalSlider({
    // options
    keyboardNavEnabled: true,
    imageScalePadding: 0,
    imageScaleMode: 'fill',
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
  $('.chocolate-slider-b > ul').royalSlider({
    // options
    keyboardNavEnabled: true,
    imageScalePadding: 0,
    arrowsNav: true,
    controlsInside: true,
    controlNavigation: 'none',
    navigateByClick: false,
    usePreloader: false,
    slidesSpacing:0,
    fadeinLoadedSlide: true,
});
