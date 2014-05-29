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
  
  
  function updateCaptionInfo() {
    var caption = $('.rsActiveSlide .rsContent').attr('data-heritage-caption');
    var heritageDate = $('.rsActiveSlide .rsContent').attr('data-date');
    $('.caption').text(caption)
    $('.date span').text(heritageDate)
  }
  updateCaptionInfo();
  
  heritageSlider.ev.on('rsAfterSlideChange', function(event) {
    updateCaptionInfo();
  });
  
  $('.rsArrowRight').click(function(e) {
    heritageSlider.next();
  });
  $('.rsArrowLeft').click(function(e) {
    heritageSlider.prev();
  });
});
