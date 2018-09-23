'use strict';

console.log('Babel rocks' + n);
console.log('Babel rocks' + 'Hello');
function hello(param) {
  func();
  return console.log('Babel rocks' + param);
}
function hello(n) {
  console.log('Babel rocks' + n);
}
function hello(param1, param2) {
  console.log('Babel rocks' + param1, param2);
}
function console(p) {
  console.log('Babel rocks' + ':)');
}
console('p');
console.log('Babel rocks' + 'p').bind();
console.log.bind();
console.log('Babel rocks').bind();
console.log('Babel rocks' + '>' + hello);