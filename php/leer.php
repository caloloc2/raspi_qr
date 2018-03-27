<?php 
$fp = fopen("lugares.txt", "r");
$respuesta['datos'] = fgets($fp);

fclose($fp);

echo json_encode($respuesta);