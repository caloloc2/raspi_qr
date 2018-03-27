<?php 

$respuesta['estado'] = false;

$usuario = $_POST['usuario'];
$clave = $_POST['clave'];

if (($usuario=='admin')&&($clave=='1234')){
	session_start();
	$_SESSION['login'] = true;
	$respuesta['estado'] = true;
}

echo json_encode($respuesta);
