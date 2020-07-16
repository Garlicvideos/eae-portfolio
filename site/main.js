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
	$(".card-shell").on("mouseenter", async function () {
		//Checks if the card is in proj-content
		if ($(this).closest("#proj-content").length > 0) {	
			focus(this);
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
		$(".cert-modal").find("img").attr("src", source);
		$("#certificate-modal").modal();
	});

	//Checks if user is on mobile
    let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
    if (isMobile) {
        //User is on mobile
        //Redirect user to project page when they click on the project instead of showing overlay
        $(".card-shell").on("click", async function() {
        	//Checks if the card is in proj-content
			if ($(this).closest("#proj-content").length > 0) {
				//Focuses the card
				focus(this);
				//Grabs the name of the project the user clicked on
				let string = $(this).find("button").attr("onclick");
				//Delays redirect by 0.2s, lets blur animation kick in first
				setTimeout(function() {
					//Gets rid of the front portion of the string
					let url = string.replace("redirect('", "");
					//Redirects user to the project page
					redirect(url.replace("');", ""));
				}, 200);
			}
        });
    }

    $(window).scroll((event) => {
    	//Checks if the projects div is in the viewport
    	if ($('#projcts').visible(true)) {
    		//TODO: Make tooltip pop up tellng user to click on projects
   	 	}
   	});

   	//Stops testimonial carousel from automatically cycling
   	$("#teste-carousel").carousel({
   		interval: false
   	});

   	//Open up testimonial modal when testimonials are clicked on
   	$(".teste").on("click", function() {
   		//Grab the testimonial ID of the one the user clicked on
   		let id = $(this).attr("id");
   		//Checks if the testimonial is testimonial number 4
   		if (id == "teste-4") {
   			console.log("yes");
   			//Set the max-width of the modal dialog to 80%
   			$("#teste-modal").find(".modal-dialog").css("max-width", "80%");
   		} else {
   			//Set the max-width of the modal dialog to 32%
   			$("#teste-modal").find(".modal-dialog").css("max-width", "32%");
   		}
   		//Set the img url in the teste modal to the one the user clicked on
   		let url = "./assets/showcase/" + id + ".jpg";
   		$(".teste-modal").find("img").attr("src", url);
   		//Opens the modal
   		$("#teste-modal").modal();
   	})
});

//Focuses the card
function focus(card) {
	//Dim background color
	if ($(card).hasClass("card-highlight")) {
		$(card).css("background-color", "#4d4702");
	} else {
		$(card).css("background-color", "#595959");
	}
	//Blur the card
	$(card).addClass("card-blur");
	//Checks that the user is not on mobile
	if ($(window).width() > 1024) {
		//Show the overlay text
		$(card).find(".card-overlay").css("display", "flex");
	}
}

//Redirect to project
function redirect(project) {
	let url = "./projects/" + project + "/index.html";
	window.location.href = url;
}
