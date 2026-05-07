function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = () => this.x; 
  this.getY = () => this.y;
}
function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = () => this.beginPoint;
  this.getEndPoint = () => this.endPoint;
}
function reverse(segment) {
  // создаем новые точки с координатами от конца и начала исходного отрезка
  const newBeginPoint = new Point(
    segment.getEndPoint().getX(),
    segment.getEndPoint().getY()
  );
  const newEndPoint = new Point(
    segment.getBeginPoint().getX(),
    segment.getBeginPoint().getY()
  );
  return new Segment(newBeginPoint, newEndPoint);  // возвращаем новый перевернутый отрезок
}
export { Point, Segment, reverse };
