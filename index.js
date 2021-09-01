// @flow
let text /*: string */ = ('JavaScript' /*: number */);
let lowerStr /*: string */ = text.toLowerCase();
let textToArr /*: Array<string> */ = lowerStr.split('');

let alphabet /*: string */ = ' abcdefghijklmnopqrstuvwxyz';
let alphabetToArr /*: Array<string> */ = alphabet.split('');

let result /*: Array<number> */= textToArr.map(elem => alphabetToArr.indexOf(elem));

console.log(result);
