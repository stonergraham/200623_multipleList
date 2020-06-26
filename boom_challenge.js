//Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array":

var test1 = [1, 2, 3, 4, 5, 6, 7];
var test2 = [8, 6, 33, 100];
var test3 = [2, 55, 60, 97, 86];

var sevenator = function(arr) {
  var foundIt = false;
  var strung = [];
  for (var i = 0; i < arr.length; i++) {
    strung.push(arr[i].toString());
  };
  for (var j = 0; j < strung.length; j++) {
    for (var k = 0; k < strung[j].length; k++) {
      if (strung[j][k] === '7') {
        foundIt = true;
      };
    };
  };
  if (foundIt === true) {
    console.log('BOOM!')
  } else {
    console.log('No 7 in the array.');
  };
};
sevenator(test1);
sevenator(test2);
sevenator(test3);