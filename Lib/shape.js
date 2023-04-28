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
        render ()  {
        return () => {
            return `<circle>`
        }
    }
}

if (option === "Sqaure") {
    render () {
        return () => {
            return `<square>`
        }
    }
}

if (option === "Triangle") {
    render () {
        return () =>  {
            return `<triangle>`
        }
    }
}

module.exports = Shape;