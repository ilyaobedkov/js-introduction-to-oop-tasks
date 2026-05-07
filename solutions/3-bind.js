const bind = (obj, fn) => {
  // возвращаем новую функцию, которая при вызове будет привязана к obj
  return (...args) => {
    // используем apply, чтобы вызвать fn с контекстом obj и переданными аргументами
    return fn.apply(obj, args);
  };
};
export default bind;
