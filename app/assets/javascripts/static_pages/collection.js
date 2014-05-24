if ($('.static_pages.collection').length > 0) {
  $(function() {
    $('.button-close').click(function(e) {
      e.preventDefault();
      infoWidth = $('.info-slideout').height()
      $('.info-slideout').css('margin-right', -infoWidth);
      $('html').removeClass('slide-info-open');
    });
    $('.button-show-info').click(function(e) {
      e.preventDefault();
      $('.info-slideout').css('margin-right', 0);
      $('html').addClass('slide-info-open');
    });
  });
  
  $(document).ready(function(){
    setTimeout(function() {
      $(".collection-grid a img").hide(0).delay(500).fadeIn(400);
    }, 16);

  //slider stuff
    var sliderCollection = $('.collection-slider').royalSlider({
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
    var sliderInstanceCollection = sliderCollection.data('royalSlider');
    var slideCountEl = $('<div class="rsSlideCount rsArrowIcn"></div>').appendTo( $('.rsArrowRight') );
  
    function updCount() {
      slideCountEl.html( (sliderInstanceCollection.currSlideId+1) + ' / ' + sliderInstanceCollection.numSlides );
    }
    sliderInstanceCollection.ev.on('rsAfterSlideChange', updCount);
    updCount();
  });
}