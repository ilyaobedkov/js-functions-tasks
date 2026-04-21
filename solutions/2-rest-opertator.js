import _ from 'lodash';
// Вычисление среднего арифметического
const average = (...args) => {
  if (args.length === 0) return null;
  const sum = _.sum(args);
  return sum / args.length;
};
export default average;
