const groupBy = (objects, property) => {
  return objects.reduce((acc, obj) => {
    // Получаем значение свойства, по которому группируем
    const key = obj[property];
    // Если такой группы ещё нет, создаём пустой массив
    if (!acc[key]) {
      acc[key] = [];
    }
    // Добавляем текущий объект в соответствующую группу
    acc[key].push(obj);
    return acc;
  }, {});
};
export default groupBy;
