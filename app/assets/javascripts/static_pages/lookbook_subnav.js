$(function() {
  if($(window).width()>768){
    // show subnav when you rollover main menu item
    $('.collection.has-subnav').stop( true, true ).hover(
        function() {
          $( '#subnav-menu' ).addClass( "hover" );
        }, function() {
          setTimeout(function(){
            $( '#subnav-menu' ).removeClass( "hover" )}, 1000);
        });
    
    // make sure it stays showing
    $('#subnav-menu').stop( true, true ).hover(
      function() {
        $( this ).addClass( "active" );
      }, function() {
        setTimeout(function(){
      $( '#subnav-menu' ).removeClass( "hover active" )}, 100);
    });
  }
});