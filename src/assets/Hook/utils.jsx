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

// Array de nombres de días y meses en inglés
export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const monthsAvr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Función para ajustar la fecha y hora a una zona horaria específica
export const adjustTimezone = (date, timezone) => {
  let timezoneOffsetMillis = timezone * 1000;
  date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000 + timezoneOffsetMillis);
  return date;
};

// Función para obtener el nombre del día de la semana
export const getDayName = (date) => {
  return days[date.getDay()];
};

// Función para obtener el nombre del mes
export const getMonthName = (date) => {
  return months[date.getMonth()];
};

// Función para obtener el nombre abreviado del mes
export const getMonthAvrName = (date) => {
  return monthsAvr[date.getMonth()];
};
