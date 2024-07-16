const inquirer = require('inquirer')
const fs = require('fs')

const promptUser = async () => {
    const questions = [
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
            validate: (input) => (input.length <= 3) || 'Input must be up to three characters.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hex):',
            validate: (input) => input ? true: 'Text color cannot be empty!'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hex):',
            validate: (input) => input ? true: 'Shape color cannot be empty!'
        },
    ];

    return inquirer.prompt(questions);
}

module.exports = inquirer;