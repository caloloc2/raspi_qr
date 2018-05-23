<?php
// cierra la sesion del usuario
session_start();
session_destroy();

// encera todas las posiciones
$fp = fopen("php/lugares.txt", "w");
fputs($fp, "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");
fclose($fp);

// encera los valores para que no se prendan los pines 
$fp = fopen("php/raspi.txt", "w");
fputs($fp, "0");
fclose($fp);

header('Location: index.html');