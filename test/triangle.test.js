const triangle = require("../Lib/triangle");

describe("Triangle", () => {
    describe("SVG Create", () => {
        it('This should have 3 letters, text color, logo color and be a triangle', () => {
            const tri = new triangle({
                text: "rjk",
                textColor: "black",
                color: "red",
                logoShape: "triangle",
            });
            expect(tri.render()).toBe(`<polygon points="150 80, 200 182, 90 182" fill="" />`);
        });
    });
});

