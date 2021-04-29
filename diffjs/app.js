const Diff = require('diff');

/*
const one = 'beep boop';
const other = 'beep boob blah';
*/

const one = {
    "name": "bill",
    "age": 26
}
const other = {
    "name": "billius",
    "age": 26
}
const diff = Diff.diffJson(one, other);


console.log(diff);