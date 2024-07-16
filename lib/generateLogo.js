const inquirer = require('inquirer')
const fs = require('fs')

const generateSVG = (text, textColor, shape, shapeColor) => {
    let shapeSvg;

    switch (shape) {
        case 'circle':
            shapeSvg = '<circle cx="150" cy="100" r="80" fill=${shapeColor}" />';
            break;
        
    }
}
