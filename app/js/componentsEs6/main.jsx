function hoverMenu() {
	jQuery('.firstStep > li').hover(function() {
    jQuery(this).find('> .dropdown-menu').stop(true, true).fadeIn(0);
	}, function() {
	  jQuery(this).find('> .dropdown-menu').stop(true, true).fadeOut(0);
	})

	jQuery('.firstStep > li > ul > li').hover(function() {
    jQuery(this).find('> .dropdown-menu').stop(true, true).fadeIn(0);
	}, function() {
	  jQuery(this).find('> .dropdown-menu').stop(true, true).fadeOut(0);
	})
	
}

let menuAdaptive = function() {
	$(".menuTrigger").click(function(e) {
		e.preventDefault();
		$(".adaptiveMenu ul li").slideToggle(300);
	})

	function mobuleMenu() {
		if($(window).width() < 992) {
			$(".adaptiveMenu .number").insertAfter(".logo");
			$(".adaptiveMenu .menuTrigger").insertAfter(".number");
			$(".firstStep li").css({"display":"none"});
		}
	}

	$(window).resize(function() {
		mobuleMenu();
		if($(window).width() > 992) {
			$(".adaptiveMenu nav ul li").removeAttr("style");
			$(".adaptiveMenu .number").insertAfter(".adaptiveMenu nav > ul");
		}
	})

	mobuleMenu();
}

$(document).ready(function() {
	menuAdaptive();
	hoverMenu();
})