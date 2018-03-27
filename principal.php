<?php 

session_start();

if ((isset($_SESSION['login'])) && ($_SESSION['login'])){ 

	include('contenido.html');

}else{
	header('Location: index.html');
}