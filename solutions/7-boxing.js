export default function magic(...args) {
  // Суммируем все переданные аргументы
  let sum = args.reduce((acc, num) => acc + num, 0);
  // Создаем функцию, которая будет принимать следующие аргументы
  const func = (...nextArgs) => {
    // Добавляем новые аргументы к общей сумме
    const nextSum = nextArgs.reduce((acc, num) => acc + num, 0);
    // Возвращаем новую функцию с обновленной суммой
    return magic(sum + nextSum);
  };
  func.valueOf = () => sum;
  return func;
}
