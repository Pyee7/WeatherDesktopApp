<?php
// Name = Krishal Maharjan
// Id = 2408955
function fetch_current_data($city_name) {
    try {
        $api_key = "e2fc03ebcaec68bd8e2ab148febe15fd";
        $url = 'https://api.openweathermap.org/data/2.5/weather?q='.$city_name.'&APPID='.$api_key.'';
        $string_format_data = file_get_contents($url);
        $data = json_decode($string_format_data, true);
        return $data;
    } 
    catch (Exception $th) {
        echo 'error';
    }
}

?>