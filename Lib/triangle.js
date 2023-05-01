const Shape = require("./shape");

class triangle extends Shape {
    // constructor() {}
render() {
    return `<svg height="500" width="500">
    <polygon points="250,60 100,400 400,400" fill="${this.color}" />`
}
};

module.exports = triangle;