<?php
    require_once __DIR__. "/../service/_pdo.php";
    /**
     * Recupere tous les utilisateur
     *
     * @return array
     */
    function getAllUsers(): array{

        $pdo = connexionPDO();
        $sql = $pdo->query("SELECT idUser, username FROM user");
        return $sql->fetchAll();
    }
    /**
     * Selectionne un utilisateur par son email
     *
     * @param string $email email de l'utilisateur
     * @return array|false
     */
    function getOneUserByEmail(string $email):array|false
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("SELECT * FROM user WHERE email = ?");
        $sql->execute([$email]);
        return $sql->fetch();
    }
    /**
     * selectionne un utilisateur par son id
     *
     * @param string|integer $id id de l'utilisateur
     * @return array|false
     */
    function getOneUserById(string|int $id):array|false
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("SELECT * FROM user WHERE idUser = ?");
        $sql->execute([$id]);
        return $sql->fetch();
    }
    /**
     * Ajoute un utilisateur en BDD
     *
     * 
     * @param string $email email de l'utilisateur
     * @param string $password mot de passe de l'utilisateur
     * @return void
     */
    function addUser(string $email,string $password): void
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("INSERT INTO user(email,password) VALUES(?,?)");
        $sql->execute([$email,$password]);
    }
    /**
     * Supprime un utilisateur via son ID
     *
     * @param string|integer $id id de l'utilisateur 
     * @return void
     */
    function deleteUserById(string|int $id):void
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("DELETE FROM user WHERE idUser=?");
        $sql->execute([$id]);
    }
    /**
     * Met a jour un utilisateur via son ID
     *
     * @param string $username Nom de l'utilisateur
     * @param string $email email de l'utilisateur
     * @param string $password mot de passe de l'utilisateur
     * @param string|integer $id id de l'utilisateur
     * @return void
     */
    function updateUserById(string $email,string $password, string|int $id):void
    {
        $pdo = connexionPDO();
        $sql = $pdo->prepare("UPDATE user SET username=?,email=?,password=? WHERE idUser=?");
        $sql->execute([$email,$password,$id]);
    }
?>