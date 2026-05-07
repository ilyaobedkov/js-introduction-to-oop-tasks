export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}
export const parseJson = (jsonString) => {
  try {
    return JSON.parse(jsonString); // Пытаемся распарсить JSON
  } catch (error) {
    throw new ParseError('Invalid JSON string'); // Выбрасываем ParseError при ошибке
  }
};
