$(document).ready(function(){
	$(".hello").click(function(){
		$(this).toggleClass("goodbye hello");
	});
	$(".goodbye").mousedown(function(){
		$(this).draggable();
	});
});
	