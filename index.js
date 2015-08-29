$(document).ready(function(){
	$(".hello").click(function(){
		$(this).toggleClass("hello goodbye");
	});
});
$(document).ready(function(){
	$(".goodbye").draggable();
});
	