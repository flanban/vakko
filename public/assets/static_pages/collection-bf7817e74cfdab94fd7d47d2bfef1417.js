$(".static_pages.collection").length>0&&($(function(){$(".button-close").click(function(e){e.preventDefault(),infoWidth=$(".info-slideout").height(),$(".info-slideout").css("margin-right",-infoWidth),$("html").removeClass("slide-info-open")}),$(".button-show-info").click(function(e){e.preventDefault(),$(".info-slideout").css("margin-right",0),$("html").addClass("slide-info-open")})}),$(document).ready(function(){function e(){o.html(n.currSlideId+1+" / "+n.numSlides)}setTimeout(function(){$(".collection-grid a img").hide(0).delay(500).fadeIn(400)},16);var i=$(".collection-slider").royalSlider({keyboardNavEnabled:!0,controlNavigation:"none",imageScalePadding:0,imageScaleMode:"fill",arrowsNav:!0,navigateByClick:!1,usePreloader:!1,slidesSpacing:0,fadeinLoadedSlide:!0,addActiveClass:!0,arrowsNavAutoHide:!1,deeplinking:{enabled:!0,change:!0,prefix:"-"},controlsInside:!0}),n=i.data("royalSlider"),o=$('<div class="rsSlideCount rsArrowIcn"></div>').appendTo($(".rsArrowRight"));n.ev.on("rsAfterSlideChange",e),e()}));