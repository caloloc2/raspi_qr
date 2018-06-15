<?php
$respuesta['estado'] = false; 

try{
	//  obtiene el codigo qr leido desde la camara
	$codigo = $_POST['codigo'];

	// recoge los datos actuales de cada posicion
	$linea = '';
	$fp = fopen("lugares.txt", "r");
	while(!feof($fp)) {
		$linea = explode('-', fgets($fp));
	}
	fclose($fp);

	// compara el codigo leido y crea la nueva linea que contiene las posiciones
	$nueva_linea = '';
	$respuesta['mov'] = 0;
	$respuesta['producto'] = '';

	$productos = array(
		"BROMO", "TIOCETONA", "AZUFRE", "ARSENICO", "PLUTONIO", "CROMO", "ALQUITRAN", "RADON", "CADMIO", "FRANCIO",
		"METANO", "TOLUENO", "BERILIO", "BENCENO", "AMIANTO", "POLONIO", "AMONIACO", "NAFTALINA", "ACROLEINA", "MERCURIO",
		"FORMALDEHIDO", "ANTIMONIO", "PLOMO", "FLUOR", "RICINA", "MAGNESIO", "CLORO", "VX", "URANIO", "BOTULINA"
	);
	$pi = 0;
	$aux = 1;
	for ($x=0; $x<30; $x++){
		if ($productos[$x]==$codigo){
			$respuesta['producto'] = $codigo;
			if ($linea[$x]=='0'){
				$nueva_linea .= '1';
				$respuesta['mov'] = 1; ### ALMACENA
				$pi = $x+$aux;
			}else{
				$nueva_linea .= '0';
				$respuesta['mov'] = 2; ### DESPACHA
				$pi = $x+$aux+1;
			}
		}else{
			$nueva_linea .= $linea[$x];
			$aux+=1;
		}

		if ($x<30){
			$nueva_linea .= '-';
		}
	}

	// guarda en el archivo de texto la posicion del codigo si corresponde.
	$fp = fopen("lugares.txt", "w");
	fputs($fp, $nueva_linea);
	fclose($fp);

	// guarda el numero de la posicion en el archivo de texto.
	$respuesta['pi'] = $pi;
	$fp = fopen("raspi.txt", "w");
	fputs($fp, $pi);
	fclose($fp);

	$respuesta['datos'] = $nueva_linea;
	$respuesta['estado'] = true;
}catch(Exception $e){
	fclose($fp);
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);