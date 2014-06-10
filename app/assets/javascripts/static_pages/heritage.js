$(document).ready(function(){
  var heritageSlider = $('.heritage-slider').royalSlider({
    // options
    keyboardNavEnabled: true,
    imageScalePadding: 0,
    imageScaleMode: 'fill',
    controlNavigation: 'none',
    arrowsNav: false,
    navigateByClick: true,
    usePreloader: false,
    slidesSpacing:0,
    fadeinLoadedSlide: true,
    addActiveClass: true,
    controlsInside: true
  }).data('royalSlider');
  
  
  function updateCaptionInfo() {
    
    $('.caption').hide();
    var caption = $('.rsActiveSlide .rsContent').attr('data-heritage-caption');
    var heritageDate = $('.rsActiveSlide .rsContent').attr('data-date');
    $('.caption').text(caption);
    $('.date span').text(heritageDate);
    $('.caption').fadeIn('slow');
    
    //update vertical menu
    $('.vertical-date-menu span').each(function() {
       if (heritageDate == $(this).text()) {
         $('.vertical-date-menu span').removeClass('date-active')
         $(this).addClass('date-active')
       }
    });
    
    if (heritageDate == $('.vertical-date-menu span').text) {
      alert(1)
    }
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
