const getChildren = (users) => {
  // Извлекаем массив детей для каждого пользователя
  const childrenArrays = users.map(user => user.children);
  // Превращаем массив массивов в плоский список
  return childrenArrays.flat();
};
export default getChildren;
