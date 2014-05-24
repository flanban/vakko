$(document).ready(function(){
  var heritageSlider = $('.heritage-slider').royalSlider({
    // options
    keyboardNavEnabled: true,
    imageScalePadding: 0,
    imageScaleMode: 'fill',
    controlNavigation: 'none',
    arrowsNav: false,
    navigateByClick: false,
    usePreloader: false,
    slidesSpacing:0,
    fadeinLoadedSlide: true,
    addActiveClass: true,
    controlsInside: true
  }).data('royalSlider');
  $('.rsArrowRight').click(function(e) {
    heritageSlider.next();
  });
  $('.rsArrowLeft').click(function(e) {
    heritageSlider.prev();
  });
});
