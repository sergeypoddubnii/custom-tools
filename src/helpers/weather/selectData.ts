export const selectData = (data) => {
  const {
    sunrise,
    sunset,
    ob_time,
    city_name,
    pres,
    wind_spd,
    wind_cdir_full,
    temp,
    app_temp,
    rh,
    clouds,
    weather,
  } = data;

  return {
    sunrise,
    sunset,
    ob_time,
    city_name,
    pres,
    windSpeed: wind_spd,
    windDirection: wind_cdir_full,
    temp: Math.round(temp),
    tempFills: Math.round(app_temp),
    humidity: rh,
    clouds,
    weather,
  };
};
