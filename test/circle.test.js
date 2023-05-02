const circle = require("../Lib/circle");

describe("Circle", () => {
    describe("SVG Create", () => {
        it('This should have 3 letters, text color, logo color and be a cirlce', () => {
            const cir = new circle({
                text: "rjk",
                textColor: "black",
                color: "red",
                logoShape: "circle",
            });
            expect(cir.render).toBe(`<polygon points="150 80, 200 182, 90 182" fill="red"`);
        });
    });
});