function wordToDigit(string) {
  return string.replace(/zero/g, '0').replace(/one/g, '1').replace(/two/g, '2').replace(/three/g, '3').replace(/four/g, '4').replace(/five/g, '5').replace(/six/g, '6').replace(/seven/g, '7').replace(/eith/g, '8').replace(/nine/g, '9');
}
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
