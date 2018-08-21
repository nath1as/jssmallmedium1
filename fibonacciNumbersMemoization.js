function fibonacci(n) {
  var mem = {};

  if (n <= 2) {
    return 1;
  } else {
    if (mem[n]) {
      return mem[n];
    } else {
      mem[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return mem[n];
    }
  }
}

// alternative:
// function fibonacciMemo(nth) {
//   return (function (memo) {
//     return memo[nth] || (memo[nth] = fibonacciMemo(nth - 1) + fibonacciMemo(nth - 2));
//   })({1: 1, 2: 1});
// }

console.log(
  fibonacci(1),       // 1
  fibonacci(2),       // 1
  fibonacci(3),       // 2
  fibonacci(4),       // 3
  fibonacci(5),       // 5
  fibonacci(12),      // 144
  fibonacci(20),      // 6765
);
