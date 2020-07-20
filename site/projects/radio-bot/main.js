
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

	//Checks if user is on mobile
    let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
    if (isMobile) {
        //User is on mobile
        //Shortens "No max player capacity" for mobile usage
        $("#max_cap").text("No max players");
    }

    //Enlarge certificate when clicked on
	$(".d-block").on("click", function ()  {
		//Get the source of the image in the div that the user clicked on
		let source = $(this).attr("src");
		//Check if the user clicked on a image. If it is a video, get video source instead
		if (source == undefined) {
			//Set the source as video source
			source = $(this).find("source").attr("src");
			//Change the video source in the modal to the one the user clicked on
			$(".modal-body").find("source").attr("src", source);
			//Hide the image in the modal and display the video instead
			$(".modal-body").find("img").addClass("hidden");
			$(".modal-body").find("video").removeClass("hidden");
		} else {
			//It is a image
			//Change the image source in the modal to the one the user clicked on
			$(".modal-body").find("img").attr("src", source);
			//Hide the video in the modal and display the image instead
			$(".modal-body").find("video").addClass("hidden");
			$(".modal-body").find("img").removeClass("hidden");
		}

		//Open modal
		$("#carousel-modal").modal();
		//Stop carousel
		$(".carousel").carousel('pause');
	});

	//Fires when the modal closes
	$(".modal").on("hidden.bs.modal", function () {
		//Stop the video from playing if it is
		$('.modal-content').find("video").get(0).pause();
		//Resume the carousel
		$(".carousel").carousel('cycle');
	});

	//Change background color of modal if the src is kashoot logo
	$(".modal").on("show.bs.modal", function () {
		//Check if the src of the image in the modal is the kashoot logo
		let image = $(".modal-body").find("img").attr("src");
		if (image == "./assets/carousel/slide-5.png") {
			//Change background color to grey
			$(".modal-content").css("background-color", "#a6a6a6");
		} else {
			//Change background color to white
			$(".modal-content").css("background-color", "white");
		}
	});
});

//Google analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-173014077-1');