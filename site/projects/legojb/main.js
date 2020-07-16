
$(document).ready(() => {
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

    //Enlarge carousel items when clicked on
	$(".d-block").on("click", function ()  {
		//Get the source of the image in the div that the user clicked on
		let source = $(this).attr("src");
		//Change the image source in the modal to the one the user clicked on
		$(".modal-body").find("img").attr("src", source);
		//Open modal
		$("#carousel-modal").modal();
	});
});