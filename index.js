// @flow
let text /*: string */ = ('JavaScript' /*: string */);
let lowerStr /*: string */ = ((text /*: ?this_is_a_value? */).(toLowerCase/*: ?and_this_one_kinda_too_even_though_surrounding_it_with_()_brakes_the_syntax? */)() /*: string */);
let textToArr /*: Array<string> */ = lowerStr.split('');

let alphabet /*: string */ = ' abcdefghijklmnopqrstuvwxyz';
let alphabetToArr /*: Array<string> */ = alphabet.split('');

let result /*: Array<number> */= textToArr.map(elem => alphabetToArr.indexOf(elem));

console.log(result);
