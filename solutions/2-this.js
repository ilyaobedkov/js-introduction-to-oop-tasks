const make = (numer = null, denom = null) => ({
  numer,
  denom,
  setNumer(value) { this.numer = value; },
  setDenom(value) { this.denom = value; },
  getNumer() { return this.numer; },
  getDenom() { return this.denom; },
  toString() { return `${this.numer}/${this.denom}`; },
  add(other) {
    // a/b + c/d = (a*d + b*c) / (b*d)
    const a = this.numer;
    const b = this.denom;
    const c = other.getNumer();
    const d = other.getDenom();
    return make(a * d + b * c, b * d);  // вызываем make внутри себя
  }
});
export default make;
