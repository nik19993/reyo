<?php
namespace App\Services\Forecast;

use Exception;

class ForecastAPI implements ForecastInterface {
    public function getData($city) {
        try{
            $cityUrl = urlencode($city);
            $response = file_get_contents("http://api.openweathermap.org/data/2.5/forecast?q={$cityUrl}&units=metric&appid=e4b8b08c185638b825af37facfe1fabb");

            $data = json_decode($response, true);

            if ($data['cod'] !== '200') {
                throw new Exception("Failed to retrieve data from API");
            }
            return $this->mapData($data['list'], $city);
        }
        catch(Exception $exception){
            throw new Exception("Failed to retrieve data from API");
        }

    }

    private function mapData(array $data, $city) {
        return array_map(function ($item) use($city){
            return [
                'timestamp_dt' =>  $item['dt_txt'],
                'city_name' => $city,
                'min_tmp' => $item['main']['temp_min'],
                'max_tmp' => $item['main']['temp_max'],
                'wind_spd' => $item['wind']['speed']
            ];
        }, $data);
    }
}
