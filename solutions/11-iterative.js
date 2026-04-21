const smallestDivisor = (num) => {
  // Если число равно 1, возвращаем 1
  if (num === 1) {
    return 1;
  }
  // Начинаем проверку с делителя 2
  const iter = (divisor) => {
    // Если делитель больше квадратного корня из числа,
    // то число простое, возвращаем само число
    if (divisor * divisor > num) {
      return num;
    }
    // Если число делится на делитель без остатка,
    // то это наименьший делитель
    if (num % divisor === 0) {
      return divisor;
    }
    // Иначе проверяем следующий делитель
    return iter(divisor + 1);
  };
  return iter(2);
};
export default smallestDivisor;
