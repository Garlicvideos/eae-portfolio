//Anchor tag scroll smooth animation
$(document).on('click', 'a[href^="#"]', function (event) {
	//Checks if the anchor tag is from testimonial carousel
	if ($(this).attr("href") == "#teste-carousel") {
		//Do not animate
		return;
	}
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

	//Change color of github icon and text in button to black on hover
	$(".github").on("mouseenter", function() {
		$(this).find("img").attr("src", "./assets/icons/github_black.png");
		$(this).find("a").css("color", "black");
	});

	//Change color of github icon and text in button to white on unhover
	$(".github").on("mouseleave", function() {
		$(this).find("img").attr("src", "./assets/icons/github_white.png");
		$(this).find("a").css("color", "white");
	});

	//Enlarge certificate when clicked on
	$(".cert-shell").on("click", function ()  {
		//Get the source of the image in the div that the user clicked on
		let source = $(this).find("img").attr("src");
		//Check if the image is horizontal or vertical
		if ($(this).find("img").hasClass("vertical-cert")) {
			//The certificate is vertical, remove max-width from modal-dialog
			$("#certificate-modal").find(".modal-dialog").css("max-width", "500px");
		} else {
			//The certificate is horizontal, add max-width to modal-dialog
			$("#certificate-modal").find(".modal-dialog").css("max-width", "60%");
		}
		//Format the image source so that the high res versions get loaded instead
		source = highres(source);
		//Change the image source in the modal to the one the user clicked on
		$(".cert-modal").find("img").attr("src", source);
		$("#certificate-modal").modal();
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
   			//Set the max-width of the modal dialog to 80%
   			$("#teste-modal").find(".modal-dialog").css("max-width", "90%");
   		} else {
   			//Set the max-width of the modal dialog to 32%
   			$("#teste-modal").find(".modal-dialog").css("max-width", "500px");
   		}
   		//Set the img url in the teste modal to the one the user clicked on
   		let url = "./assets/showcase/" + id + ".jpg";
   		//Get the higher resolution image
   		url = highres(url);
   		$(".teste-modal").find("img").attr("src", url);
   		//Opens the modal
   		$("#teste-modal").modal();
   	});

   	//Disable email tooltip first
   	$("#email").tooltip('disable');

   	//Copy email address to clipboard when user clicks on it
	$("#email").on("click", function() {
		//Add email to clipboard
		copyStringToClipboard("xavierteo26@gmail.com");
		//Enable tooltip for the email element
		$("#email").tooltip("enable");
		//Invoke the "Copied!" animation
		$("#email").tooltip("show");
		//Wait 0.5s
		setTimeout(function() {
			//Hide the tooltip
			$("#email").tooltip("hide");
			//Disable tooltip for the email element
			$("#email").tooltip("disable");
		}, 500);
	});
});

//Focuses the card
function focus(card) {
	//Checks that the user is not on mobile
	if ($(window).width() > 1024) {
		//Dim background color
		if ($(card).hasClass("card-highlight")) {
			$(card).css("background-color", "#4d4702");
		} else {
			$(card).css("background-color", "#595959");
		}
		//Blur the card
		$(card).addClass("card-blur");
		//Show the overlay text
		$(card).find(".card-overlay").css("display", "flex");
	}
}

//Redirect to project
function redirect(project) {
	let url = "./projects/" + project;
	window.location.href = url;
}

//Format the image source so that the high res versions get loaded instead
function highres(source) {
	source = source.split(/(.png)|(.jpg)/);
	console.log(source);
	for (var i = 0; i < source.length; i++) {
		if (source[i] == undefined) {
			source[i] = "";
		}
	}
	source = source[0] + "-highres" + source[1] + source[2] + source[3];
	return source;
}

//Copy string to clipboard
function copyStringToClipboard (str) {
   // Create new element
   var el = document.createElement('textarea');
   // Set value (string to be copied)
   el.value = str;
   // Set non-editable to avoid focus and move outside of view
   el.setAttribute('readonly', '');
   el.style = {position: 'absolute', left: '-9999px'};
   document.body.appendChild(el);
   // Select text inside element
   el.select();
   // Copy text to clipboard
   document.execCommand('copy');
   // Remove temporary element
   document.body.removeChild(el);
}

//Initialise tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Google analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-173014077-1');