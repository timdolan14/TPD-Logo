const Shape = require("./shape");

class triangle extends Shape {
render() {
    return `<svg height="500" width="500">
    <polygon points="100, 0, 0, 0, 50, 100" fill="${this.color}" />`
}
};

module.exports = triangle;