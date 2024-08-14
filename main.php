<?php
// Name = Krishal Maharjan
// Id = 2408955
include("database_connection.php");
include("API_in_php.php");

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");

$connection = db_connection('sql109.infinityfree.com', 'if0_35919296', 'XX59mBsR3NDINg3');
db_creation($connection);

if(isset( $_GET['city_name'])){
    $city_name = $_GET['city_name'];
}else{
    echo'{"Error":"No city provided"}';
}
$existingData = 0;
$allData = get_city($connection, $city_name);
if (count($allData) == 0){
    $existingData = null;
}
else{
    $lastIndex = count($allData)-1;
    $existingData = $allData[$lastIndex];
}

if ($existingData){
    $refreshTime =  24 * 60 *60; //1 day
    $dataTimeStamp = 0;
    if(isset($existingData['time'])){
        $dataTimeStamp = $existingData['time'];
    }
    $currentTime = time();
    if ($currentTime - $dataTimeStamp > $refreshTime){
        $newData = fetch_current_data($city_name);
        if($newData){
            $inserted = insert_weather_info($connection,$city_name, $newData);
            if($inserted){
                $db_formatData = [
                "time"=> $newData['dt'],
                "city_name"=>$city_name,
                "temperature"=>$newData['main']['temp'],
                "description"=>$newData["weather"][0]["description"],
                "humidity"=>$newData["main"]["humidity"],
                "pressure"=>$newData["main"]["pressure"],
                "wind_speed"=>$newData["wind"]["speed"],
                "icon"=>$newData["weather"][0]["main"]];

                echo json_encode($db_formatData);
            }else{
            echo '{"Error":"Data could not be inserted"}';
            }
        }else{
            echo '{"Error":"Data could not be fetched"}';
            exit;
        }
    }else{
        echo json_encode($existingData);
        exit;
    }
}
else{
    $newData = fetch_current_data($city_name);
        if($newData){
            $inserted = insert_weather_info($connection,$city_name, $newData);
            if($inserted){
                $db_formatData = [
                    "time"=> $newData['dt'],
                    "city_name"=>$newData['name'],
                    "temperature"=>$newData['main']['temp'],
                    "description"=>$newData["weather"][0]["description"],
                    "humidity"=>$newData["main"]["humidity"],
                    "pressure"=>$newData["main"]["pressure"],
                    "wind_speed"=>$newData["wind"]["speed"],
                    "icon"=>$newData["weather"][0]["main"]
                ];
    
                echo json_encode($db_formatData);
            }else{
                echo '{"Error":"Data could not be inserted"}';
            }
        }else{
            echo json_encode($existingData);
            exit;
        }
}

?>