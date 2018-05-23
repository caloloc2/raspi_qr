<?php
// Encera los valores de las posiciones y los pines mediante los archivos de texto q seran leidos por la raspberry.

$respuesta['estado'] = false; 

try{
	$fp = fopen("lugares.txt", "w");
	fputs($fp, "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");
	fclose($fp);

	$fp = fopen("raspi.txt", "w");
	fputs($fp, "0");
	fclose($fp);
	
	$respuesta['estado'] = true;
}catch(Exception $e){
	fclose($fp);
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);