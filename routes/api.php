<?php

use App\Http\Controllers\Api\ForecastController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/forecast/{type}/type/{city}/city', [ForecastController::class, 'index'])->name('forecast-index');
Route::post('/forecast/{city}', [ForecastController::class, 'store'])->name('forecast-store');
