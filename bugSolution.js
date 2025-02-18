function foo(a, b) {
  // Type checking to ensure both arguments are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Arguments must be numbers');
  }
  return a + b;
}

function bar() {
  try {
    let result = foo(1, '2');
    console.log(result); //This line will not be reached
  } catch (error) {
    console.error(error.message); //Output: Arguments must be numbers
  }
  try {
    let result = foo(1,2);
    console.log(result); //Output: 3
  } catch (error) {
    console.error(error.message);
  }
}

bar();