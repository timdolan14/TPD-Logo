const square = require("../Lib/square");

describe("Square", () => {
    describe("SVG Create", () => {
        it('This should have 3 letters, text color, logo color and be a square', () => {
            const squ = new square({
                text: "rjk",
                textColor: "black",
                color: "red",
                logoShape: "square",
            });
            expect(squ.render).toBe(`<polygon points="150 80, 200 182, 90 182" fill="red"`);
        });
    });
});