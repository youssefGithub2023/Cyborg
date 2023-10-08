<?php
    header("Access-Control-Allow-Origin: *");

    // Start connect to databse
    $dsn = "mysql:host=localhost;dbname=cyborg";
    $user = "root";
    $pass = "";

    try {
        $con = new PDO($dsn, $user, $pass);
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
    // End connect to database

    $gamesData = $con->prepare("SELECT * FROM games");
    $gamesData->execute();

    $gamesData = $gamesData->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($gamesData);