import axios from "axios";

export async function loadForecasts(type, city) {
    const res = await axios.get(`/api/forecast/${type}/type/${city}/city`);
    return res;
}

export async function createForecast(city, data) {
    const res = await axios.post(`/api/forecast/${city}`, data);
    return res;
}
