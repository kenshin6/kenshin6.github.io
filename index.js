$(document).ready(function(){
	$(".hello").click(function(){
		$(this).toggleClass("goodbye");
	});
	$(".hello").draggable();
});
	