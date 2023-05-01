const Shape = require("./shape");

class square extends Shape {
    constructor() {
        render () = {
            return: `
            <svg xmls="http:/www.w3.org/2000/svg" width ="400" height="400" version="1.1">
            
            <${logoShape} cx="150" cy="100" r= "80" fill="${color}" />
            
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text> </svg>
            `
        }
    }
};

module.exports = circle;


