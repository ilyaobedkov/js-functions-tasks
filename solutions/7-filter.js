const getGirlFriends = (users) => {
  // Извлекаем массив друзей для каждого пользователя
  const friendsArrays = users.map(user => user.friends);
  // Превращаем массив массивов в плоский список
  const allFriends = friendsArrays.flat();
  // Фильтруем только друзей с полом 'female'
  return allFriends.filter(friend => friend.gender === 'female');
};
export default getGirlFriends;
