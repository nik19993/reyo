import { useRef, useState } from "react";
import { createForecast, loadForecasts } from "../../lib/forecast";

export function useViewModel() {
    const cityRef = useRef(null);
    const [list, setList] = useState([]);
    const [type, setType] = useState("");
    const [fieldError, setError] = useState(false);

    const loadDataByApi = () => {
        if (validate()) {
            loadForecasts("api", cityRef?.current.value)
                .then((response) => {
                    setList(response.data);
                    setType("api");
                })
                .catch((error) => {
                    alert("Error loading forecasts by API");
                });
        }
    };

    const loadDataByDB = () => {
        if (validate()) {
            loadForecasts("db", cityRef?.current.value)
                .then((response) => {
                    setList(response.data);
                    setType("db");
                })
                .catch((error) => {
                    alert("Error loading forecasts by DB");
                });
        }
    };

    const saveData = () => {
        if (list.length > 0) {
            createForecast(cityRef?.current.value, list[0]);
        } else {
            alert("Forecast doesn't exist!");
        }
    };

    const parseListDB = () => {
        return {
            date: list[0]?.timestamp_dt,
            city: capitalizeWords(list[0]?.city_name),
        };
    };

    const parseListApi = () => {
        return {
            start: list[0]?.timestamp_dt,
            end: list[list.length - 1]?.timestamp_dt,
            city: capitalizeWords(list[0]?.city_name),
        };
    };

    const validate = () => {
        if (cityRef.current.value) {
            setError(false);
            return true;
        }
        setError(true);
        return false;
    };

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
    }

    return {
        cityRef,
        loadDataByApi,
        loadDataByDB,
        saveData,
        list,
        type,
        parseListApi,
        parseListDB,
        fieldError,
    };
}
