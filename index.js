// Establish Variables
const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require("./Lib/circle");
const Square = require("./Lib/square");
const Triangle = require("./Lib/triangle");
const Svg = require("./Lib/svg");

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters here',

    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Which color would you like to use for your text?',
    },
    {
        type: 'input',
        name: 'color',
        message: 'Which color would you like for your shape?',
    },
    {
        type: 'list',
        name: 'logoShape',
        message: 'What shape would you like?',
        choices: ['square','circle','triangle'],
    },
];

// Function to Create File
function createShape () {
inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        let shape;
        switch (response.logoShape) {
            case "circle":
            shape = new Circle()
            break;
            case "triangle":
             shape = new Triangle()
            break;
            case "square":
            shape = new Square()
            break;
        }
        shape.setColor(response.color)
        const svg = new Svg(response.textColor, response.text, shape.render());
        fs.writeFile('logo.svg', svg.render(), (err) => {
            err ? console.log(err) : console.log("Succcess");
        });
    })
}

// Function call to initialize app
createShape();