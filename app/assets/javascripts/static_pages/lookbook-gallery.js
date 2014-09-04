function loadDesignerSlider() {
  $('.slideCount').hide();
  var designerSlider = $('.lower-content-slider').royalSlider({
    // options
    keyboardNavEnabled: true,
    controlNavigation: 'none',
    imageScalePadding: 0,
    imageScaleMode: 'fill',
    arrowsNav: false,
    navigateByClick: false,
    usePreloader: false,
    slidesSpacing:0,
    fadeinLoadedSlide: true,
    addActiveClass: true,
    arrowsNavAutoHide: false,
    controlsInside: false
  });

  var designerSliderInstance = designerSlider.data('royalSlider');
  var slideCountEl = $('<div class="rsSlideCount slideCount left"></div>').insertAfter( $('.rsArrowLeft') );
  function updCount() {
    slideCountEl.html( (designerSliderInstance.currSlideId+1) + '/' + designerSliderInstance.numSlides );
  }
  designerSliderInstance.ev.on('rsAfterSlideChange', updCount);
  updCount();

  $('.rsArrowRight').click(function(e) {
    designerSliderInstance.next();
  });
  $('.rsArrowLeft').click(function(e) {
    designerSliderInstance.prev();
  });
}