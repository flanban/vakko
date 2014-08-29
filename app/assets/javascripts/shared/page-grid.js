$(function() {
  //set width of river
  function setContentWidth() {
    viewportWidth =$( window ).width();
    contentWidth = viewportWidth -320;

    $('#content-area').width(contentWidth);
  }


  
  function setAspectRatio0() {
    entryWidth = $('.aspect-ratio-0').width();
    entryHeight = Math.round($('.aspect-ratio-0').width() / 1.6);//that weird number is the img's aspect ratio in decimal form
    entryHeightMobile = Math.round($('.aspect-ratio-0').width() / .8);//that weird number is the img's aspect ratio in decimal form
    if($(window).width()<=768){
      $('.aspect-ratio-0').height(entryHeightMobile);
    } else {
      $('.aspect-ratio-0').height(entryHeight -1);
    }
  }
  function setAspectRatio1() {
    entryWidth = $('.aspect-ratio-1').width();
    entryHeight = Math.round($('.aspect-ratio-1').width() / .855);//that weird number is the img's aspect ratio in decimal form
    entryHeightMobile = Math.round($('.aspect-ratio-1').width() / 1);//that weird number is the img's aspect ratio in decimal form
    if($(window).width()<=768){
      $('.aspect-ratio-1').height(entryHeightMobile);
    } else {
      $('.aspect-ratio-1').height(entryHeight -1);
    }
  }
  function setAspectRatio2() {
    entryWidth = $('.aspect-ratio-2').width();
    entryHeight = Math.round($('.aspect-ratio-2').width() / 1.7);//that weird number is the img's aspect ratio in decimal form
    entryHeightMobile = Math.round($('.aspect-ratio-2').width() / 1);//that weird number is the img's aspect ratio in decimal form

    if($(window).width()<=768){
      $('.aspect-ratio-2').height(entryHeightMobile);
    } else {
      $('.aspect-ratio-2').height(entryHeight -1);
    }
  }
  function setAspectRatio3() {
    entryWidth = $('.aspect-ratio-3').width();
    entryHeight = Math.round($('.aspect-ratio-3').width() / .425);//that weird number is the img's aspect ratio in decimal form
    $('.aspect-ratio-3').height(entryHeight -1);
  }
  function setAspectRatio4() {
    entryWidth = $('.aspect-ratio-4').width();
    entryHeight = Math.round($('.aspect-ratio-4').width() / .85);//that weird number is the img's aspect ratio in decimal form
    entryHeightMobile = Math.round($('.aspect-ratio-4').width() / 1);//that weird number is the img's aspect ratio in decimal form

    if($(window).width()<=768){
      $('.aspect-ratio-4').height(entryHeightMobile);
    } else {
      $('.aspect-ratio-4').height(entryHeight -1);
    }
  }
  function setAspectRatios() {
    setContentWidth();
    setAspectRatio0();
    setAspectRatio1();
    setAspectRatio2();
    setAspectRatio3();
    setAspectRatio4();
  }

  // call functions
  setAspectRatios();
  
  //resize event
  (function($,sr){

    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            };

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    }
    // smartresize 
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

  })(jQuery,'smartresize');


  // usage:
  $(window).smartresize(function(){
    setAspectRatios();
    setSliderHeights();
    fashionRatios();
    setBottomSectionRatio();
    
  });
  $(window).resize(function(){
   // setAspectRatios();
  });

}); 