<?php
include "db.php";

$sql = "SELECT * FROM routine ORDER BY day, time";
$result = $conn->query($sql);

$routines = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $routines[] = $row;
    }
}

echo json_encode($routines);
$conn->close();
?>
