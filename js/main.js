function Mensaje(mensaje, tiempo){
	$('#mensaje > p').html(mensaje);
	$('#mensaje').fadeIn(150);

	if (tiempo!=0){
		setInterval(function(){
			$('#mensaje').fadeOut(450);
		}, tiempo)	
	}
}

function Leer(){
	$.ajax({
		url: 'php/leer.php',
		dataType: 'json',		
		success: function(datos) {			
			Cuadros(datos);
		},
		error:function(e){
			console.log(e.responseText);
		}
	});
}

function Escribir(codigo){
	console.log(codigo);
	$.ajax({
		url: 'php/escribir.php',
		dataType: 'json',
		data: {
			codigo: codigo
		},
		type: 'POST',
		success: function(datos) {			
			console.log(datos);
			Cuadros(datos);			
		},
		error:function(e){
			console.log(e.responseText);
		}
	});	
}

function Encerar(){
	$.ajax({
		url: 'php/encerar.php',
		dataType: 'json',		
		success: function(datos) {			
			console.log(datos);			
		},
		error:function(e){
			console.log(e.responseText);
		}
	});	
}


function Cuadros(data){
	var mensaje = '';
	var status = '';
	$('.estatus').removeClass('almacena');
	$('.estatus').removeClass('despacha');


	if (data['mov']==1){
		mensaje = "Almacenando producto "+data['producto']+"... ";
		status = 'almacena';
	}else if (data['mov']==2) {
		mensaje = "Despachando producto "+data['producto']+"... ";
		status = 'despacha';
	}

	$('.estatus > p').html(mensaje);
	$('.estatus').addClass(status);
	$('.estatus').fadeIn(150);
	setTimeout(function(){
		$('.estatus').fadeOut(350);
		var pos = data['datos'].split('-');	
		$('.cuadros li').removeClass('on');
		pos.forEach(function(item, index){
			if (item!=0){
				$('.cuadros li:nth('+index+')').addClass('on');
			}
		})
	}, 5000)
}