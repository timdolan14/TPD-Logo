class Shape {
    constructor ({text, textColor, color, logoShape}) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
        this.logoShape = logoShape;
    }
} if (text.length > 3) {
    return "Must be 3 Letters"
};

if (option === "Circle") {
        render () = {
            return: `<circle cx="25" cy="75" r="20"/>`
        }
    }


if (option === "Sqaure") {
    render () = {
            return: `<rect x="10" y="10" width="30" height="30"/>
            <rect x="10" y="10" rx="10" ry="10" width="30" height="30"/>`
    }
}

if (option === "Triangle") {
    render () = {
            return: `<triangle>`
        }
    }

module.exports = Shape;