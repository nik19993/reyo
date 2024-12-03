<?php
namespace App\Services\Forecast;


use Exception;


class ForecastFactory {
    static  public function getList($type) : ForecastInterface
    {
        switch($type){
            case 'db':return new ForecastDB();
            case 'api': return new ForecastAPI();
            default: throw new Exception('Type of forecast undefined');
        }
    }
}
