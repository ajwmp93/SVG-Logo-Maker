const inquirer = require('inquirer')
const fs = require('fs')

const generateSvg = (text, textColor, shape, shapeColor) => {
    let shapeSvg;

    switch (shape) {
        case 'circle':
            shapeSvg = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
            break;
        case 'triangle':
            shapeSvg = `<polygon points="150,20 230,180, 70,180" fill="${shapeColor}" />`;
            break;
        case 'square':
            shapeSvg = `<rect width="160" height="160" x="70" y="20" fill="${shapeColor}" />`;
            break;
        default:
            throw new Error('Invalid shape selected');    
    }
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSvg}
    <text x="150" y="120" text-anchor="middle" fill="${textColor}" fonst-size"40">
        ${text}
      </text>
    </svg>
    `;
}

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

const main = async () => {
    try {
        const answers = await promptUser();
        const svgContent = generateSvg(answers.text, answers.textColor, answers.shape, answers.shapeColor);

        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    } catch (error) {
        console.error('Error:', error);
    }
};

main();
