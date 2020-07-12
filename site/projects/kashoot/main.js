
$(document).ready(() => {
	//Change color of github icon and text in button to black on hover
	$("#view-work-btn").on("mouseenter", function() {
		$(".github-btn-img").attr("src", "./assets/icons/github_black.png");
		$("#view-work-btn > a").css("color", "black");
	});

	//Change color of github icon and text in button to white on unhover
	$("#view-work-btn").on("mouseleave", function() {
		$(".github-btn-img").attr("src", "./assets/icons/github.png");
		$("#view-work-btn > a").css("color", "white");
	});

	//Navbar scroll background updates
	$(window).scroll((event) => {
	    var scroll = $(window).scrollTop();
	    //Navbar background
	    if (scroll > 50) {
	    	$("#nav-bg").addClass("show-bg");
	    }

	    if (scroll < 50) {
	    	$("#nav-bg").removeClass("show-bg");
	    }
	});
});