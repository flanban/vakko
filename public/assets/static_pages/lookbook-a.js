$(function(){$("body").on("click",".button-show-grid",function(i){i.preventDefault(),$("#content-area").addClass("grid-open"),$(".collection-grid").removeClass("hidden"),$(".collection-grid").css("opacity","1")}),$("body").on("click",".collection-grid > a",function(){$("#content-area").removeClass("grid-open"),$(".collection-grid").css("opacity","0"),setTimeout(function(){$(".collection-grid").addClass("hidden")},700)}),$(".button-close").click(function(i){i.preventDefault(),infoWidth=$(".info-slideout").outerWidth(),$(".info-slideout").css("margin-right",-infoWidth),$("html").removeClass("slide-info-open")}),$(".button-show-info").click(function(i){i.preventDefault(),$(".info-slideout").css("margin-right",0),$("html").addClass("slide-info-open")})}),$(document).ready(function(){function i(){n.html(e.currSlideId+1+" / "+e.numSlides)}setTimeout(function(){$(".collection-grid a img").hide(0).delay(500).fadeIn(400)},16);var o=$(".lookbook-slider.lookbook-slider-a").royalSlider({keyboardNavEnabled:!0,controlNavigation:"none",imageScalePadding:0,imageScaleMode:"fill",arrowsNav:!0,navigateByClick:!1,usePreloader:!1,slidesSpacing:0,fadeinLoadedSlide:!0,arrowsNavAutoHide:!1,controlsInside:!0,deeplinking:{enabled:!0,change:!0,prefix:"-"}}),e=o.data("royalSlider"),n=$('<div class="rsSlideCount"></div>').appendTo($(".rsArrowRight"));e.ev.on("rsAfterSlideChange",i),i()});