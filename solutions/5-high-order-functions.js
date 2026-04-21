import _ from 'lodash';
const takeOldest = (users, count = 1) => {
  // Сортируем пользователей по дате рождения (от старых к молодым)
  const sortedUsers = _.sortBy(users, (user) => Date.parse(user.birthday));
  // Возвращаем первых count пользователей
  return _.slice(sortedUsers, 0, count);
};
export default takeOldest;
