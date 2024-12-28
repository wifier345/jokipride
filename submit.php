<?php
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $phone = $_POST['phone'];
    $services = $_POST['services'];
    $details = $_POST['details'];

    $sql = "INSERT INTO pesanan (nama_pelanggan, no_hp, jenis, detail) VALUES ('$name', '$phone', '$services', '$details')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Pesanan berhasil disimpan.";
    } else {
        echo "Error: ";
    }
    
}
?>
