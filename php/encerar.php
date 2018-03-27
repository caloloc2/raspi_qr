<?php
$respuesta['estado'] = false; 

try{
	$fp = fopen("lugares.txt", "w");
	fputs($fp, "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");
	fclose($fp);
	
	$respuesta['estado'] = true;
}catch(Exception $e){
	fclose($fp);
	$respuesta['error'] = $e->getMessage();
}

echo json_encode($respuesta);