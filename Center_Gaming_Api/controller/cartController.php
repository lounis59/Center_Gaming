<?php
    header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE");
    session_start();

    require __DIR__ . "/../model/userModel.php";

    switch ($_SERVER["REQUEST_METHOD"]){
        case "GET": 
            addToCart();
            break;
        case "POST":
             deleteToCart();
             break;
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
    function deleteToCart(){
        $data = json_decode(file_get_contents('php://input'), true);
        error_log("Données reçues: " . print_r($data, true));
    if (isset($data['id'])) {
        $idProduit = $data['id'];
        

        // Appeler la fonction pour supprimer le produit du panier
        
        if (deleteProduct($idProduit)) {
            echo json_encode(['status' => 'success', 'message' => 'Produit supprimé du panier.']);
        } else {
            echo json_encode(['status' => 'error', 'message' => 'Produit non trouvé dans le panier.']);
        }
    } else {
        echo json_encode(['status' => 'error', 'message' => 'ID de produit non fourni.']);
    }
    } 
    
    function deleteProduct($idProduct) {
        if (isset($_SESSION['panier'])) {
            // Log de la session et de l'ID reçu
            error_log("Session panier: " . print_r($_SESSION['panier'], true));
            error_log("ID à supprimer: " . $idProduct);
    
            // Parcourir le panier pour trouver l'élément à supprimer
            foreach ($_SESSION['panier'] as $index => $produit) {
                if ($produit == $idProduct) {
                    // Supprimer l'élément du panier
                    unset($_SESSION['panier'][$index]);
                    // Réindexer le tableau pour éviter les "trous" dans les clés
                    $_SESSION['panier'] = array_values($_SESSION['panier']);
                    return true; // Indiquer que le produit a été supprimé
                }
            }
        }
        return false; // Indiquer que le produit n'a pas été trouvé
    }
    
    
 ?>