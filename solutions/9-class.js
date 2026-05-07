export default class Cart {
  constructor() {
    this.items = []; // Хранилище товаров
  }
  addItem(item, count) {
    this.items.push({ item, count }); // Добавляем товар и количество
  }
  getItems() {
    return this.items; // Возвращаем массив товаров
  }
  getCost() {
    let total = 0;
    for (const { item, count } of this.items) {
      total += item.price * count; // Суммируем цену * количество
    }
    return total;
  }
  getCount() {
    let total = 0;
    for (const { count } of this.items) {
      total += count; // Суммируем количество
    }
    return total;
  }
}
