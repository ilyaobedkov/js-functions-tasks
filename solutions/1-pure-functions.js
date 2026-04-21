// Проверяет, является ли число простым
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
// Вывод результата
const sayPrimeOrNot = (num) => {
  console.log(isPrime(num) ? 'yes' : 'no');
};
export default sayPrimeOrNot;
