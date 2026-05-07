const each = (collection, callback) => {
  for (let i = 0; i < collection.length; i++) {
    // вызываем callback с контекстом, равным текущему объекту коллекции
    callback.call(collection[i]);
  }
};
export default each;
