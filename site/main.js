$(document).ready(function() {
	$("#view-work-btn").on("mouseenter", function() {
		$(this).find(".gg-chevron-right").css("left", "4%");
	});

	$("#view-work-btn").on("mouseleave", function() {
		$(this).find(".gg-chevron-right").css("left", "0");
	});
});