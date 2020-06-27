//Anchor tag scroll smooth animation
$(document).on('click', 'a[href^="#"]', function (event) {
	console.log("clic!!!!");
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});


$(document).ready(() => {
	//Navbar scroll background updates
	$(window).scroll((event) => {
	    var scroll = $(window).scrollTop();
	    //Navbar background 1
	    if (scroll > 100 && scroll < 720) {
	    	$("#nav-bg").addClass("show-bg");
	    }

	    if (scroll < 100) {
	    	$("#nav-bg").removeClass("show-bg");
	    }

	    //Navbar background 2
	    if (scroll > 720) {
	    	$("#nav-bg2").addClass("show-bg");
	    }

	    if (scroll < 720 && scroll > 100) {
	    	$("#nav-bg2").removeClass("show-bg");
	    	$("#nav-bg").addClass("show-bg");
	    }
	});

	//Chevron animations
	$(".chev-anim").on("mouseenter", function () {
		$(this).find(".gg-chevron-right").css("left", "4%");
	});

	$(".chev-anim").on("mouseleave", function () {
		$(this).find(".gg-chevron-right").css("left", "0");
	});

	//Card shell hover animation
	$(".card-shell").on("mouseenter", function () {
		//Checks if the card is in proj-content
		if ($(this).closest("#proj-content").length > 0) {	
			//Dim background color
			if ($(this).hasClass("card-highlight")) {
				$(this).css("background-color", "#4d4702");
			} else {
				$(this).css("background-color", "#595959");
			}
			//Blur the card
			$(this).addClass("card-blur");
			//Checks that the user is not on mobile
			if ($(window).width() > 1024) {
				//Show the overlay text
				$(this).find(".card-overlay").css("display", "flex");
			}
		}
	});

	//Card shell unhover animation
	$(".card-shell").on("mouseleave", function () {
		//Checks if the card is in proj-content
		if ($(this).closest("#proj-content").length > 0) {			
			//Brighten background color
			if ($(this).hasClass("card-highlight")) {
				$(this).css("background-color", "#f0e005");
			} else {
				$(this).css("background-color", "#e8e8e8");
			}
			//Unblur the card
			$(this).removeClass("card-blur");
			//Checks that the user is not on mobile
			if ($(window).width() > 1024) {
				//Hide the overlay text
				$(this).find(".card-overlay").css("display", "none");
			}
		}
	});

	//Enlarge certificate when clicked on
	$(".cert-shell").on("click", function ()  {
		//Get the source of the image in the div that the user clicked on
		let source = $(this).find("img").attr("src");
		//Change the image source in the modal to the one the user clicked on
		$(".modal-body").find("img").attr("src", source);
		$("#certificate-modal").modal();
	});
});