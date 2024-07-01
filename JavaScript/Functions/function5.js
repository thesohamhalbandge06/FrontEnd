/*
In JS Functions are first class citizen
In JS Functions can be returned from a function and function can be passed as an argument to another function
*/

function someFunction() {
    // computation
    return function() {
        return 10;
    }
};