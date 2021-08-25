// @flow
let text: string = 'JavaScript';
let lowerStr = text.toLowerCase();
let textToArr = lowerStr.split('');

let alphabet = ' abcdefghijklmnopqrstuvwxyz';
let alphabetToArr = alphabet.split('');

let result = textToArr.map(elem => alphabetToArr.indexOf(elem));

console.log(result);
