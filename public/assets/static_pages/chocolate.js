var firstChocolateSlider=$(".chocolate-slider-a > ul").royalSlider({keyboardNavEnabled:!0,imageScalePadding:0,imageScaleMode:"fill",arrowsNav:!1,navigateByClick:!1,usePreloader:!1,slidesSpacing:0,fadeinLoadedSlide:!0,addActiveClass:!0,arrowsNavAutoHide:!1,controlsInside:!0}).data("royalSlider");firstChocolateSlider.ev.on("rsAfterSlideChange",function(){0==this.currSlideId?($(".good-chocolate-link").addClass("choco-nav-active"),$(".art-of-tasting-link").removeClass("choco-nav-active")):($(".good-chocolate-link").removeClass("choco-nav-active"),$(".art-of-tasting-link").addClass("choco-nav-active"))}),$(".good-chocolate-link").click(function(a){return a.preventDefault(),firstChocolateSlider.goTo(0),!1}),$(".art-of-tasting-link").click(function(a){return a.preventDefault(),firstChocolateSlider.goTo(1),!1}),$(".chocolate-slider-b > ul").royalSlider({keyboardNavEnabled:!0,imageScalePadding:0,arrowsNav:!0,controlsInside:!0,controlNavigation:"none",navigateByClick:!1,usePreloader:!1,slidesSpacing:0,fadeinLoadedSlide:!0});