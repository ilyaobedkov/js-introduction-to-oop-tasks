export default function Money(value, currency = 'usd') {
  // Сохраняем колчиесво денег
  this.value = value;
  // Сохраняем валюту
  this.currency = currency;
}
// Возвращает числовое значение денег
Money.prototype.getValue = function() {
  return this.value;
};
// Возвращает валюту денег ('usd' или 'eur')
Money.prototype.getCurrency = function() {
  return this.currency;
};
// Конвертирует деньги в указанную валюту
Money.prototype.exchangeTo = function(currency) {
  // Если валюта не меняется, возвращаем копию текущих денег
  if (this.currency === currency) {
    return new Money(this.value, currency);
  }
  let newValue;
  // Конвертация usd -> eur (курс 0.7: 1 usd = 0.7 eur)
  if (this.currency === 'usd' && currency === 'eur') {
    newValue = this.value * 0.7;
  } 
  // Конвертация eur -> usd (курс 1.2: 1 eur = 1.2 usd)
  else if (this.currency === 'eur' && currency === 'usd') {
    newValue = this.value * 1.2;
  }
  // Возвращаем новый объект с конвертированным значением и новой валютой
  return new Money(newValue, currency);
};
// Складывает текущие деньги с другими (возможна конвертация валют)
Money.prototype.add = function(money) {
  // Сначала конвертируем добавляемые деньги в валюту текущих
  const convertedMoney = money.exchangeTo(this.currency);
  // Складываем значения (оба уже в одинаковой валюте)
  const sum = this.value + convertedMoney.getValue();
  // Возвращаем новый объект с суммой в валюте исходных денег
  return new Money(sum, this.currency);
};
// Форматирует вывод денег для пользователя
Money.prototype.format = function() {
  // Соответствие валют для локализованного форматирования
  const symbols = {
    'usd': 'USD',  // Доллар США
    'eur': 'EUR'   // Евро
  };
  return this.value.toLocaleString(undefined, {
    style: 'currency',
    currency: symbols[this.currency]
  });
};
