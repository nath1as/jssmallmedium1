function rotateRightmostDigits(digits, num) {
  var array = String(digits).split('');
  var rotatingPart = [];
  var newArray = [];
  var rotated = [];
  var i;
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  }
  newArray = array.slice(0, array.length  - num);
  rotatingPart = array.slice(-num);
  rotated = rotatingPart.slice(0);
  rotated.shift();
  rotated.push(rotatingPart[0]);
  for (i = 0; i < rotated.length; i++) {
    newArray.push(rotated[i]);
  }
  console.log(newArray.join(''));
}
// alternative
// function rotateRightmostDigits(number, n) {
//   var numberString = String(number);
//   var firstPart = numberString.slice(0, numberString.length - n);
//   var secondPart = numberString.slice(numberString.length - n);
//   var resultString = firstPart + rotateString(secondPart);

//   return Number(resultString);
// }

// function rotateString(string) {
//   return string.slice(1) + string[0];
// }

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
