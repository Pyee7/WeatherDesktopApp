<?php
// Name = Krishal Maharjan
// Id = 2408955
include("database_connection.php");
include("API_in_php.php");

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");

$connection = db_connection('sql109.infinityfree.com', 'if0_35919296', 'XX59mBsR3NDINg3');
if(isset( $_GET['city_name'])){
    $city_name = $_GET['city_name'];
}else{
    echo'{"Error":"No city provided"}';
}


    $data = array();
    $connection -> query('USE Weather_data;');
    $result = $connection -> query('SELECT * FROM weather WHERE city_name = "'.$city_name.'";');
    while($row = $result -> fetch_all(MYSQLI_ASSOC)){
        $data[] = $row;

        echo json_encode($data);
    }
?>