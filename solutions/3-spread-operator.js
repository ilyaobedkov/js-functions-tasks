// Конвертации массивов дат в читаемые строки
const convert = (...dates) => {
  return dates.map(([year, month, day]) => 
    new Date(year, month, day).toDateString()
  );
};
export default convert;
