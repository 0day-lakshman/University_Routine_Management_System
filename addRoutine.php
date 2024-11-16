<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $course = $_POST["course"];
    $faculty = $_POST["faculty"];
    $day = $_POST["day"];
    $time = $_POST["time"];
    $room = $_POST["room"];

    $sql = "INSERT INTO routine (course, faculty, day, time, room) VALUES ('$course', '$faculty', '$day', '$time', '$room')";

    if ($conn->query($sql) === true) {
        echo "New routine added successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
