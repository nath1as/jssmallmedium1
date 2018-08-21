function fibonacci(num) {
  var i;
  var fibonacci = [1, 1];
  for (i = 3; i <= num; i++) {
    fibonacci = [fibonacci[1], fibonacci[0] + fibonacci[1]];
  }
  return fibonacci[1];
}

console.log(
  fibonacci(20),       // 6765
  fibonacci(50),       // 12586269025
  fibonacci(100),      // 354224848179261915075
);
