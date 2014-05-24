$(document).ready(function($) {
  // initialize slider and save it's object
  $('.primary-slider').royalSlider({
    // options
    keyboardNavEnabled: true,
    imageScalePadding: 0,
    arrowsNav: false,
    controlNavigation: 'bullets',
    navigateByClick: false,
    usePreloader: false,
    slidesSpacing:0,
    fadeinLoadedSlide: true,
    addActiveClass: true,
    arrowsNavAutoHide: false,
    controlsInside: true
  });
});
