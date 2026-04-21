const sequenceSum = (begin, end) => {
  // Если begin > end, возвращаем NaN (пустая последовательность)
  if (begin > end) {
    return NaN;
  }
  // Если begin === end, возвращаем это число
  if (begin === end) {
    return begin;
  }
  // Рекурсивный случай: begin + сумма чисел от begin+1 до end
  return begin + sequenceSum(begin + 1, end);
};
export default sequenceSum;
