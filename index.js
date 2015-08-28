$(document).ready(function(){
	$("div.hello").click(function(){
		$(this).toggleClass("hello goodbye");
	});
	$(".goodbye").draggable();
	});
});
	