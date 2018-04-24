let _ = require('underscore');

var fib = function(n) {
  if (n === 1 || n === 0) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.time('slow fib');
fib(42);
console.timeEnd('slow fib');

fib = _.memoize(fib);

console.time('fast fib');
fib(40);
console.timeEnd('fast fib');