<?php
// Name = Krishal Maharjan
// Id = 2408955
function db_connection($server,$username,$password){
    try{
        $connection = new mysqli($server,$username,$password);
        if (!$connection){
            echo"not connected";
        }
        return $connection;
    }
    catch(Exception $error){
        echo '{"Error":"connection"}';
    }

}
function db_creation($connection){
    if ($connection) {

        $connection->query('CREATE DATABASE IF NOT EXISTS Weather_data');
        $connection->query('USE Weather_data;');
        $connection->query('CREATE TABLE IF NOT EXISTS weather(time int,city_name varchar(100), temperature int, description varchar(50),humidity int,pressure int, wind_speed int,icon varchar(30));');
        
    }
    else{
        echo '{"Error":"Cannot create database."}';
    }

    
}

function get_city($connection, $city){
    try {
        $result = $connection -> query('SELECT * FROM weather WHERE city_name = "'.$city.'";');
        if($result){
            $data = $result -> fetch_all(MYSQLI_ASSOC);
            return $data;
        }else{
            return null;
        }
       
       

    } catch (Exception $error) {
        return "error occured: %{$error}";
    }
}

function insert_weather_info($connection, $city_name , $city_data){

        $temperature = $city_data["main"]['temp'];
        $time = $city_data["dt"];
        $description = $city_data["weather"][0]["description"];
        $humidity = $city_data["main"]["humidity"];
        $pressure = $city_data["main"]["pressure"];
        $wind_speed = $city_data["wind"]["speed"];
        $icon = $city_data["weather"][0]["main"];

        $result = $connection -> query('INSERT INTO weather VALUES (
            '.$time.',"'.$city_name.'",'.$temperature.',"'.$description.'",'.$humidity.','.$pressure.','.$wind_speed.',"'.$icon.'"
        );');
        if ($result){
            return true;
        }else{
            return false;
        }

    }
?>