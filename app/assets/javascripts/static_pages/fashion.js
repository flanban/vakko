$(function() {
  function fashionRatio0() {
    entryWidth = $('.fashion-ratio-0').width();
    entryHeight = Math.round($('.fashion-ratio-0').width() / 1.6);//that weird number is the img's fashion ratio in decimal form
  }
  function fashionRatio1() {
    entryWidth = $('.fashion-ratio-1').width();
    entryHeight = Math.round($('.fashion-ratio-1').width() / .85);//that weird number is the img's fashion ratio in decimal form
    entryHeightMobile = Math.round($('.fashion-ratio-1').width() / .8);//that weird number is the img's fashion ratio in decimal form
    if($(window).width()<768){
      $('.fashion-ratio-1').height(entryHeightMobile);
    } else {
      $('.fashion-ratio-1').height(entryHeight -1);
    }
  }
  function fashionRatio2() {
    entryWidth = $('.fashion-ratio-2').width();
    entryHeight = Math.round($('.fashion-ratio-2').width() / 1.7);//that weird number is the img's fashion ratio in decimal form
    entryHeightMobile = Math.round($('.fashion-ratio-2').width() / 1.6);//that weird number is the img's fashion ratio in decimal form
    if($(window).width()<768){
      $('.fashion-ratio-2').height(entryHeightMobile);
    } else {
      $('.fashion-ratio-2').height(entryHeight -1);
    }
  }
  function fashionRatios() {
    fashionRatio0();
    fashionRatio1();
    fashionRatio2();
  }
  fashionRatios(); // call functions
  $(window).resize(function(){//resize event
    fashionRatios();
  });
});