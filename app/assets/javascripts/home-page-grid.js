$(function() {
  
  //set width of river
  function setContentWidth() {
    viewportWidth =$( window ).width();
    contentWidth = viewportWidth -320;

    $('#content-area').width(contentWidth);
  }

  function setAspectRation0() {
    entryWidth = $('.aspect-ratio-0').width();
    entryHeight = $('.aspect-ratio-0').width() / 1.6;//that weird number is the img's aspect ratio in decimal form
    $('.aspect-ratio-0').height(entryHeight);
  }
  function setAspectRation1() {
    entryWidth = $('.aspect-ratio-1').width();
    entryHeight = $('.aspect-ratio-1').width() / .85;//that weird number is the img's aspect ratio in decimal form
    $('.aspect-ratio-1').height(entryHeight -1);
  }
  function setAspectRation2() {
    entryWidth = $('.aspect-ratio-2').width();
    entryHeight = $('.aspect-ratio-2').width() / 1.7;//that weird number is the img's aspect ratio in decimal form
    $('.aspect-ratio-2').height(entryHeight -1);
  }
  function setAspectRation3() {
    entryWidth = $('.aspect-ratio-3').width();
    entryHeight = $('.aspect-ratio-3').width() / .425;//that weird number is the img's aspect ratio in decimal form
    $('.aspect-ratio-3').height(entryHeight -1);
  }
  function setAspectRatios() {
    setContentWidth();
    setAspectRation0();
    setAspectRation1();
    setAspectRation2();
    setAspectRation3();
  }
  


  // call functions
  setAspectRatios();
  //resize event
  $(window).resize(function(){
    setAspectRatios();
  });

});