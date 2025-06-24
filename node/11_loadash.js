// lodash is external package so we have to install it first by npm install lodash
// then we can use it in our code
// Example of using lodash to flatten an array deeply



const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems); // Output: [1, 2, 3, 4]