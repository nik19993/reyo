<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ForecastResource;
use App\Models\Forecast;
use App\Services\Forecast\ForecastFactory;
use Exception;
use Illuminate\Http\Request;

class ForecastController extends Controller
{
    public function index($type, $city)
    {
        try {
            $factory = ForecastFactory::getList($type);
            $data = $factory->getData($city);
            return response()->json(ForecastResource::collection($data) ); }
        catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request, $city){

        try{
            $validatedData = $request->validate([
                'timestamp_dt' => 'required|date',
                'city_name' => 'required|string',
                'min_tmp' => 'required|numeric',
                'max_tmp' => 'required|numeric',
                'wind_spd' => 'required|numeric',
            ]);

            $city = strtolower($city);
            $validatedData['city_name'] = strtolower($validatedData['city_name']);

            $forecast = Forecast::whereRaw('LOWER(city_name) = ?', [$city])->first();
            if ($forecast) {
                $forecast->update($validatedData);
            } else {
                Forecast::create($validatedData);
            }

            return response()->json(['message' => 'Data saved successful!'], 200);
        }
        catch(Exception $e){
            return response()->json(['error' => $e->getMessage()], 500);
        }


    }
}
