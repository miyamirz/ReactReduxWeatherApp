const API_KEY='74242fdad656163cfd551631e1e4c44d';
const ROOT_URL=`api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){
  const url=`${ROOT_URL}&q={city},in`;
  const request = axios.get(url);
  return {
      type:FETCH_WEATHER,
      payload:request
  }
}
