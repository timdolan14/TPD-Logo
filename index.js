// Establish Variables
const inquirer = require('inquirer');
const fs = require('fs');
// const { text } = require('stream/consumers');

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
        choices: ['Square','Circle','Triangle'],
    },
];

const writeToFile = ({text, color, textColor, logoShape}) =>

`
<svg xmls="http:/www.w3.org/2000/svg" width ="400" height="400" version="1.1">

<${logoShape} cx="150" cy="100" r= "80" fill="${color}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text> </svg>
`;

// Function to Create File
function createShape () {
inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        fs.writeFile('logo.svg', writeToFile(response), (err) => {
            err ? console.log(err) : console.log("Succcess");
        });
    })
}

// Function call to initialize app
createShape();