<?php
namespace App\Services\Forecast;

use App\Models\Forecast;
use Exception;

class ForecastDB implements ForecastInterface {
    public function getData($city) {

        $result = Forecast::where('city_name', $city)->get();
        if (empty($result)) {
            throw new Exception("Не вдалося отримати дані з бази даних");
        }
        return $result;
    }
}
