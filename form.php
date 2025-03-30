<?php

$nombre = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

$message = "este mensaje fue enviado por " . $nombre . ",\r\n";
$message .= "su e-mail es; " . $email . ",\r\n";
$message .= "mensaje: " . $_POST["mensaje"] . ",\r\n";
$message .= "enviado el " . date("d/n/y", time());

$para = "trabajosfidel4@gmail.com";
$asunto = "este mail fue enviado desde la web";

email($para, $asunto, utf8_decode($mensaje), $header ); 

header("location: exito.html")

?>