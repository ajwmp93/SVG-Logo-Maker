const inquirer = require('inquirer')
const fs = require('fs')

const generateSVG = (text, textColor, shape, shapeColor) => {
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
}
