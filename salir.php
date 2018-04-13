<?php

session_start();
session_destroy();

$fp = fopen("php/lugares.txt", "w");
fputs($fp, "0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0");
fclose($fp);

$fp = fopen("php/raspi.txt", "w");
fputs($fp, "0");
fclose($fp);

header('Location: index.html');