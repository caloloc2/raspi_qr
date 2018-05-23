<?php 
// lee la posicion de cada codigo qr en bodega

$fp = fopen("lugares.txt", "r");
$respuesta['datos'] = fgets($fp);

fclose($fp);

echo json_encode($respuesta);