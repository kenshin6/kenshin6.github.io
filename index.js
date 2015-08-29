$(document).ready(function(){
	$(".hello").click(function(){
		$(this).toggleClass("hello goodbye");
	});
	$(".goodbye").draggable();
});
$(document).ready(function(){ 
  document.oncontextmenu = function() {return false;};

  $(document).mousedown(function(e){ 
    if( e.button == 2 ) { 
      $(".hello").animate({left: '250px'});; 
      return false; 
    } 
    return true; 
  }); 
});