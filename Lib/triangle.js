const Shape = require("./shape");

class triangle extends Shape {
render() {
    return `<polygon points="150 80, 200 182, 90 182" fill="${this.color}" />`
}
};

module.exports = triangle;