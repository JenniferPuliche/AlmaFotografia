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

//GRID

const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
		});
	});

	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
	});

	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
});


//FORM

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


