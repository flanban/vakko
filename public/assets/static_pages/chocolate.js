$(document).ready(function(){function e(){var e=$(".chocolate-slider-b.chocolate-arrows > ul li > img").height()+10;$(".chocolate-slider-b .rsNav.rsBullets").css("top",e)}function a(){if($(window).width()<1024){var e=45,a=$("#art-of-tasting").outerHeight()+e;$(".chocolate-slider-a > ul").outerHeight(a)}}function o(){if($(window).width()<1024){var e=$(".chocolate-slider-b li:first-child").outerHeight();$(".chocolate-slider-b").outerHeight(e)}}function i(){a(),o(),e()}function l(){d.html(c.currSlideId+1+" / "+c.numSlides)}i();var t=$(".chocolate-slider-a > ul").royalSlider({keyboardNavEnabled:!0,imageScalePadding:0,imageScaleMode:"fill",controlNavigation:"bullets",arrowsNav:!1,navigateByClick:!1,usePreloader:!1,slidesSpacing:0,fadeinLoadedSlide:!0,addActiveClass:!0,arrowsNavAutoHide:!1,controlsInside:!0}).data("royalSlider");t.ev.on("rsAfterSlideChange",function(){0==this.currSlideId?($(".good-chocolate-link").addClass("choco-nav-active"),$(".art-of-tasting-link").removeClass("choco-nav-active")):($(".good-chocolate-link").removeClass("choco-nav-active"),$(".art-of-tasting-link").addClass("choco-nav-active"))}),$(".good-chocolate-link").click(function(e){return e.preventDefault(),t.goTo(0),!1}),$(".art-of-tasting-link").click(function(e){return e.preventDefault(),t.goTo(1),!1});var r=$(".chocolate-slider-b > ul").royalSlider({keyboardNavEnabled:!0,imageScalePadding:0,arrowsNav:!1,controlsInside:!0,navigateByClick:!1,usePreloader:!1,slidesSpacing:0,fadeinLoadedSlide:!0}),c=r.data("royalSlider"),d=$('<div class="rsSlideCount"></div>').appendTo($(".rsArrowRight"));c.ev.on("rsAfterSlideChange",l),l()});