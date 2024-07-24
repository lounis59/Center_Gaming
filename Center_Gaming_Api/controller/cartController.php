<?php
    header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
    session_start();

    require __DIR__ . "/../model/userModel.php";

    switch ($_SERVER["REQUEST_METHOD"]){
        case "GET": addToCart();
    }

    function addToCart(){

        if(!empty($_GET["game"]))
        {
            if(isset($_SESSION["panier"]))
            {
                $_SESSION["panier"][] = (int)$_GET["game"];
            }else{
                $_SESSION["panier"] = array((int)$_GET["game"]);
            }
        }else{
            returnGame();
        }
    }

    function returnGame(){
        if(empty($_SESSION["panier"]))
        {
            echo json_encode("Votre panier est vide");
        }else{

            echo json_encode($_SESSION["panier"]);
        }
    }
 ?>