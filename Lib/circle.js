const Shape = require("./shape");

class circle extends Shape {
    // constructor() { 
    //     super ()
    // }
    render() {
        return `<circle cx="150" cy="100" r= "80" fill="${this.color}" />`
    }
};

module.exports = circle;

