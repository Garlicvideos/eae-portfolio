$(document).ready(function() {
	//Chevron animation
	$("#view-work-btn").on("mouseenter", function() {
		$(this).find(".gg-chevron-right").css("left", "4%");
	});

	$("#view-work-btn").on("mouseleave", function() {
		$(this).find(".gg-chevron-right").css("left", "0");
	});

	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    //Navbar background 1
	    if (scroll > 100) {
	    	$("#nav-bg").addClass("show-bg");
	    }

	    if (scroll < 100) {
	    	$("#nav-bg").removeClass("show-bg");
	    }

	    //Navbar background 2
	    if (scroll > 670) {
	    	$("#nav-bg2").addClass("show-bg");
	    }

	    if (scroll < 670 && scroll > 100) {
	    	$("#nav-bg2").removeClass("show-bg");
	    	$("#nav-bg").addClass("show-bg");
	    }
	});
});