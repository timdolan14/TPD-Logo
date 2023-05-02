const Shape = require("./shape");

class triangle extends Shape {
render() {
    return `<svg viewBox= "0 0 100 100">
    <polygon points="25, 10 75, 10 50, 90" fill="${this.color}" />`
}
};

module.exports = triangle;