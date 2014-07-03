$(function() {
  if($(window).width()>768){
    // show subnav when you rollover main menu item
    $(".collection.has-subnav").hover(function() {
      $('#subnav-menu').stop(true).fadeTo(200, 1);
    }, function() {
      $('#subnav-menu').stop(true).fadeTo(200, 0);
    });
  }
});