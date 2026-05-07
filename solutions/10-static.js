export default class Time {
  static fromString(str) {
    const [hours, minutes] = str.split(':'); // Разделяем строку по двоеточию
    return new Time(parseInt(hours, 10), parseInt(minutes, 10)); // Создаем новый объект Time
  }
  constructor(hours, minutes) {
    this.minutes = minutes;
    this.hours = hours;
  }
  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}
