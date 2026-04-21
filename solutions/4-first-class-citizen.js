const run = (text) => {
  // Получение последних n символов в обратном порядке
  const takeLast = (str, n) => {
    // Если строка пустая или короче n символов, возвращаем null
    if (str.length === 0 || str.length < n) {
      return null;
    }
    // Получаем последние n символов
    const lastChars = str.slice(-n);
    // Разворачиваем строку и возвращаем результат
    return lastChars.split('').reverse().join('');
  };
  // Вызываем takeLast с числом 4
  return takeLast(text, 4);
};
export default run;
