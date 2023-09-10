export const getAdjustedUTC = (hour) => {
  const horaUTC = new Date();
  const desplazamientoEnSegundos = hour;
  const horaUTCajustada = new Date(
    horaUTC.getTime() + desplazamientoEnSegundos * 1000
  );
  const horas = horaUTCajustada.getUTCHours();
  const minutos = horaUTCajustada.getUTCMinutes();

  const horaFormateada = `${horas.toString().padStart(2, "0")}:${minutos
    .toString()
    .padStart(2, "0")}`;

  return horaFormateada;
};


export const convertKelvinToCelsius = (temperatureKelvin) => {
  return temperatureKelvin - 273.15;
};

export const convertMsToKmh = (windSpeedMs) => {
  return windSpeedMs * 3.6;
}
