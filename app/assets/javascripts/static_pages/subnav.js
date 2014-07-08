function showMensNav() {
 // $('#subnav-menu-mens').stop(true).css('visibility','visible');
 $('#subnav-menu-mens').stop(true).fadeTo(200, 1);
}
function showWomensNav() {
  //$('#subnav-menu-womens').stop(true).css('visibility','visible')
  $('#subnav-menu-womens').stop(true).fadeTo(200, 1);
}
function showHeadquartersNav() {
  //$('#subnav-menu-headquarters').stop(true).css('visibility','visible');
  $('#subnav-menu-headquarters').stop(true).fadeTo(200, 1);
}
function pickAndShowNav() {
  if ($(this).hasClass('mens-nav')) {
    showMensNav()
  } else if ($(this).hasClass('womens-nav')) {
    showWomensNav()
  } else if ($(this).hasClass('headquarters-nav')) {
    showHeadquartersNav()
  }
}
function hideNav() {
  $('#subnav-menu-mens, #subnav-menu-womens, #subnav-menu-headquarters').stop(true).fadeTo(700, 0, function() {
  });
}

$(function() {

  
  if($(window).width()>768){
    // show subnav when you rollover main menu item
    $(".has-subnav").hover(function() {
      pickAndShowNav.apply(this)
    }, function() {
          hideNav();
          setTimeout(function(){
            //alert(1)
          }, 5000);
        });
  }
  
  // make sure it stays showing
   $('.subnav-menu').stop( true, true ).hover(
      function() {
       // alert(1)
        //hideNav().stop(true)
        //showMensNav()
       // alert($('#mens-subnav-menu').text())
        //$('#mens-subnav-menu').stop(true, true).fadeTo(200, 1);
        //$('#mens-subnav-menu').stop(true, true).css('opcatiy', '1!important')
      }, function() {
        //hideNav();
        
    /*    setTimeout(function(){
          hideNav();
          //alert(1)
        }, 100); */
    });
});