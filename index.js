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
      $(".goodbye").animate({left: '250px'}, {complete: function(){
      $(".goodbye").hide();
      }); 
      return false; 
    } 
    return true; 
  }); 
});