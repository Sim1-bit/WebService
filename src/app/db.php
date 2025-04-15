<?php
    $host = 'db'; 
    $dbname = 'test'; 
    $user = 'root';
    $password = 'root';
    $port = 3306;

    $conn = new mysqli($host, $user, $password, $dbname, $port);

    if ($conn->connect_error) 
    {
        die("Errore di connessione: " . $conn->connect_error);
    }