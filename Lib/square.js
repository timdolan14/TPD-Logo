const Shape = require("./shape");

class square extends Shape {
    render() {
        return `<rect height="100" x="100" y="100" width="100" fill="${this.color}"/>`
    }
}

module.exports = square;