// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.

const multiply = require('./multiply');
const add = require('./add');

console.log('Hello from the developer console!');
console.log(new Date());
console.log("HEY YOU! !!!");
console.log(multiply(add(2, 2), 4));
