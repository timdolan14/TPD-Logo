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

const writeToFile = ({text, color, textColor, shape}) =>

`
<svg xmls="http:/www.w3.org/2000/svg" width ="400" height="400" version="1.1">

<shape> 

<text x="150" y="125" font-size="60" text-anchor="middle" fill="_COLOR_">__TEXT__</text>

    ${Shape}
    ${text}
    ${textColor}
    ${logoShape}
    ${color}
    
    </svg>
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