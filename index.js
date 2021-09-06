// @flow
var text /*: string */ = ('JavaScript' /*: string */);
var lowerStr /*: Array<string> */ = ((text /*: string */).(toLowerCase/*: Function */)().split('') /*: Array<string> */);

var alphabet /*: string */ = (' abcdefghijklmnopqrstuvwxyz' /* string */);
var alphabetToArr /*: Array<string> */ = (alphabet /*: string */).split('');

var result /*: Array<number> */= (lowerStr /*: Array<string> */).map(elem => (alphabetToArr /*: Array<string> */).indexOf(elem));

console.log(result);
