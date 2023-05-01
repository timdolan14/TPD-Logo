class Svg {
    constructor (textColor, text, shape) {
        this.textColor = textColor;
        this.text = text;
        this.shape = shape;
    }
    render () {
        return `<svg xmls="http:/www.w3.org/2000/svg" width ="400" height="400" version="1.1">
        ${this.shape}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>
       `
    }
}

module.exports = Svg;