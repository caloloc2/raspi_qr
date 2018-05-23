function checkOS() {
	// comprueba el tipo de navegador 
	if(navigator.userAgent.indexOf('IRIX') != -1)
	{ var OpSys = "Irix"; }
	else if((navigator.userAgent.indexOf('Win') != -1) &&
	(navigator.userAgent.indexOf('4.90') != -1))
	{ var OpSys = "Windows Millennium"; }
	else if((navigator.userAgent.indexOf('Win') != -1) &&
	(navigator.userAgent.indexOf('98') != -1))
	{ var OpSys = "Windows 98"; }
	else if((navigator.userAgent.indexOf('Win') != -1) &&
	(navigator.userAgent.indexOf('95') != -1))
	{ var OpSys = "Windows 95"; }
	else if(navigator.appVersion.indexOf("16") !=-1)
	{ var OpSys = "Windows 3.1"; }
	else if (navigator.appVersion.indexOf("NT") !=-1)
	{ var OpSys= "Windows NT"; }
	else if(navigator.appVersion.indexOf("SunOS") !=-1)
	{ var OpSys = "SunOS"; }
	else if(navigator.appVersion.indexOf("Linux") !=-1)
	{ var OpSys = "Linux"; }
	else if(navigator.userAgent.indexOf('Mac') != -1)
	{ var OpSys = "Macintosh"; }
	else if(navigator.appName=="WebTV Internet Terminal")
	{ var OpSys="WebTV"; }
	else if(navigator.appVersion.indexOf("HP") !=-1)
	{ var OpSys="HP-UX"; }
	else { var OpSys = "other"; }
	return OpSys;
}

function Mensaje(mensaje, tiempo){
	// Muestra el mensaje en la interfaz
	$('#mensaje > p').html(mensaje);
	$('#mensaje').fadeIn(150);

	if (tiempo!=0){ // luego de un tiempo se desaparece automaticamente el mensaje
		setInterval(function(){
			$('#mensaje').fadeOut(450);
		}, tiempo)	
	}
}

function Leer(){
	// Ejecuta el archivo leer.php que se encarga de leer las posiciones en "bodega"
	$.ajax({
		url: 'php/leer.php',
		dataType: 'json',		
		success: function(datos) {			
			Cuadros(datos); // Llama a la funcion Cuadros
		},
		error:function(e){
			console.log(e.responseText); // muestra el error si lo hay
		}
	});
}

function Escribir(codigo){
	// Ejecuta el archivo escribir.php que se encarga de recibir el codigo leido y comparar con los existentes 
	// para determinar si existe o no, y en que posicion se encuentra
	$.ajax({
		url: 'php/escribir.php',
		dataType: 'json',
		data: {
			codigo: codigo
		},
		type: 'POST',
		success: function(datos) {						
			Cuadros(datos); // Llama a la funcion Cuadros
		},
		error:function(e){
			console.log(e.responseText); // muestra el error si lo hay
		}
	});	
}

function Encerar(){
	// Ejecuta el archivo encerar.php que se encarga de apagar los pines de la raspberry y encerar todos los valores.
	$.ajax({
		url: 'php/encerar.php',
		dataType: 'json',		
		success: function(datos) {			
			console.log(datos);	
		},
		error:function(e){
			console.log(e.responseText); // muestra el error si lo hay
		}
	});	
}


function Cuadros(data){
	// Funcion que muestra el mensaje correspondiente y posiciona 
	// segun el codigo QR leido

	var mensaje = '';
	var status = '';
	$('.estatus').removeClass('almacena');
	$('.estatus').removeClass('despacha');

	// muestra mensaje
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
				$('.cuadros li:nth('+index+')').addClass('on'); // pinta el cuadro si corresponde
			}
		})
	}, 5000)
}