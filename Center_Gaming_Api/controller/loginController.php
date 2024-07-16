<?php
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    header("Access-Control-Allow-Credentials: true"); // Autoriser les credentials
    exit;
}

// Pour les autres requêtes, ajustez selon votre logique actuelle
header("Access-Control-Allow-Origin: http://localhost:4200"); // Remplacez par l'URL de votre frontend
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');
session_start();

require __DIR__ . "/../model/userModel.php";
require __DIR__ . "/../service/_csrf.php";

switch ($_SERVER["REQUEST_METHOD"]) {
    case "POST":
        if (isset($_POST['action']) && $_POST['action'] == 'logout') {
            logout();
        } else {
            loged();
        }
        break;
    case "GET":
        checkSession();
        break;
    
}

function loged(): void {
    $userEmail = $pass = "";
    $errors = [];

    if (empty($_POST["email"])) {
        $errors[] = ["propertyPath" => "email", "message" => "Veuillez entrer un email"];
    } else {
        $userEmail = trim($_POST["email"]);
    }

    if (empty($_POST["password"])) {
        $errors[] = ["propertyPath" => "password", "message" => "Veuillez entrer un mot de passe"];
    } else {
        $pass = trim($_POST["password"]);
    }

    if (empty($errors)) {
        $user = getOneUserByEmail($userEmail);

        if ($user) {
            if (password_verify($pass, $user["password"])) {
                $_SESSION["logged"] = true;
                $_SESSION["idUser"] = $user["idUser"];
                http_response_code(201);
                echo json_encode(["status" => 201, "message" => "Connexion réussie"]);
                exit;
            } else {
                $errors[] = ["propertyPath" => "password", "message" => "Mot de passe incorrect"];
            }
        } else {
            $errors[] = ["propertyPath" => "email", "message" => "Email incorrect"];
        }
    }

    http_response_code(400);
    echo json_encode(["status" => 400, "data" => ["violations" => $errors]]);
}

function checkSession(): void {
    if (isset($_SESSION["logged"]) && $_SESSION["logged"] === true) {
        echo json_encode(["logged" => true]);
    } else {
        echo json_encode(["logged" => false]);
    }
}
function logout(): void {
    session_unset();
    session_destroy();
    http_response_code(200);
    echo json_encode(["status" => 200, "message" => "Déconnexion réussie"]);
}
?>
