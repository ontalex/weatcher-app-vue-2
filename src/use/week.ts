import type { IWeatherGPS } from "@/components/Forecast/WeatherGPS.interfaces";
import { useFetch } from "./useFetch";

export async function useWeek() {
  const fetching = await useFetch<IWeatherGPS>(
    "https://api.weather.ontalex.ru/weather/week/gps",
    {
      params: {
        days: 7
      }
    }
  );
  fetching.request();

  return fetching
}
