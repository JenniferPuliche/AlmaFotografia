$(window).load(function(){
    $('#preload').fadeOut(500);
});

var alturaFoto = $("header").height();

$(window).scroll(function(){

	var posY = window.pageYOffset;
	
	if(posY > alturaFoto){

		$("header .nav").css({"background":"rgba(0,0,0,0.5)"})

	}else{

		$("header .nav").css({"background":"rgba(0,0,0,0)"})


	}

})