<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "plant_db";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    header('Content-Type: application/json');
    echo json_encode(["error" => "Database Connection Failed: " . $conn->connect_error]);
    exit();
}
?>
