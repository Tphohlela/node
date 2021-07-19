// //import the greet module that is in the current folder
// const greet = require('./greet');

// console.log(greet('Xola'));

var figlet = require('figlet');
 
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});