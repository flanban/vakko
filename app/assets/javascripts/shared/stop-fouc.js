$(function() {
   // $('body').fadeTo(100,0);
   $('#initial-preloader').fadeTo(500,1);
    $(window).load(function(){
        $('#initial-preloader').fadeTo(250,0);
        $('#primary-menu, #content-area').fadeTo(500,1);
        
    });
});