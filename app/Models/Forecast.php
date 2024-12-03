<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Forecast extends Model
{
   protected $fillable = ['timestamp_dt', 'city_name' ,'min_tmp' , 'max_tmp' , 'wind_spd'];
}
