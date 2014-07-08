function showMensNav() {
 // $('#subnav-menu-mens').stop(true).css('visibility','visible');
 $('.subnav-menu').removeClass('subnav-active')
 $('#subnav-menu-mens').addClass('subnav-active')
 $('#subnav-menu-mens').stop(true).fadeTo(100, 1);
}
function showWomensNav() {
  //$('#subnav-menu-womens').stop(true).css('visibility','visible')
  $('.subnav-menu').removeClass('subnav-active')
  $('#subnav-menu-womens').addClass('subnav-active')
  $('#subnav-menu-womens').stop(true).fadeTo(100, 1);
}
function showHeadquartersNav() {
  //$('#subnav-menu-headquarters').stop(true).css('visibility','visible');
  $('.subnav-menu').removeClass('subnav-active')
  $('#subnav-menu-headquarters').addClass('subnav-active')
  $('#subnav-menu-headquarters').stop(true).fadeTo(100, 1);
}
function hideMensNav() {
 // $('#subnav-menu-mens').stop(true).css('visibility','visible');
 $('#subnav-menu-mens').stop(true).fadeTo(100, 0);
}
function hideWomensNav() {
  //$('#subnav-menu-womens').stop(true).css('visibility','visible')
  $('#subnav-menu-womens').stop(true).fadeTo(100, 0);
}
function hideHeadquartersNav() {
  //$('#subnav-menu-headquarters').stop(true).css('visibility','visible');
  $('#subnav-menu-headquarters').stop(true).fadeTo(100, 0);
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

  $( '.subnav-active' ).fadeTo( 100 , 0, function() {
    
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
       // alert($(this).attr('id'))
        //hideNav().stop(true)
        $('.subnav-active').stop(true, true).fadeTo(200, 1);

      }, function() {
        hideNav();
    });
});