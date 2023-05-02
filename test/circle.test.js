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
            expect(cir.render()).toBe(`<circle cx="150" cy="150" r="50" fill="" />`);
        });
    });
});