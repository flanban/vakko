$(function(){$(window).width()>768&&($(".collection.has-subnav").stop(!0,!0).hover(function(){$("#subnav-menu").addClass("hover")},function(){setTimeout(function(){$("#subnav-menu").removeClass("hover")},1e3)}),$("#subnav-menu").stop(!0,!0).hover(function(){$(this).addClass("active")},function(){setTimeout(function(){$("#subnav-menu").removeClass("hover active")},100)}))});