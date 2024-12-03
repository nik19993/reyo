<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ForecastResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'city_name' => $this['city_name'],
            'max_tmp' => $this['max_tmp'] ,
            'min_tmp' => $this['min_tmp'] ,
            'timestamp_dt' => $this['timestamp_dt'],
            'wind_spd' => $this['wind_spd']
        ];
    }
}
