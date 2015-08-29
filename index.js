$(document).ready(function(){
	$(".hello").click(function(){
		$(this).toggleClass("hello goodbye");
	});
	$(".goodbye").draggable();
});
