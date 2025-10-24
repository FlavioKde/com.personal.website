<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = htmlspecialchars($_POST["name"]);
        $email = htmlspecialchars($_POST["email"]);
        $message = htmlspecialchars($_POST["message"]);

        $to = "flaviodavirro@gmil.com";
        $subjet = "Nuevo mensaje desde el portfolio"
        $body = "Nombre: $name\nEmail: $email\nMessage: \n$message"

        $headers = "From: $email";

        if(mail($to, $subjet, $body, $headers)){
            echo"Mensaje enviado correctamente"
        }else{
            echo"El mensaje no se pudo enviar, vuelva a intentarlo";
            }
        }
    ?>