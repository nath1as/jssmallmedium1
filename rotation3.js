function maxRotation(num) {
  var limit = String(num).length;
  var i;
  for (i = limit; i > 0; i--) {
    num = rotateRightmostDigits(num, i);
  }
  return num;
}

function rotateRightmostDigits(number, n) {
  var numberString = String(number);
  var firstPart = numberString.slice(0, numberString.length - n);
  var secondPart = numberString.slice(numberString.length - n);
  var resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

console.log(maxRotation(735291));          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845


