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

//<svg xmls="http:/www.w3.org/2000/svg" width ="400" height="400" version="1.1">
//  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text> </svg>

