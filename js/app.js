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

});

$(document).ready(function(){
	$('.formulario').on('click', '.contacto', function(event){
		event.preventDefault();
		$(this).closest('.formulario').find('.datos').fadeToggle(1000);
	});
	$('.formulario').on('click', '.agregar', function(event){
		event.preventDefault();
		$(this).closest('.formulario').find('.direccion').fadeToggle(1000);
	});


});


var inputName = document.querySelector('input[name="nombre"]');

 inputName.onblur = function (){
    if (inputName.value == "") {
      this.classList.add("is-invalid")
      this.parentNode.querySelector('.invalid-feedback').innerText='Ingrese un nombre válido';
    }else{
      this.classList.remove('.invalid-feedback');
    }
  }