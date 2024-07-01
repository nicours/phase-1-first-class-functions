// Define the receivesAFunction function
function receivesAFunction(callback) {
    callback();
  }
  
  // Define the returnsANamedFunction function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function");
    }
    return namedFunction;
  }
  
  // Define the returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function");
    };
  }
  
  // Export the functions for the tests to access them
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
  };
  

