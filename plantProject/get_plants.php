<?php
header('Content-Type: application/json');
require_once 'db.php';

$search = isset($_GET['search']) ? $conn->real_escape_string($_GET['search']) : '';
$id = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($id > 0) {
    $query = "SELECT * FROM plants WHERE id = $id";
} elseif (!empty($search)) {
    $query = "SELECT * FROM plants WHERE name LIKE '%$search%' OR scientific_name LIKE '%$search%'";
} else {
    $query = "SELECT * FROM plants";
}

$result = $conn->query($query);
$plants = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $plants[] = $row;
    }
}

echo json_encode($plants);
$conn->close();
?>
