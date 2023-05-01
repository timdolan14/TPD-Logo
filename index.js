// Establish Variables
const inquirer = require('inquirer');
const fs = require('fs');
// const { text } = require('stream/consumers');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up tp three characters here',

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
        choices: ['Square','Circle','Triangle'],
    },
];

// const writeToFile = ({text, color, textColor, shape}) =>
// `
// Shapes?

// `;

function createShape ()


// Function to Create File
function init () {
inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        fs.writeFile('logo.svg', writeToFile(response), (err) => {
            err ? console.log(err) : console.log("Succcess");
        });
    })
}

// Function call to initialize app
init();