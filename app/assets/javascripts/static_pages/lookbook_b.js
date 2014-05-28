$(document).ready(function(){
  
  function setBottomSectionRatio() {
    var lookbookBottomImageWidth =  $('.image-holder').width();
    var lookbookBottomHeight =  lookbookBottomImageWidth / 1.299;
    $('.lookbook-b.bottom').css('height', lookbookBottomHeight)
  }
  
  setBottomSectionRatio();
  
  $(window).resize(function(){
    setBottomSectionRatio();
  });
});